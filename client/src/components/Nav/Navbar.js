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
                <i className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
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
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/members'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Member
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;