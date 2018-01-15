import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'

const mapStateToProps = (state, ownProps) => ({
  dashboard: state.dashboard
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

class Credits extends React.Component {
  render() {
    const { match, dashboard } = this.props
    return (
      <Row>
        <div className="col-xs-12 col-sm-2">
          <Link to={'/about'}>
            <img src="https://cdn1.iconfinder.com/data/icons/food-and-ingredients-1/500/hazelnut-512.png" className="user-icon " alt="user-image" />
          </Link>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="credits-info">
            <p>Published on the
              <span className="credits-underline">{dashboard[match.params.index].gsx$lastupdated.$t}</span>
              </p>
            <p>
              <span className="credits-separator">by</span>
              <Link to={'/about'}>
                {'兩姊妹堅果行'}
                </Link>
                <span className="credits-separator">in</span>
                <Link to={`/category/${dashboard[match.params.index].gsx$category.$t}`}>
                {dashboard[match.params.index].gsx$category.$t}
              </Link>
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div
            className="fb-like social"
            data-share="true"
            data-width="450"
            data-show-faces="true">
          </div>
        </div>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Credits)
