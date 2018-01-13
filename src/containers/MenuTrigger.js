import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setMenuCollapse } from '../actions'

const mapStateToProps = (state) => ({
  menuVisible: state.menuVisible
})

const mapDispatchToProps = (dispatch) => ({
  onClick: menuVisible => dispatch(setMenuCollapse(menuVisible))
})

const MenuTrigger = ({ onClick, menuVisible}) => (
  <a
  className="menu-trigger animated fadeInDown"
  role="button"
  onClick = {() => onClick(!menuVisible)}
  >
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </a>
)

MenuTrigger.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuTrigger)
