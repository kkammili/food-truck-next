import * as React from 'react';
import '../styles/_reviews.scss'
import Image from 'next/image'
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';

const scroll = () =>{}

export const Reviews = () => {
  return (
    
    <section className="reviews-section">
        <div className="review-container">
            <ChevronLeft className={'scroll-button left'} size={30} onclick={scroll()}/>
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
            <ChevronRight className={'scroll-button right'} size={30} onclick={scroll()}/>
            </div>
    </section>
  )
}
