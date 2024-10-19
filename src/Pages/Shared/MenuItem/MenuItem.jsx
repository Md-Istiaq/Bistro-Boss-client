import React from 'react'

function MenuItem({item}) {
    const {name, image, price, recipe} = item
  return (
    <div className='flex lg:space-x-4 md:space-x-4 mb-4'>
        <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[104px]' src={image} alt="" />
        <div className=''>
            <h3 className='uppercase'>{name}</h3>
            <p>{recipe}</p>
        </div>
        <p className='text-yellow-500'>${price}</p>
    </div>
  )
}

export default MenuItem