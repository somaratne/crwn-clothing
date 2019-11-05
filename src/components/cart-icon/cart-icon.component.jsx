import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import toggleHiddenList from "./../../redux/cart/cart.action";

class CartIcon extends React.Component {
  handleClick = () => {
    this.props.toggleHiddenList(!this.props.hiddenList);
  };
  render() {
    return (
      <div className="cart-icon">
        <ShoppingBag className="shopping-icon" onClick={this.handleClick} />
        <span className="item-count">0</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hiddenList: state.cart.hiddenList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleHiddenList: result => dispatch(toggleHiddenList(result))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
