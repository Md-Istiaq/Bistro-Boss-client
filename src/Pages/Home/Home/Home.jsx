import React from 'react'
import Banner from '../Banner/Banner'
import Catagory from '../Catagory/Catagory'
import PopularMenu from '../PopularMenu/PopularMenu'
import CallUs from '../CallUs/CallUs'
import Chef from '../ChefRecommended/Chef'

function Home() {
  return (
    <div>
    <Banner></Banner>
    <Catagory></Catagory>
    <PopularMenu></PopularMenu>
    <CallUs></CallUs>
    <Chef></Chef>
    </div>
  )
}

export default Home