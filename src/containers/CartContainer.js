import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../Component/Cart';
import CartItem from './../Component/CartItem';
import CartResult from './../Component/CartResult';
import * as Message from './../constants/Messages';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';
class CartContainer extends Component {
  
  renderCart = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
    if( cart.length > 0) {
      result = cart.map((item,index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart = {onDeleteProductInCart}
            onChangeMessage = {onChangeMessage}
            onUpdateProductInCart = {onUpdateProductInCart}
          />
        )
      })
    }
    return result;
  }

  renderCartResult = (cart) => {
    var result = null;
    if( cart.length > 0) {
        return (
          <CartResult
            item={cart}

          />
        )
    }
    return result;
  }
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.renderCart(cart)}
        {this.renderCartResult(cart)}
      </Cart>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart : (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage : (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart : (product,quantity) => {
      dispatch(actUpdateProductInCart(product,quantity));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);
