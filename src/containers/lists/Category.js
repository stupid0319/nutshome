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

const Category = ({ key, index, dashboard }) => (
  <div
    key = {key}
    className="category-preview col-xs-6 col-sm-4 image-category"
    style={{
      backgroundImage: `url(${ImageUrl(dashboard[index].gsx$imageid.$t)})`
    }}
  >
    <h2 className="category-title">
    <Link to={`/category/${dashboard[index].gsx$category.$t}`}>{dashboard[index].gsx$category.$t}</Link>
    </h2>
  </div>
)


export default connect(mapStateToProps, mapDispatchToProps)(Category)
