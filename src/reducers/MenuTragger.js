import { SETMENU_COLLAPSE } from '../actions'

const MenuTrigger = (state = true ,action) => {
  switch (action.type) {
  case SETMENU_COLLAPSE:
    return action.isCollapse
  default:
    return state
  }
}

export default MenuTrigger
