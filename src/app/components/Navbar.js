import React, { useState } from "react";
import '../styles/_navbar.scss';
import Image from "next/image";
import Link from 'next/link';
import ClientNavbar from './ClientNavbar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            isOpen ? "show navbar-collapse" : "collapse navbar-collapse"
          }
          id="navbarContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" href="#contact">
                About Us
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#rice-items">
                Menu
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#rice-items">
                Specials
              </a>
            </li>
          </ul>
            <ClientNavbar isOpen={isOpen} />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
