import React from 'react';
import '../styles/_footer.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <div id="contact" className="footer-section">
        <div className="container">
            <div className="footer-top">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#">Bhimavaram Biryani&apos;s - Food Truck</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">FAQ&apos;s</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Subscribe</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-middle">
                <div className="address">
                    <p>Our Address:</p>
                    <div>
                        1227 Lake Falls Terr<br />
                        Carrollton<br />
                        TEXAS<br />
                        US
                    </div>
                </div>
                <div className="contact">
                    <p>Telephone: <a href="tel:4695696257">4695696257</a></p>
                    <p>Email: <a href="mailto:kkrajus@gmail.com">kkrajus777@gmail.com</a></p>
                </div>
                <div className="safe-shopping">
                    <p>Safe Shopping</p>
                    <div className="ssl-certified">
                        <a href="#">SSL CERTIFIED</a>
                    </div>
                </div>
                <div className="payment-methods">
                    <p>We Accept</p>
                    <Image
                        src={'/images/payment-methods.png'}
                        alt={'Payment Methods'}
                        width={175}
                        height={40}
                    />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <Image
                        src={'/images/logos.png'}
                        alt={'bvrm biryanis logo'}
                        className={'footer-logo'}
                        width={150}
                        height={80}
                    />
                </div>
                <p>&copy; Mana Bhimavaram Biryani&apos;s</p>
            </div>
        </div>
    </div>
    
  );
};

export default Footer;