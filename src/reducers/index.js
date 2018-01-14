import { combineReducers } from 'redux';
import { menuVisible } from './MenuTragger'
import { SAVE_DASHBOARD, SET_ACTIVE_CATEGORY,
         SAVE_MENU_CATEGORY,SET_ACTIVE_HOME_PANEL,
       } from '../actions'

const dashboard = (state = [], action) => {
  switch (action.type) {
  case SAVE_DASHBOARD:
    return action.boardData
  default:
    return state
  }
}

const menuCategory = (state = {
  activeCategory:"",
  activeHomePanel:"articles",
  categories:{},
}, action) => {
  switch (action.type) {
  case SET_ACTIVE_CATEGORY:
    return {...state, activeCategory:action.activeCategory}
  case SAVE_MENU_CATEGORY:
    return {...state, categories:action.categorys}
  case SET_ACTIVE_HOME_PANEL:
    return {...state, activeHomePanel:action.activeHomePanel}
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
