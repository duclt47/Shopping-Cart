import React, { Component } from 'react';
import Products from './../Component/Products';
import Product from './../Component/Product';
import { connect } from 'react-redux';
class ProductsContainer extends Component {
  
  renderProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product,index) => {
        return (<Product key={index} product={product}/>)
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

export default connect(mapStateToProps,null) (ProductsContainer);
