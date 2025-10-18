import React from 'react';
import { Link } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logoPng from "../../assets/logo.png";


const Navbar = () => {
    const links = <>
        <Link to="/" className='m-2 font-bold text-[18px]'>Home</Link>
        <Link to="/apps" className='m-2 font-bold text-[18px]'>Apps</Link>
        <Link to="/installation" className='m-2 font-bold text-[18px]'>Installation</Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl"><img src={logoPng} className='w-[35px]' alt="" />HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/shahedkbd' className="btn text-white bg-linear-to-t from-[#632EE3] to-[#9F62F2]"><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;