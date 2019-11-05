import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addItems } from "./../../redux/cart/cart.action";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItems }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItems(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItems: item => dispatch(addItems(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
