import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import Menu from './Menu'
import Home from './Home'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div id="app-mount">
        <Menu/>
        <Route exact path="/" component={Home} />
        <DevTools />
      </div>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
