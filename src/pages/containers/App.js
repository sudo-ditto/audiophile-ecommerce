import React from 'react';
import '../../assets/sass/main.scss';

import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Product from './Product';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/products/:product">
          <Product />
        </Route>
      </Switch>

      <Footer />
    </ Router>
  );
}

export default App;
