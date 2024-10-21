
import React from 'react'

function FoodCrad({ item }) {
    const { name, image, price, recipe } = item
    return (
        <div className="card card-compact bg-base-100 shadow-2xl drop-shadow-2xl mb-10 rounded-none">
            <figure>
                <img
                    src={image}
                    alt="Food" className='lg:w-full lg:h-72 md:h-72 md:w-full h-64 w-full' />
            </figure>
            <div className="card-actions justify-end absolute right-0 bg-black mr-3 mt-3">
                    <div className=" text-yellow-500 text-xl">${price}</div>
                </div>
            <div className="card-body bg-slate-200 items-center text-center">
                <h2 className="card-title ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning bg-slate-200 border-0 border-b-4 mt-4 items-center text-center text-yellow-400">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default FoodCrad