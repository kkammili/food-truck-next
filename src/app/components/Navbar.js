import React from "react";
import '../styles/_navbar.scss';
import Image from "next/image";
import ClientNavbar from './ClientNavbar';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src="/images/logos.png"
            width={150}
            height={80}
            className="logo"
            alt="Bhimavaram Biryani's"
            priority={true}
          />
        </a>
        <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
        <label htmlFor="navbar-toggle" className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </label>
        <div className="navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" href="#contact">
                About Us
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#menu-section">
                Menu
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#menu-section">
                Specials
              </a>
            </li>
          </ul>
        </div>
        <ClientNavbar />

      </div>
    </nav>
  );
};

export default Navbar;
