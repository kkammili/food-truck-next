import * as React from "react";

const MenuItem = ({url, title, desc, price}) => {
  return (
    <div className="menu-item">
      <img
        src={url}
        className="img-fluid"
        alt={title}
      />
      <h3 className="menu-item-title">{title}</h3>
      <p className="menu-item-desc">{desc}</p>
      <p className="price">{price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default MenuItem;
