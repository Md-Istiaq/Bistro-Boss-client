import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import BistroBoss from '../../Home/BistroBoss/BistroBoss';
import { Background } from 'react-parallax';
function Menu() {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  const drinks = menu.filter(item => item.category === 'drinks')
  return (
    <div className='lg:mr-10 lg:ml-10 md:mr-10 md:ml-10'>
      <Helmet>
        <title>Bistro Boss | menu</title>
      </Helmet>
      <Cover img={menuimg} title={'OUR MENU'} text={"Whould you like to try our dish?"}></Cover>
      <SectionTitle
        subHeading={"Don't misss"}
        heading={"Today's Offer"}
      >
      </SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* This is for dessert items */}
      <div className=' bg-fixed mb-10 bg-gradient-to-t' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1496174883999-edcc585a373f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
        <div className='p-32 flex flex-col items-center text-center'>
          <div className='bg-slate-200 bg-opacity-50 p-10 pb-20 pt-12 px-36'>
            <h3 className="text-4xl font-serif">Dessert</h3>
            <p className='text-justify'>Indulge your sweet tooth with our delectable desserts! From rich cakes to creamy pastries, each treat is crafted to satisfy your cravings and bring a little joy to your day.</p>

          </div>
        </div>
      </div>
      <MenuCategory items={dessert} title={'dessert'}></MenuCategory>
      {/* This is for pizza items */}
      <div className=' bg-fixed mb-10 bg-gradient-to-t' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
        <div className='p-32 flex flex-col items-center text-center'>
          <div className='bg-slate-200 bg-opacity-50 p-10 pb-20 pt-12 px-36'>
            <h3 className="text-4xl font-serif">Pizza</h3>
            <p className='text-justify'>Savor our delicious, hand-crafted pizzas made with the freshest ingredients. From classic favorites to unique specialty toppings, there's a perfect pizza for everyone to enjoy!</p>

          </div>
        </div>
      </div>
      <MenuCategory items={pizza} title={'pizza'}></MenuCategory>
      {/* This is for salad items */}
      <div className=' bg-fixed mb-10 bg-gradient-to-t' style={{ backgroundImage: `url(https://i.ibb.co.com/hBFGjDy/salad-bg.jpg)` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
        <div className='p-32 flex flex-col items-center text-center'>
          <div className='bg-slate-200 bg-opacity-50 p-10 pb-20 pt-12 px-36'>
            <h3 className="text-4xl font-serif">Salad</h3>
            <p className='text-justify'>Fresh, crisp, and full of flavor! Our salads are made with the finest ingredients and designed to be both healthy and delicious. Perfect for a light and refreshing meal.</p>

          </div>
        </div>
      </div>
      <MenuCategory items={salad} title={'salad'}></MenuCategory>
      {/* This is for soup items */}
      <div className=' bg-fixed mb-10 bg-gradient-to-t' style={{ backgroundImage: `url(https://i.ibb.co.com/bJxj2VH/soup-bg.jpg)` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
        <div className='p-32 flex flex-col items-center text-center'>
          <div className='bg-slate-200 bg-opacity-50 p-10 pb-20 pt-12 px-36'>
            <h3 className="text-4xl font-serif">Soup</h3>
            <p className='text-justify'>Warm up with our hearty and comforting soups, made from scratch using fresh ingredients. Each bowl is a perfect blend of flavors, ideal for any time of year!</p>

          </div>
        </div>
      </div>
      <MenuCategory items={soup} title={'soup'}></MenuCategory>
      {/**This section is for drinks */}
      <div className=' bg-fixed mb-10 bg-gradient-to-t' style={{ backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20231108/pngtree-top-view-of-tequila-sunrise-cocktails-on-white-textured-background-image_13792848.png)` ,backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
        <div className='p-32 flex flex-col items-center text-center'>
          <div className='bg-slate-200 bg-opacity-50 p-10 pb-20 pt-12 px-36'>
            <h3 className="text-4xl font-serif">Drinks</h3>
            <p className='text-justify'>Quench your thirst with our selection of refreshing drinks, from freshly squeezed juices to rich, creamy milkshakes. Perfect pairings for any meal!</p>

          </div>
        </div>
      </div>
      <MenuCategory items={drinks} title={'drinks'}></MenuCategory>


    </div>
  )
}

export default Menu