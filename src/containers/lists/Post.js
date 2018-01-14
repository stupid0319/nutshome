import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
/*global FB*/

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

class Post extends React.Component {
  componentDidMount() {
    FB.XFBML.parse();
  }

  render() {
    const { article, key, index } = this.props;
    return(
      <div key={key} className="post-preview col-xs-10  no-gutter">
        <div>
          <h2>
            <Link to={`/article/${index}/${article.gsx$postid.$t}`}>{article.gsx$title.$t}</Link>
          </h2>
        </div>
        <p>{article.gsx$subtitle.$t}</p>
        <p className="meta">
          <span class="fb-comments-count" data-href={`http://122.117.78.26:3000/${article.gsx$postid.$t}`}></span>
          &nbsp;Comments
          &nbsp;-&nbsp;
          Published in : &nbsp;
          <Link to={`/category/${article.gsx$category.$t}`}>{article.gsx$category.$t}</Link>
        </p>
      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post)
