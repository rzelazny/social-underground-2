import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown"

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState (false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        SU 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i classNane={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className ={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to ="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/casino" className="nav-links" onClick={closeMobileMenu}>
                                Casino 
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar