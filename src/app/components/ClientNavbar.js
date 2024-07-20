"use client";
import React, { useState, useEffect } from "react";
import { Cart } from 'react-bootstrap-icons';
import useIsSmallScreen from '../hooks/useIsSmallScreen'; // Adjust the import path as needed
import { useSelector } from "react-redux";
import Link from 'next/link';
import '../styles/_navbar.scss';

const ClientNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const toggle = document.getElementById('navbar-toggle');
        const handleToggleChange = () => {
            setIsOpen(toggle.checked);
        };

        toggle.addEventListener('change', handleToggleChange);

        return () => {
            toggle.removeEventListener('change', handleToggleChange);
        };
    }, []);
    let totalCartItems = useSelector((state) => state?.cart?.cart) || {};
    totalCartItems = Object.values(totalCartItems).reduce((acc, curr)=>{
      return acc + parseInt(curr.count)
    }, 0) || 0
    const [isClient, setIsClient] = useState(false);
    const isSmallScreen = useIsSmallScreen();

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && isSmallScreen && isOpen && (
              <li className="nav-item mx-3">
                <Link href={"/cart"}>
                  <div className="cart-icon-container expanded">
                    <Cart size={40} />
                    {totalCartItems > 0 && (
                      <span className="cart-items-count">{totalCartItems}</span>
                    )}
                  </div>
                </Link>
              </li>
            )}

            {isClient && !isSmallScreen && !isOpen && (
            <Link href={"/cart"}>
              <div className="cart-icon-container expanded">
                <Cart size={40} />
                {totalCartItems > 0 && (
                  <span className="cart-items-count">{totalCartItems}</span>
                )}
              </div>
            </Link>
            )}
        </>
    );
};

export default ClientNavbar;
