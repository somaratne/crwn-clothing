import React from "react";
import { connect } from "react-redux";
import { removeItems } from "../../redux/cart/cart.action";
import { addItemsToCart } from "./../../redux/cart/cart.action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({
  item: { imageUrl, name, quantity, price, id },
  removeItems,
  addItemsToCart
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => console.log("Decrease")}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemsToCart(id)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItems(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeItems: item => dispatch(removeItems(item)),
    addItemsToCart: item => dispatch(addItemsToCart(item))
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
