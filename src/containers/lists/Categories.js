import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Category from './Category'

const mapStateToProps = (state, ownProps) => ({
  categories: state.menuCategory.categories,
  categoryNames: Object.keys(state.menuCategory.categories),
  activeHomePanel: state.menuCategory.activeHomePanel
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

const Categories = ({ categories, categoryNames, activeHomePanel }) => (
  <div
    className={"home-page-categories" + ((activeHomePanel === 'categories') ? ' section-fadein' : ' hide')}
    >
    <div className="category row">
      <section>
        {categoryNames.map((category,i) => {
          return (
            <Category
            key={i}
            index={categories[category][0].index}
            />)
        })}
      </section>
    </div>
  </div>
)
export default connect(mapStateToProps, mapDispatchToProps)(Categories)
