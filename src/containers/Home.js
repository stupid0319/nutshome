import React from 'react'
import PropTypes from 'prop-types'
import MenuTrigger from './MenuTrigger'
import { connect } from 'react-redux'
import { setActiveHomePanel, ImageUrl } from '../actions'
import Posts from './lists/Posts'
import Categories from './lists/Categories'
import DocumentTitle from 'react-document-title'

const mapStateToProps = (state, ownProps) => ({
  menuVisible: state.menuVisible,
  activeHomePanel: state.menuCategory.activeHomePanel
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setActivePanel: activePanel => dispatch(setActiveHomePanel(activePanel)),
})

var divStyle = {
  color: 'white',
  backgroundImage: `url(${ImageUrl("120knbYPE1P68JdOkmvSWgW-ArQT0ZdvI")})`,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const Home = ({ dashboard, activeHomePanel, setActivePanel, menuVisible }) => (
  <DocumentTitle title={'兩姊妹堅果-首頁'}>
  <main className={`container page-fadein left-container page-home ${menuVisible? "container-menu-open":"container-menu-closed"}`}>
    <div className="row">
      <section className="sidebar col-md-5 col-sm-12" style={divStyle}>
      <MenuTrigger/>
      </section>
      <section className="col-md-7 col-sm-12 col-md-offset-5 main-content modal-container">
        <div className="sub-nav">
          <a role='button'
            className={'select-posts' + ((activeHomePanel === 'articles')? ' active' : '')}
            title='articles'
            onClick={()=>setActivePanel('articles')}
          >Posts</a>
          <a role='button'
            className={'select-categories' + ((activeHomePanel === 'categories')? ' active' : '')}
            title='categories'
            onClick={()=>setActivePanel('categories')}
          >Categories</a>
        </div>
        <Posts
          filter = ""
        />
        <Categories/>
      </section>
    </div>
  </main>
  </DocumentTitle>
)

export default connect(mapStateToProps,mapDispatchToProps)(Home)
