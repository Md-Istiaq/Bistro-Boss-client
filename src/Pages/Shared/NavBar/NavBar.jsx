import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

function NavBar() {
    const { user , logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then( () =>{})
        .catch(error => console.log(error))

    }
    const navOptions = <>
        <li><a><Link to="/">Home</Link></a></li>
        <li><a><Link to="/menu">Our Menu</Link></a></li>
        <li><a><Link to="/order/salad">Order Food</Link></a></li>
        <li><a><Link to="/ContactUs">Contact Us</Link></a></li>
        <li><a><Link to="/secret">Secret</Link></a></li>
        {
            user ? <>
            <span>{user?.displayName}</span>
            <li onClick={handleLogOut} ><a>Log Out</a></li>
            </> :
                <>
                    <li><a><Link to="/login">Login</Link></a></li>
                </>
        }
    </>
    return (
        <div>
            <div className="navbar fixed  z-10 bg-opacity-60 max-w-screen-2xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <a className='lg:ml-5 md:ml-5 font-serif'>Bistro Boss <br />Restaraunt
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </div>
    )
}

export default NavBar