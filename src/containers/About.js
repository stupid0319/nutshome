import React from 'react'
import PropTypes from 'prop-types'
import MenuTrigger from './MenuTrigger'
import { connect } from 'react-redux'
import { setActiveHomePanel } from '../actions'
import Posts from './lists/Posts'
import Categories from './lists/Categories'
import DocumentTitle from 'react-document-title'

const mapStateToProps = (state, ownProps) => ({
  menuVisible: state.menuVisible,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + 'https://raw.githubusercontent.com/misterfresh/react-drive-cms/gh-pages/images/default-sidebar.jpg' + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class About extends React.Component {
  render() {
    const { menuVisible } = this.props
    return(
      <DocumentTitle title="兩姊妹堅果-關於">
      <main className={`container page-fadein left-container page-home ${menuVisible? "container-menu-open":"container-menu-closed"}`}>
        <div className="row">
          <section className="sidebar col-md-5 col-sm-12" style={divStyle}>
          <MenuTrigger/>
          </section>
          <section className="col-md-7 col-sm-12 col-md-offset-5 main-content modal-container">
          </section>
        </div>
      </main>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(About)
