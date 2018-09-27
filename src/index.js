import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
// create my reducer
import App from './Containers/App/';
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(() => {}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
