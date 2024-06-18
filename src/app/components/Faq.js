import * as React from 'react';
import '../styles/_faq.scss'

const Faq = () => {
  return (
    <section className="faq-section">
    <div className="container">
        <h2 className="faq-title">FAQs</h2>
        <p className="faq-subtitle">Find answers to common questions about delivery areas, payment options, and order customization.</p>
        <div className="accordion" id="faqAccordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Where do you deliver?
                        </button>
                    </h2>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#faqAccordion">
                    <div className="card-body">
                        We deliver to all areas within our specified delivery radius. Please check our website for more information.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What payment options do you accept?
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                    <div className="card-body">
                        We accept all major credit cards, debit cards, and online payment methods such as PayPal and Google Pay.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Can I customize my order?
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                    <div className="card-body">
                        Yes, you can customize your order by adding special instructions or requesting specific ingredients. Please mention your preferences while placing the order.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How can I track my order?
                        </button>
                    </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#faqAccordion">
                    <div className="card-body">
                        Once your order is confirmed, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your delivery.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingFive">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What is your return policy?
                        </button>
                    </h2>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#faqAccordion">
                    <div className="card-body">
                        We have a flexible return policy. If you are not satisfied with your order, please contact our customer support team within 24 hours of delivery to discuss the issue and possible solutions.
                    </div>
                </div>
            </div>
        </div>
        <div className="faq-contact">
            <h3>Still have questions?</h3>
            <p>Contact us for more information.</p>
            <button className="contact-btn">Contact</button>
        </div>
    </div>
</section>
  )
}

export default Faq
