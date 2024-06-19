import * as React from "react";
import Image from "next/image";

const MenuItem = ({url, title, desc, price}) => {
  return (
    <div className="menu-item">
      <Image
        src={url}
        alt={title}
        width={200}
        height={200}
      />
      <h3 className="menu-item-title">{title}</h3>
      <p className="menu-item-desc">{desc}</p>
      <p className="price">{price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default MenuItem;
