import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MenuCategoryArticles = ({ title, fileId, expanded, index, key }) => (
  <li
    key = {key}
    className={"menu-articles-item" + (expanded?" article-expanded":"")}
  >
    <Link to={`/article/${index}/${fileId}`}>{title}</Link>
  </li>
)

export default MenuCategoryArticles
