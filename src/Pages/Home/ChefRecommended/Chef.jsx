import React, { useEffect, useState } from 'react'
import ChefItem from './ChefItem'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
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
        <section className='lg:m-10 md:m-10 m-2'>
            <SectionTitle
                heading="chef recommended"
                subHeading="Should Try">

            </SectionTitle>
            <div className='grid md:grid-cols-3 lg:gap-10 md:gap-10 '>
                {
                                    menu.map(item => <ChefItem 
                                        key={item._id}
                                        item={item}>
                                        </ChefItem>)
                 }
                     </div>
    
         </section>
    )
}

export default Chef