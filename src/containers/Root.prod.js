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
import Contact from './Contact'
import { loadDashBoard } from '../actions'
import About from './About'

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
            <Route exact path="/nutshome/" component={Home}/>
            <Route path='/nutshome/article/:index/:fileId' component={Article}/>
            <Route path='/nutshome/category/:filter' component={Category}/>
            <Route path='/nutshome/Contact' component={Contact}/>
            <Route path='/nutshome/about' component={About}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default connect()(Root)
