import React, { useEffect, useState } from 'react'
import ChefItem from './ChefItem'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import FoodCrad from '../../Shared/FoodCrad/FoodCrad'
function Chef() {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const ChefItems = data.filter(item => item.category === 'chef recommended')
                setMenu(ChefItems)
            })

    }, [])
    return (
        <section className=' m-2'>
            <SectionTitle
                heading="chef recommended"
                subHeading="Should Try">

            </SectionTitle>
            <div className='grid md:grid-cols-3 lg:gap-10 md:gap-10 '>
                {
                                    menu.map(item => <FoodCrad 
                                        key={item._id}
                                        item={item}>
                                        </FoodCrad>)
                 }
                     </div>
    
         </section>
    )
}

export default Chef