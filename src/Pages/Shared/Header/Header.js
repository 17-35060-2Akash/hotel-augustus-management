import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className=''>
            <div className="navbar  text-primary-content text-black pl-10 nav-panel">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-black'><Link to='/'>Home</Link></li>
                            <li className='text-black'><Link to='/rooms'>Our Rooms</Link></li>
                            <li className='text-black'><Link to='/contacts'>contacts</Link></li>
                            <li className='text-black'><Link to='/login'>Login</Link></li>
                            <li className='text-black'><Link to='/registration'>Register</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Hotel Ausgustus</Link>

                </div>
                <div className="navbar-end pr-24 hidden md:flex flex-col">
                    <div className="menu menu-horizontal p-0 whitespace-nowrap">
                        <span className='px-5'><Link to='/'>Home</Link></span>
                        <span className='px-5'><Link to='/rooms'>Our Rooms</Link></span>
                        <span className='px-5'><Link to='/contacts'>Contacts</Link></span>
                        <span className='px-5'><Link to='/login'>Login</Link></span>
                        <span className='px-5'><Link to='/registration'>Sign Up</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;