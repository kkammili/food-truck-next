import * as React from "react";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/reducers/cartReducer';


const MenuItem = ({url, title, desc, price, id}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      id,
      title,
      url,
      price
    }
    dispatch(addItem(newItem));
  };

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
      <p className="price">${price}</p>
      <button 
      className="add-to-cart"
      onClick={handleAddToCart}
      >Add to Cart</button>
    </div>
  );
};

export default MenuItem;
