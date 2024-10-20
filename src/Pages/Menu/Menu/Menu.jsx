import React from 'react'
import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
function Menu() {
  return (
    <div className=''>
        <Helmet>
        <title>Bistro Boss | menu</title>
      </Helmet>
      <Cover img={menuimg} title={'OUR MENU'} text={"Whould you like to try our dish?"}></Cover>
      <h2 className="text-2xl">menu</h2>
      
    </div>
  )
}

export default Menu