import React from "react";
import { useSelector } from "react-redux";
import "./CartPreview.css";

export default function CartPreview({ toggleCart }) {
  const cart = useSelector((state) => state.cart.cart);

  let itemStr = "";

  if (cart.length > 1) {
    if (cart[0].type.length > 10) {
      itemStr = `${cart[0].type.substring(0, 10)}....${
        cart.length > 1 ? "+ " : ""
      }${cart.length > 1 ? cart.length - 1 + " more" : ""}`;
    } else {
      itemStr = `${cart[0].type}....+${cart.length - 1}`;
    }
  } else {
    itemStr =
      cart[0].type.length > 10
        ? `${cart[0].type.substring(0, 10)}....`
        : cart[0].type;
  }

  return (
    <div className="cartPreview_wrapper">
      <div className="cartPreview_inner">
        <div className="cartPreview_inner_content">
          <span className="cartPreview_inner_content_length">
            {cart.length} Items added
          </span>
          <span className="cartPreview_inner_content_type">{itemStr}</span>
        </div>
        <button className="cartPreview_inner_button" onClick={toggleCart}>
          View Cart
        </button>
      </div>
    </div>
  );
}
