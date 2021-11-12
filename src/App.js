
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar'
import Jewelleries from './Jewelleries'
import UserCreate from './UserCreate'
import UserUpdate from './UserUpdate'
import JewelleriesMostRecentOrders from './JewelleriesMostRecentOrders'

import JewelleriesOrdersInProgress from './JewelleriesOrdersInProgress'

export default function App() {

  
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Jewelleries} />
          <Route exact path='/create' component={UserCreate} />
          <Route exact path='/JewelleriesOrdersInProgress' component={JewelleriesOrdersInProgress} />
          <Route exact path='/JewelleriesMostRecentOrders' component={JewelleriesMostRecentOrders} />

          <Route exact path='/update/:id' component={UserUpdate} />
        </Switch>
      </div>
    </Router>
  );
}
 