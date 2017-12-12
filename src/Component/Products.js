import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

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
    const { products } = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          { this.renderProducts(products) }
        </div>
      </section>
    );
  }
}

export default Products;
