import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OtherArticle from './OtherArticle'

const mapStateToProps = (state, ownProps) => ({
  dashboard: state.dashboard
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const ReadOther = ({ dashboard }) => (
  <div className="row read-another-section">
  {dashboard.map((article, i) => (
    i < 9 && (
    <OtherArticle
    article={article}
    index={i}
    key={i}
    />
  )))}
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(ReadOther)
