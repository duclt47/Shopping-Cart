import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cart from './../Component/Cart';
import CartItem from './../Component/CartItem';
import CartResult from './../Component/CartResult';
import * as Message from './../constants/Messages';
class CartContainer extends Component {
  
  renderCart = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if( cart.length > 0) {
      result = cart.map((item,index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
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
          <CartResult item={cart}/>
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

// CartContainer.propTypes = {
//   cart : PropTypes.arrayOf(PropTypes.shape({
//     product: PropTypes.shape({
//       id : PropTypes.number.isRequired,
//       name : PropTypes.string.isRequired,
//       image : PropTypes.string.isRequired, 
//       description : PropTypes.string.isRequired,
//       price : PropTypes.number.isRequired,
//       inventory : PropTypes.number.isRequired,
//       rating : PropTypes.number.isRequired,
//     }).isRequired,
//     quanlity: PropTypes.number.isRequired
//   })).isRequired
// }

const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}

export default connect(mapStateToProps,null) (CartContainer);
