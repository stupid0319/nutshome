import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuCategory from './MenuCategory'
import { Link } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => ({
  menuClassName: state.menuVisible? "menu-open":"menu-collapsed",
  categoryNames: Object.keys(state.menuCategory.categorys),
  categorys:state.menuCategory.categorys
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const Menu = ({ menuClassName, categoryNames, categorys, onCategoryClick }) => (
  <div id="menu" className={menuClassName}>
    <ul>
      <li>
        <i className="fa fa-home"/>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <i className="fa fa-user"/>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <i className="fa fa-paper-plane"/>
        <Link to={'/contact'}>Contact</Link>
      </li>
    </ul>
    <hr/>
    <ul className="menu-category-list">
      {categoryNames.map((item,i) => {
        return (
          <MenuCategory
            category = {categorys[item]}
          >
          {item}
          </MenuCategory>);
      })}
    </ul>
  </div>
)


export default connect(mapStateToProps,mapDispatchToProps)(Menu)
