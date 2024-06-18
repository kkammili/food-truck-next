import * as React from 'react';
import "../styles/_subscribe.scss"

const Subscribe = () => {
  return (
    <section className="subscribe-section">
    <div className="container">
        <h2 className="subscribe-title">Subscribe for the latest updates</h2>
        <p className="subscribe-subtitle">Get the latest updates, discounts, and specials delivered to your inbox.</p>
        <form className="subscribe-form">
            <input type="email" placeholder="Your email address" className="subscribe-input" />
            <button type="submit" className="subscribe-button">Join now</button>
        </form>
        <p className="subscribe-terms">By joining, you agree to our <a href="#">Terms and Conditions</a>.</p>
    </div>
    </section>
  )
}

export default Subscribe
