import * as React from 'react';
import '../styles/_reviews.scss'
import Image from 'next/image'

const scrollLeft = () =>{}
const scrollRight = () =>{}

export const Reviews = () => {
  return (
    
    <section className="reviews-section">
        <div className="review-container">
            <button className="scroll-button left" onclick={scrollLeft()}>&#8249;</button>
            <div className="review-content">
                <div className="review-stars">
                    ★★★★★
                </div>
                <p className="review-text">Our experience with South Indian Tiffins has been amazing! The food is delicious and the service is top-notch.</p>
                <div className="review-author">
                    <Image
                        src="/images/reviewer.png"
                        width={80}
                        height={80}
                        className={"reviewer-img"}
                        alt="Reviewer"
                    />
                    <div className="author-details">
                        <p className="author-name">John Doe</p>
                        <p className="author-info">Customer, ABC Company</p>
                    </div>
                    <Image
                        src="/images/logo.png"
                        width={80}
                        height={80}
                        alt="Company Logo"
                    />
                </div>
            </div>
            <button className="scroll-button right" onclick={scrollRight()}>&#8250;</button>
        </div>
    </section>
  )
}
