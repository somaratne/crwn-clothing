import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalPrice,
  selectHiddenList
} from "../../redux/cart/cart.selectors";
import toggleHiddenList from "../../redux/cart/cart.action";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

class CheckOut extends React.Component {
  componentDidMount() {
    this.props.toggleHiddenList(!this.props.hiddenList);
  }

  render() {
    const { cartItems, totalPrice } = this.props;
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <div>{<span className="total">TOTAL : ${totalPrice}</span>}</div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
  hiddenList: selectHiddenList
});

const mapDispatchToProps = dispatch => {
  return {
    toggleHiddenList: value => dispatch(toggleHiddenList(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
