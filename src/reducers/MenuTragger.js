import { SET_MENU_COLLAPSE } from '../actions'

export const menuVisible = (state = true ,action) => {
  switch (action.type) {
  case SET_MENU_COLLAPSE:
    return action.menuVisible
  default:
    return state
  }
}
