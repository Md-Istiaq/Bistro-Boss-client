import React from 'react'
import Banner from '../Banner/Banner'
import Catagory from '../Catagory/Catagory'
import PopularMenu from '../PopularMenu/PopularMenu'
import CallUs from '../CallUs/CallUs'
import Chef from '../ChefRecommended/Chef'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import BistroBoss from '../BistroBoss/BistroBoss'

function Home() {
  return (
    <div>
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