import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MenuCategory from './MenuCategory'
import { Link } from 'react-router-dom'


const mapStateToProps = (state, ownProps) => ({
  menuVisible: state.menuVisible,
  categoryNames: Object.keys(state.menuCategory.categories),
  categories:state.menuCategory.categories
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const Menu = ({ menuVisible, categoryNames, categories, onCategoryClick }) => (
  <div id="menu" className={menuVisible? "menu-open":"menu-collapsed"}>
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
            category = {categories[item]}
            key = {i.toString()}
          >
          {item}
          </MenuCategory>);
      })}
    </ul>
  </div>
)


export default connect(mapStateToProps,mapDispatchToProps)(Menu)
