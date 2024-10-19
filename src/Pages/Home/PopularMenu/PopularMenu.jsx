import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem'

function PopularMenu() {
    const[menu , setMenu] = useState([])
    useEffect( () =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const PopularItems = data.filter(item => item.category === 'popular')
            setMenu(PopularItems) })

    } ,[])
  return (
    <section className='lg:m-10 md:m-10 m-2'>
        <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items">

        </SectionTitle>
        <div className='grid md:grid-cols-2 lg:gap-10 md:gap-10 '>
            {
                menu.map(item => <MenuItem 
                key={item._id}
                item={item}></MenuItem>)
            }
        </div>
        
    </section>
  )
}

export default PopularMenu