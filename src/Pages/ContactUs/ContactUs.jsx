import React from 'react'
import Cover from '../Shared/Cover/Cover'
import img from '../../assets/contact/banner.jpg'
import SectionTitle from '../Shared/SectionTitle/SectionTitle'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { BsClockHistory } from "react-icons/bs";
function ContactUs() {
    return (
        <div className='md:ml-10 md:mr-10 mb-10'>
            <Cover img={img} title={'Contact Us'} text={'Have a question or special request? Get in touch with us! We’re here to ensure your dining experience is nothing short of exceptional.'}></Cover>
            <SectionTitle
                subHeading={'Visit Us'}
                heading={'Our Location'}></SectionTitle>
            {/** Cards section */}
            <div className=' grid grid-cols-3 gap-4'>
                <div>

                    <div className="bg-yellow-600 py-4">
                        <i className=" text-white text-3xl flex flex-cols justify-center "><MdOutlinePhoneInTalk /></i>

                    </div>

                    <div className="bg-gray-100 py-6 text-center">
                        <h3 className="text-lg font-bold">PHONE</h3>
                        <p className="text-gray-600 mt-2">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div>

                    <div className="bg-yellow-600 py-4">
                        <i className=" text-white text-3xl flex flex-cols justify-center "><GrMapLocation /></i>

                    </div>

                    <div className="bg-gray-100 py-6 text-center">
                        <h3 className="text-lg font-bold">ADDRESS</h3>
                        <p className="text-gray-600 mt-2">1234 Bistro Street, Foodie Town, FL 12345, USA</p>
                    </div>
                </div>
                <div>
                    <div className="bg-yellow-600 py-4">
                        <i className=" text-white text-3xl flex flex-cols justify-center "><BsClockHistory /></i>
                    </div>
                    <div>
                        <div className=' bg-gray-100 py-3  text-center' >
                            <h3 className="text-lg font-bold">WORKING HOURS</h3>
                            <p className="text-gray-600 mt-2">Mon - Fri: 08:00 - 22:00 <br />Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** Cards section end */}
            <SectionTitle
                subHeading={'Send Us a Message'}
                heading={'Contact Form'}
            ></SectionTitle>
            {/** Contact form */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Talk with Us</h1>
                        <p className="py-6">
                        We'd love to hear from you! <br />
                        Whether you have a question about our menu, feedback on your experience, or anything else, feel free to reach out. We'll get back to you as soon as possible!
                        </p>
                    </div>
                    <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="messsage" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-outline btn-warning bg-slate-200 border-0 border-b-4 mt-4 items-center text-center text-yellow-400">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs