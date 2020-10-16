import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Link } from 'react-router-dom';

import {
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Button
  } from 'reactstrap';

class Header extends Component
{
    render()
    {
        return(
       
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark navbar-fixed-top">
      <ul class="navbar-nav" style = {{marginLeft: "100px"}}>
        <li class="nav-item active">
          <a class="nav-link" href="#">SEARCH JOBS</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">ABOUT US</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">CONTACT US</a>
        </li>
      </ul>
      <button class="btn bg-white text-primary font-weight-bold" style= {{marginLeft: "700px"}} type="submit">Logout</button>
    </nav>
        );
    }
}
/*const spanStyle = {
    fontSize:'16px',
    color: 'white'
    marging: '20px'
  };
  const navbarStyle = {
    padding: '10px 0px 10px 0px',
    position: 'overflow',
    backgroundColor: '#3368FF',
  };*/

export default Header;