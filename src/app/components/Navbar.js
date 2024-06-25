"use client";
import React, { useState } from "react";
import '../styles/_navbar.scss';
import Image from "next/image";
import Link from 'next/link';
import { Cart } from 'react-bootstrap-icons';
import useIsSmallScreen from '../hooks/useIsSmallScreen'; // Adjust the import path as needed


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = 3
    const isSmallScreen = useIsSmallScreen();

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

          {isOpen && isSmallScreen && (
            <Link href={"/cart"}>
              <div className="cart-icon-container expanded">
                <Cart size={40} />
                {cartItems > 0 && (
                  <span className="cart-items-count">{cartItems}</span>
                )}
              </div>
            </Link>
          )}
        </div>

        {!isSmallScreen && (
            <Link href={"/cart"}>
            <div className="cart-icon-container expanded">
              <Cart size={40} />
              {cartItems > 0 && (
                <span className="cart-items-count">{cartItems}</span>
              )}
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
