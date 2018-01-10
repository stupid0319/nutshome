import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  menuClassName: state.MenuTrigger? "menu-open":"menu-collapsed"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const Menu = ({ menuClassName }) => (
  <div id="menu" className={menuClassName}>
    <ul>
      <li>
        <i className="fa fa-home">
          {' Home'}
        </i>
      </li>
      <li>
        <i className="fa fa-user">
          {' About'}
        </i>
      </li>
      <li>
        <i className="fa fa-paper-plane">
           {' Contact'}
        </i>
      </li>
    </ul>
    <hr/>
  </div>
)


export default connect(mapStateToProps,mapDispatchToProps)(Menu)
