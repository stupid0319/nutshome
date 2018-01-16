import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ImageUrl, setActiveHomePanel } from '../actions'
import Categories from "./lists/Categories"
import Posts from "./lists/Posts"
import MenuTrigger from "./MenuTrigger"
import DocumentTitle from 'react-document-title'

const mapStateToProps = (state, ownProps) => ({
  menuVisible: state.menuVisible,
  activeHomePanel: state.menuCategory.activeHomePanel,
  categories: state.menuCategory.categories
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setActivePanel: activePanel => dispatch(setActiveHomePanel(activePanel)),
})

const divStyle = imageid => ({
  color: 'white',
  backgroundImage: `url(${ImageUrl(imageid)})`,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
})

class Category extends React.Component {

  componentWillMount() {
    this.props.setActivePanel('articles')
  }

  componentWillReceiveProps(nextProps){
    if(this.props.activeHomePanel !== 'articles') {
        this.props.setActivePanel('articles')
    }
  }

  render() {
    const { menuVisible, activeHomePanel,
      setActivePanel, categories, match } = this.props
    var imageId;
    if (categories[match.params.filter] !== undefined) {
      imageId = categories[match.params.filter][0].imageId
    }
    return (
      <DocumentTitle title={`兩姊妹堅果-${match.params.filter}`}>
      <main className={`container page-fadein left-container page-home ${menuVisible? "container-menu-open":"container-menu-closed"}`}>
        <div className="row">
          <section className="sidebar col-md-5 col-sm-12" style={divStyle(imageId)}>
          <MenuTrigger/>
          <div className="site-info">
            <div className="primary-info">
              <h1>{match.params.filter}</h1><p/><p/>
            </div>
          </div>
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
              filter = {match.params.filter}
            />
            <Categories/>
          </section>
        </div>
      </main>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
