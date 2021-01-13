// import React from "react";

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//   );
// }

// export default Nav;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// // import { NavTabs } from "reactstrap";

// function NavTabs() {
//   // We'll go into the Hooks API later, for now, we are just using some code
//   // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
//   // This allows the component to check the route any time the user uses a link to navigate.
//   const location = useLocation();

//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Casino"
//           className={location.pathname === "/Casino" ? "nav-link active" : "nav-link"}
//         >
//           Casino
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/members"
//           className={location.pathname === "/members" ? "nav-link active" : "nav-link"}
//         >
//           Members
//         </Link>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;

// import React from 'react';
// import { Nav, NavLink } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <div>
//       <Nav>
//       <p>Social Underground</p>
//         <NavLink href="./pages/Home.js">Home </NavLink> 
//         <NavLink href="#">Casino </NavLink> 
//         <NavLink href="#">Members </NavLink> 
//       </Nav>
//     </div>
//   );
// }

// export default Example;

import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import "./Navbar.css"

class Navbar extends Component{
state = {clicked: false}

handleClick = () => {
  this.setState({ clicked: !this.state.clicked})
}
  render(){
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-title">Social Underground</h1>
        <div className="menu-icon">

        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}> {item.title}</a>
              </li>
            )
          })}
          
        </ul>
      </nav>
    )
  }
}

export default Navbar