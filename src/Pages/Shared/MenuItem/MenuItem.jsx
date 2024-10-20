import React from 'react'

function MenuItem({ item }) {
  const { name, image, price, recipe } = item
  return (
    <div>
      {/*
          <div className='flex lg:space-x-4 md:space-x-4 mb-4'>
      <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[104px]' src={image} alt="" />
      <div className=''>
        <h3 className='uppercase'>{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className='text-yellow-500'>${price}</p>
    </div>
      
      */}
      <div className="flex flex-col md:flex-row items-center p-4 max-w-3xl mx-auto">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
          style={{ borderRadius: '0 200px 200px 200px' }}
            src={image}
            alt="Escalope De Veau"
            className="rounded-lg object-cover w-full h-48 md:h-full"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left m-5">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex-grow border-t-2 border-dotted border-gray-400 mx-4"></div>
          <span className="text-lg text-yellow-500 font-semibold">${price}</span>
        </div>
          <p className="mt-2 text-gray-600">
            {recipe}
          </p>
        </div>
      </div>

    </div>

  )
}

export default MenuItem