import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 fixed backdrop-blur-md top-0 z-50">
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
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <NavLink to='/' className="text-xl">Gadget Heaven</NavLink >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base gap-4">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/statistics'>Statistics</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end gap-3">
                {/* <NavLink className="btn">Icon1</NavLink>
                <NavLink className="btn">Icon2</NavLink> */}
                Icon1
                <br />
                Icon1
            </div>
        </div>
    );
};

export default NavBar;