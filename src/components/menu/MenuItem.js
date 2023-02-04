import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import "./MenuItem.css";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../features/CartSlice";

function MenuItem({ type, image, price }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const present = cart.find((item) => item.type === type);
  const cartItem = cart.filter((item) => item.type === type);

  return (
    <Fade className="menuItem_wrapper">
      <div className="menuItem">
        <div className="menuItem__main">
          <img src={image} alt="" className="menuItem__image" />
          <div className="menuItem__inner__container">
            <h4 className="menuItem__type">{type}</h4>
            <div className="menuItem__price">${price}</div>
          </div>
        </div>
        {!present ? (
          <button
            className="menuItem__button"
            onClick={() =>
              dispatch(
                addToCart({
                  type,
                  price,
                  image,
                  quantity: 1 
                })
              )
            }
          >
            Add Item
          </button>
        ) : (
          <div className="menuItem__button__group">
            <button onClick={() => dispatch(incrementQuantity({type}))}>
              <AddIcon />
            </button>
            {cartItem[0].quantity}
            <button onClick={() => dispatch(decrementQuantity({type}))}>
              <RemoveIcon />
            </button>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default MenuItem;
