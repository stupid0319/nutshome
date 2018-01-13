import { combineReducers } from 'redux';
import { menuVisible } from './MenuTragger'
import { SAVE_DASHBOARD, SET_ACTIVE_CATEGORY,
         SAVE_MENU_CATEGORY,
       } from '../actions'

const dashboard = (state = {}, action) => {
  switch (action.type) {
  case SAVE_DASHBOARD:
    return action.boardData
  default:
    return state
  }
}

const menuCategory = (state = {categorys:{}}, action) => {
  switch (action.type) {
  case SET_ACTIVE_CATEGORY:
    return {...state, activeCategory:action.activeCategory}
  case SAVE_MENU_CATEGORY:
    return {...state, categorys:action.categorys}
  default:
    return state
  }
}

const rootReducer = combineReducers({
  menuVisible,
  dashboard,
  menuCategory,
})

export default rootReducer
