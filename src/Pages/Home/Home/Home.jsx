import React from 'react'
import Banner from '../Banner/Banner'
import Catagory from '../Catagory/Catagory'
import PopularMenu from '../PopularMenu/PopularMenu'

function Home() {
  return (
    <div>
    <Banner></Banner>
    <Catagory></Catagory>
    <PopularMenu></PopularMenu>
    </div>
  )
}

export default Home