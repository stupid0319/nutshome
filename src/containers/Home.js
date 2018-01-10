import React from 'react'
import PropTypes from 'prop-types'
import MenuTrigger from './MenuTrigger'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  mainClassName: state.MenuTrigger? "container-menu-open":"container-menu-closed"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + 'https://raw.githubusercontent.com/misterfresh/react-drive-cms/gh-pages/images/default-sidebar.jpg' + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const Home = ({ mainClassName }) => (
  <main className={`container page-fadein left-container page-home ${mainClassName}`}>
    <div className="row">
      <section className="sidebar col-md-5 col-sm-12" style={divStyle}>
      <MenuTrigger/>
      </section>
      <section className="col-md-7 col-sm-12 col-md-offset-5 main-content modal-container">
      </section>
    </div>
  </main>
)

export default connect(mapStateToProps,mapDispatchToProps)(Home)
