import React from 'react';
import '../../assets/sass/main.scss';

import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Products from './Products';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Product from './Product';
import ModalOverlay from '../components/UI/ModalOverlay';
import OrderConfirmation from '../components/CheckoutComponents/OrderConfirmation';

function App() {
  return (
    <Router>
      <Header />
      {/* <OrderConfirmation></OrderConfirmation> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products/:category/:product" exact>
          <Product />
        </Route>
        <Route path="/products/:category" exact>
          <Products />
        </Route>
      </Switch>
      <Footer />
    </ Router>
  );
}

export default App;
