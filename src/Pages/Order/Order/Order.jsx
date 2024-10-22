import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import OrderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu'
import FoodCrad from '../../Shared/FoodCrad/FoodCrad';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
function Order() {
    const categories = ['salad' , 'pizza', 'soup' , 'dessert', 'drinks']
    
    const {category} = useParams()
    const intialIndex = categories.indexOf(category)
    const [tabIndex , setTabIndex] = useState(intialIndex)
    const [menu] =useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className='lg:mr-10 lg:ml-10 md:mr-10 md:ml-10'>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={OrderCover} title={'Order Food'} text={'Delicious meals delivered right to your door. Fast, fresh, and hassle-free!'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="tabs tabs-bordered m-10 " >
                    <Tab className="tab">Salad</Tab>
                    <Tab className="tab">pizza</Tab>
                    <Tab className="tab">Soup</Tab>
                    <Tab className="tab">Dessert</Tab>
                    <Tab className="tab">Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Order