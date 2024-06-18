import React from 'react';
import '../styles/_navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img className="logo" src="./images/logos.png" alt="Bhimavaram Biryani's" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item mx-3">
                    <a className="nav-link" href="#contact">About Us</a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link" href="#menu">Menu</a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link" href="#menu">Specials</a>
                </li>
            </ul>
            <a className="nav-link order-link ml-auto" href="#">Order</a>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
