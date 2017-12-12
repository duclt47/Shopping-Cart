import React, { Component } from 'react';
import Products from './../Component/Products';
import { connect } from 'react-redux';
class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products products={products} />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,null) (Products);
