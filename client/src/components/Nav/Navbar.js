import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
            setDropdown(true);
    };

    const onMouseLeave = () => {
            setDropdown(false);     
    };

    return (

        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    SU
                <i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <div className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </div>
                    <div
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/Casino'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Casino <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </div>
                    <div className='nav-item'>
                        <Link
                            to='/members'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Member
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;