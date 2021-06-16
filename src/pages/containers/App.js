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

import { useSelector, useDispatch } from 'react-redux';

import Product from './Product';
import OrderConfirmation from '../components/CheckoutComponents/OrderConfirmation';
import SideDrawer from './SideDrawer';
import { sideDrawerActions } from '../../reducers/sideDrawerReducer';

function App() {
  const dispatch = useDispatch();
  const sideDrawer = useSelector(state => state.sideDrawer.open);

  console.log(sideDrawer);
  const toggleSideDrawer = () => {
    dispatch(sideDrawerActions.toggle());
  }

  return (
    <Router>
      {sideDrawer ? <SideDrawer /> : ""}
      <Header clicked={toggleSideDrawer} />
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
