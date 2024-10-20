import React from 'react'
import Banner from '../Banner/Banner'
import Catagory from '../Catagory/Catagory'
import PopularMenu from '../PopularMenu/PopularMenu'
import CallUs from '../CallUs/CallUs'
import Chef from '../ChefRecommended/Chef'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import BistroBoss from '../BistroBoss/BistroBoss'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div className='lg:mr-10 lg:ml-10 md:mr-10 md:ml-10'>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
    <Banner></Banner>
    <Catagory></Catagory>
    <BistroBoss></BistroBoss>
    <PopularMenu></PopularMenu>
    <CallUs></CallUs>
    <Chef></Chef>
    <Featured></Featured>
    <Testimonials></Testimonials>
    </div>
  )
}

export default Home