import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore'
import Root from './containers/Root'
import './css/App.css'
import './css/index.css'
import './fontawesome/web-fonts-with-css/css/fontawesome-all.min.css'
import './css/styles.min.css'

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
