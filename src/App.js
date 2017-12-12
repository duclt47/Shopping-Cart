import React, { Component } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Products from './Component/Products';
import Message from './Component/Message';
import Cart from './Component/Cart';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
            <div className="container">
                <Products />
                <Message />
                <Cart />
            </div>
        </main>
        <Footer />
    </div>
    );
  }
}

export default App;
