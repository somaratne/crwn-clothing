import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import toggleHiddenList from "./../../redux/cart/cart.action";
import { selecteCartItemsQuntity } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

class CartIcon extends React.Component {
  handleClick = () => {
    this.props.toggleHiddenList(!this.props.hiddenList);
  };
  render() {
    return (
      <div className="cart-icon">
        <ShoppingBag className="shopping-icon" onClick={this.handleClick} />
        <span className="item-count">{this.props.quantity}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hiddenList: state.cart.hiddenList,
    quantity: selecteCartItemsQuntity(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleHiddenList: result => dispatch(toggleHiddenList(result))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
