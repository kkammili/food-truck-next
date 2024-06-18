import * as React from "react";
import "../styles/_faq.scss";
import Accordian from "./Accordian";

const qa = [
  {
    quest: "Where do you deliver?",
    ans: "We deliver to all areas within our specified delivery radius. Please check our website for more information.",
    id: "one",
  },
  {
    quest: "What payment options do you accept?",
    ans: "We accept all major credit cards, debit cards, and online payment methods such as PayPal and Google Pay.",
    id: "two",
  },
  {
    quest: "Can I customize my order?",
    ans: "Yes, you can customize your order by adding special instructions or requesting specific ingredients. Please mention your preferences while placing the order.",
    id: "three",
  },
  {
    quest: "How can I track my order?",
    ans: "Once your order is confirmed, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your delivery.",
    id: "four",
  },
  {
    quest: "What is your return policy?",
    ans: "We have a flexible return policy. If you are not satisfied with your order, please contact our customer support team within 24 hours of delivery to discuss the issue and possible solutions.",
    id: "five",
  },
];

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">FAQs</h2>
        <p className="faq-subtitle">
          Find answers to common questions about delivery areas, payment
          options, and order customization.
        </p>
        <div className="accordion" id="faqAccordion">
          {qa.map((item) => (
            <Accordian
              key={item.id}
              quest={item.quest}
              ans={item.ans}
              id={item.id}
            />
          ))}
        </div>
        <div className="faq-contact">
          <h3>Still have questions?</h3>
          <p>Contact us for more information.</p>
          <button className="contact-btn">
            <a href="#contact">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
