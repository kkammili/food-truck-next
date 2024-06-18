import React from 'react';
import '../styles/_hero.scss';

const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-text">
        <h1>Delicious South Indian Tiffins and Biryani</h1>
        <p>Experience the authentic flavors of South India with our wide range of Tiffins, Biryani, and more.</p>
        <div className="hero-buttons">
            <a href="#" className="order-button">Order</a>
            <a href="#menu" className="explore-button">Explore</a>
        </div>
    </div>
    <div className="hero-image">
        <img src="./images/chef.gif" alt="Cook Image" className="cook-image" />
    </div>
</section>

  );
};

export default Hero;
