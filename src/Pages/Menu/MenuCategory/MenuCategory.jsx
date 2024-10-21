import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import { Link } from 'react-router-dom'

function MenuCategory({ items ,title }) {
    return (
        <section className='mb-10'>
            <div className='flex flex-col items-center'>
                <div className='grid md:grid-cols-2 lg:gap-10 md:gap-10 '>
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}></MenuItem>)
                    }
                </div>
                <Link to={`/order/${title}`}>
                <button className="btn btn-outline btn-warning bg-slate-200 border-0 border-b-4 mt-4  text-yellow-500 uppercase">ORDER YOUR FAVOURITE {title}</button>
                </Link>

            </div>

        </section>
    )
}

export default MenuCategory