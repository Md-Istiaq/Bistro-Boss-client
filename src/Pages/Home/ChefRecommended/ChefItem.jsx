import React from 'react'

function ChefItem({ item }) {
    const { name, image, price, recipe } = item
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-10 rounded-none">
            <figure>
                <img
                    src={image}
                    alt="Shoes" className='lg:w-full lg:h-96 md:h-72 md:w-full h-64 w-full' />
            </figure>
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

export default ChefItem