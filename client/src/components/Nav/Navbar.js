import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';

function Navbar({ page, socket, email, room }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setClick(false);

        //If page isn't blank they're coming from the casino so there's extra work to do
        if(page) exitingCasino();
    }

    function exitingCasino() {
        //post a leaving chat message
        let chatMessage = {
            email: email,
            message: " has left the chat.",
            room: room
        };
        socket.emit("chat-message", chatMessage)

        //get the user's seat so it can be opened up in the db
        $.get("/api/myseat/" + page)
            .then((seat) => {
                console.log("got my seat:", seat);
                let tableUpdate = {
                    column: "user" + seat,
                    data: "Open Seat"
                }
                //open up the seat at the table
                $.post("/api/table/" + page, tableUpdate)
            })
    }

    //logout functionality
    function logout() {
        console.log(`logging out`)
        //If page isn't blank they're coming from the casino so there's extra work to do
        if(page) exitingCasino();

        //Log out
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