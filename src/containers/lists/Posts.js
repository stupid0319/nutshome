import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from './Post'

const mapStateToProps = (state, ownProps) => ({
  articles : ownProps.filter === ""?state.dashboard:state.dashboard.filter(post => post.gsx$category.$t === ownProps.filter),
  activeHomePanel : state.menuCategory.activeHomePanel
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const Posts = ({ articles, activeHomePanel }) => (
  <div className={"home-page-posts" + ((activeHomePanel === 'articles') ? ' section-fadein' : ' hide')}>
    {articles.map((article, i) => {
      return (
        <article key={i} className="post">
          <Post
            index={i}
            key={i}
            article={article}
          />
        </article>
      )})}
  </div>
)

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
