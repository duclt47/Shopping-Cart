import React, { Component } from 'react';
import Products from './../Component/Products';
import Product from './../Component/Product';
import { connect } from 'react-redux';
import { actAddtoCart } from './../actions/index';
class ProductsContainer extends Component {
  
  renderProducts(products) {
    var result = null;
    var { onAddToCart } = this.props;
    if (products.length > 0) {
      result = products.map((product,index) => {
        return (<Product key={index} product={product} onAddToCart={onAddToCart}/>)
      });
    }
    return result;
  }

  render() {
    var { products } = this.props;
    return (
      <Products>
        { this.renderProducts(products) }
      </Products>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddtoCart(product,1));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductsContainer);
