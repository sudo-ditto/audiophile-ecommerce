import React, { useEffect } from 'react';
import '../../assets/sass/main.scss';

import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Products from './Products';

import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import Product from './Product';
import OrderConfirmation from '../components/CheckoutComponents/OrderConfirmation';
import SideDrawer from './SideDrawer';
import { sideDrawerActions } from '../../reducers/sideDrawerReducer';
import Checkout from './Checkout';

function App() {
  const location = useLocation();

  const dispatch = useDispatch();
  const sideDrawer = useSelector(state => state.sideDrawer.open);

  useEffect(() => {
    if (sideDrawer) {
      document.body.classList.remove('scrollable');
      dispatch(sideDrawerActions.toggle());
    } else {
      return;
    }
  }, [location])

  const toggleSideDrawer = () => {
    dispatch(sideDrawerActions.toggle());

    if (sideDrawer) {
      document.body.classList.remove('scrollable');
    } else {
      document.body.classList.add('scrollable');
    }
  }

  return (
    <>
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
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </ >
  );
}

export default App;
