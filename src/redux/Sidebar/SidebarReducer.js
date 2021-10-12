/* eslint-disable prettier/prettier */
import { SHOWSIDEBAR, SIDEBARUNFOLD } from "./SidebarActions"

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
}

const SidebarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOWSIDEBAR:
      return {
        ...state,
        sidebarShow: !state.sidebarShow,
      }

    case SIDEBARUNFOLD: {
      return {
        ...state,
        sidebarUnfoldable: !state.sidebarUnfoldable,
      }
    }

    default:
      return state
  }
}

export default SidebarReducer
