import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const onMouseEnter = () => {
    //         setDropdown(true);
    // };

    // const onMouseLeave = () => {
    //         setDropdown(false);     
    // };

    function logout(){
        console.log(`logging out`)
        $.get("/api/logout")
            .then(function (user) {
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    return (

        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    SU
                <i className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <div className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </div>
                    {/* <div
                        className='nav-item'
                        // onMouseEnter={onMouseEnter}
                        // onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/Casino'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Casino 
                            {/* <i className='fas fa-caret-down' /> */}
                        {/* </Link> */}
                        {/* {dropdown && <Dropdown />} */}
                    {/* </div> */}
                    <div className='nav-item'>
                        <Link
                            to='/members'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Member
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link
                            to='/'
                            className='nav-links'
                            onClick={logout}
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;