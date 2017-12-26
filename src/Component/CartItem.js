import React, { Component } from 'react';
import * as Message from './../constants/Messages';

class CartItem extends Component {

  onDelete = (product) => {
    var {onDeleteProductInCart } = this.props;
    onDeleteProductInCart(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
  }

  onUpdateQuantity = (product,quantity) => {
    if(quantity > 0 ) {
      this.setState({
        quantity: quantity
      });
      this.props.onUpdateProductInCart(product, quantity);
    }
  }
  
  render() {
    var { item } = this.props;
    var total = item.quantity*item.product.price;
    
    return (
      <tr>
      <th scope="row">
        <img src={item.product.image}
          alt="" className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{item.quantity}</span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            onClick={() => this.onUpdateQuantity(item.product,item.quantity - 1)}
          >
            <a>—</a>
          </label>
          <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
          onClick={() => this.onUpdateQuantity(item.product,item.quantity + 1)}
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{total}$</td>
      <td>
        <button
          type="button" className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip" data-placement="top"
          title="" data-original-title="Remove item"
          onClick = { () => this.onDelete(item.product)}
          >
          X
        </button>
      </td>
    </tr>
    );
  }
}

export default CartItem;
