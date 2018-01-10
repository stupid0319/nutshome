import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setMenuCollapse } from '../actions'

const mapStateToProps = (state) => ({
  isCollapse: state.MenuTrigger
})

const mapDispatchToProps = (dispatch) => ({
  onClick: isCollapse => dispatch(setMenuCollapse(isCollapse))
})

const MenuTrigger = ({ onClick, isCollapse}) => (
  <a
  className="menu-trigger animated fadeInDown"
  role="button"
  onClick = {() => onClick(!isCollapse)}
  >
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </a>
)

MenuTrigger.PropTypes = {
  isCollapse: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuTrigger)
