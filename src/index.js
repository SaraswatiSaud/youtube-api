import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './stores/store';

import App from './components/App';

// Take this component's HTML generated and put it on a page (in the DOM)
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));
