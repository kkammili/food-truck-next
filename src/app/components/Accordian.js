"use client";
import React, { useState } from "react";
import "../styles/_faq.scss";

const Accordian = ({ quest, ans, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div key={id} className="card">
      <div className="card-header" id={`heading-${id}`}>
        <h2 className="mb-0">
          <button
            className="btn btn-link collapsed"
            type="button"
            data-toggle={`collapse-${id}`}
            data-target={`#collapse-${id}`}
            aria-expanded="false"
            aria-controls={`collapse-${id}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {quest}
          </button>
        </h2>
      </div>
      <div
        id={`collapse-${id}`}
        className={isOpen ? "show" : "collapse"}
        aria-labelledby="headingOne"
        data-parent="#faqAccordion"
      >
        <div className="card-body">{ans}</div>
      </div>
    </div>
  );
};

export default Accordian;
