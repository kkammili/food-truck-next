import * as React from 'react';
import '../styles/_features.scss'
import Image from 'next/image'

export const Features = () => {
  return (
    <section className="features">
    <div className="features-image">
        <Image
            src="/images/fast-delivery.png"
            alt="Faster delivery"
            layout="responsive" 
            width={100}
            height={100}
            className={"img"}
        />
    </div>
    <div className="features-text">
        <div className="feature">
            <h2>Freshness Guaranteed</h2>
            <p>We take pride in serving you the freshest South Indian dishes. Our ingredients are carefully sourced
                and our chefs prepare each dish with utmost care to ensure that you get the best quality food every
                time you order.</p>
        </div>
        <div className="feature">
            <h2>Quick Delivery Service</h2>
            <p>We understand that you want your food delivered fast. That's why we have a dedicated team of delivery
                drivers who strive to bring your favorite South Indian dishes to your doorstep in the shortest
                possible time.</p>
        </div>
    </div>
</section>
  )
}
