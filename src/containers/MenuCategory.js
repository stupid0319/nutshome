import React from 'react'
import PropTypes from 'prop-types'
import MenuCategoryArticles from './MenuCategoryArticles'
import { setActiveCategory } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  activeCategory: state.menuCategory.activeCategory
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCategoryClick: categoryName => dispatch(setActiveCategory(categoryName))
})

const MenuCategory = ({ children, category, onCategoryClick, activeCategory, key }) => (
  <li
    className="menu-category-item"
    key={key}
  >
    <i className={"fa fa-chevron-right" + (activeCategory === children?" chevron-expanded":" chevron")}/>
    <a
      role="button"
      onClick = {() => onCategoryClick(activeCategory === children?"":children)}
    >
    {children}
    </a>
    <ul className="menu-articles-list">
    { category.map((item, i) => (
      <MenuCategoryArticles
        title = {item.title}
        fileId = {item.fileId}
        index = {item.index}
        expanded = {activeCategory === children}
        key = {item.fileId}
      />
    ))}
    </ul>
  </li>
)

export default connect(mapStateToProps,mapDispatchToProps)(MenuCategory)
