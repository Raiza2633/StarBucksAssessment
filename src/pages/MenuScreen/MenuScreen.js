import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./MenuScreen.css";
import menuList from "../../constants/MenuList.json";
import MenuList from "../../components/menu/MenuList";
import MenuItem from "../../components/menu/MenuItem";
import CartPreview from "../../components/Cart/CartPreview";
import Cart from "../../components/Cart/Cart";

function MenuScreen() {
  const [showModal, setShowModal] = useState(false)
  const cart = useSelector((state) => state.cart.cart);

  const toggleCart = () => {
    setShowModal(prev => !prev);
  }
  
  return (
    <div className="menuScreen">
      <div className="menuScreen__container">
        <div className="menuScreen__left">
          <MenuList />
        </div>
        <div className="menuScreen__right">
          <h1>Menu</h1>
          <div className="menuScreen__category">
            <h2>Drinks</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, image, price }) => (
                  <MenuItem
                    key={type}
                    type={type}
                    image={image}
                    price={price}
                  />
                ))
              )}
            </div>
          </div>
          <div className="menuScreen__category">
            <h2>Food</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, image, price }) => (
                  <MenuItem
                    key={type}
                    type={type}
                    image={image}
                    price={price}
                  />
                ))
              )}
            </div>
          </div>
          <div className="menuScreen__category">
            <h2>At Home Coffee</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, image, price }) => (
                  <MenuItem
                    key={type}
                    type={type}
                    image={image}
                    price={price}
                  />
                ))
              )}
            </div>
          </div>
          <div className="menuScreen__category">
            <h2>Merchandise</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.merchandise.map(({ type, image, price }) => (
                  <MenuItem
                    key={type}
                    type={type}
                    image={image}
                    price={price}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {cart.length > 0 && <CartPreview toggleCart={toggleCart} />}
      {showModal && <Cart toggleCart={toggleCart} open={showModal}/>}
    </div>
  );
}

export default MenuScreen;
