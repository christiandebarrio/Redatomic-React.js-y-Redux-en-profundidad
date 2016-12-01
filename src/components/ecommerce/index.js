import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './layout';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import Thankyou from './thankyou';

class Ecommerce extends Component {
  render(){
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ Layout }>
          <IndexRoute component={ Catalog } />
          <Route path='cart' component={ Cart } />
          <Route path='checkout' component={ Checkout } />
          <Route path='thankyou' component={ Thankyou } />
        </Route>
      </Router>
    );
  }
}

export default Ecommerce;