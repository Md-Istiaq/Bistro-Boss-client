import React from 'react'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import featuredImg from '../../../../src/assets/home/featured.jpg'
import './Featured.css';
function Featured() {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 lg:ml-10 lg:mr-10 md:ml-10 md:mr-10">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex lg:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Looking to try out our featured item? You can order directly from our website or visit any of our locations to enjoy it fresh. Don't miss out on our chef's special recommendations—available for a limited time only!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Featured