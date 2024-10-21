import React from 'react'
import FoodCrad from '../../Shared/FoodCrad/FoodCrad'

function OrderTab({items}) {
  return (
    <div className='grid md:grid-cols-3 lg:gap-10 md:gap-10 '>
    {
        items.map(item => <FoodCrad
        key={item._id}
        item={item}
        ></FoodCrad>)
    }
    </div>
  )
}

export default OrderTab