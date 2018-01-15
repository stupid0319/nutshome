import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ImageUrl } from '../../actions'

const mapStateToProps = (state, ownProps) => ({
  dashboard: state.dashboard
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const OtherArticle = ({article, key, index}) => (
  <div
    key={key}
    className="col-sm-6 col-md-2 no-gutter read-another-container image-read-another"
    style={{
            backgroundImage: `url(${ImageUrl(article.gsx$imageid.$t)})`
    }}>
    <div className="overlay"></div>
    <h3 className="read-another">
      <Link to={`/article/${index}/${article.gsx$postid.$t}`} className="read-another-link">
        {article.gsx$title.$t}
      </Link>
    </h3>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(OtherArticle)
