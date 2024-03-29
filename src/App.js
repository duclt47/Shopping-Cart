import React, { Component } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import ProductsContainer from './containers/ProductsContainer';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
            <div className="container">
                <ProductsContainer />
                <MessageContainer />
                <CartContainer />
            </div>
        </main>
        <Footer />
    </div>
    );
  }
}

export default App;
