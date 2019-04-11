import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search.js';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Info from './Info.js';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

 class App extends Component {

  render() {
    return (
     
      <div>
        <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/Info" component={Info} />

        </Switch>
        </BrowserRouter>
  
      </div>
    
    )
  };
};
export default connect(null)(App);