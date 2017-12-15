import React, { Component } from 'react';
class CartResult extends Component {
  TotalAmout = (cart) => {
    var total = 0;
    if (cart !== null) {
      for( var i = 0 ; i < cart.item.length ; i ++) {
        total += cart.item[i].product.price * cart.item[i].quantity
      }
    }
    return total;
  }
  render() {
    const cart = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.TotalAmout(cart)}$</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;
