import React from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import DevTools from './DevTools'
import { Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import Menu from './Menu'
import Home from './Home'
import Article from './Article'
import Category from './Category'
import { loadDashBoard } from '../actions'

class Root extends React.Component {
  static propTypes = {
      store: PropTypes.object.isRequired,
  }

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(loadDashBoard())
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps){}
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="app-mount">
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path='/article/:index/:fileId' component={Article}/>
            <Route path='/category/:filter' component={Category}/>
            <DevTools />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default connect()(Root)
