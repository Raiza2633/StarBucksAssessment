import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { decrementQuantity, incrementQuantity, emptyCart } from "../../features/CartSlice";
import "./Cart.css";

const Cart = ({ open, toggleCart }) => {
  const descriptionElementRef = useRef(null);
  const [scroll, setScroll] = useState("paper");
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const buyHandler = () => {
    alert('Please click to confirm')
    dispatch(emptyCart())
    toggleCart();
    alert('Bought Successfully!!!')
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={toggleCart}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
      >
        <DialogTitle id="scroll-dialog-title">Cart</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <span></span>
          </DialogContentText>
          <div>
            {cart.map(({ type, price, quantity, image }) => (
              <div className="cartItemWrapper">
                <div className="cartContent">
                  <div className="cartImageWrapper">
                    <img
                      src={image}
                      alt={type}
                      title={type}
                      className="cartImage"
                    />
                  </div>
                  <div className="cartContentDetail">
                    <div className="cartContentMain" title={type}>
                      {type.length > 10 ? `${type.substr(0, 10)}...` : type}
                    </div>
                    <div className="cartContentSub">${price}</div>
                  </div>
                </div>
                <div className="cartItem__button__group">
                  <button onClick={() => dispatch(incrementQuantity({ type }))}>
                    <AddIcon />
                  </button>
                  {quantity}
                  <button onClick={() => dispatch(decrementQuantity({ type }))}>
                    <RemoveIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span className="cartContentMain">Total</span>
            <span className="cartContentSub">${getTotalQuantity() || 0}</span>
          </div>
          <button className="cartButton" onClick={buyHandler}>Buy Now</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
