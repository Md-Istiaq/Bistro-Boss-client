import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import useMenu from '../../../hooks/useMenu'

function PopularMenu() {
    const[menu ] = useMenu([])
    const popular = menu.filter(item => item.category === 'popular')

  return (
    <section className='m-2'>
        <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items">
        </SectionTitle>
        <div className='flex flex-col items-center'>
        <div className='grid md:grid-cols-2 lg:gap-10 md:gap-10 '>
            {
                popular.map(item => <MenuItem 
                key={item._id}
                item={item}></MenuItem>)
            }
        </div>
        <button className="btn btn-outline btn-warning bg-slate-200 border-0 border-b-4 mt-4  text-yellow-400">View full Menu</button>

        </div>
        
    </section>
  )
}

export default PopularMenu