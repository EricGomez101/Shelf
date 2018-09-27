import React, { Component } from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import Home from '../../Components/Home/';
import NotFound from '../../Components/404/';
import Cart from '../../Components/Cart/';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
