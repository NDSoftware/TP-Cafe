/* eslint-disable prettier/prettier */
import { SHOWSIDEBAR, SIDEBARUNFOLD } from "./SidebarActions"

export const toggleSide = () => {
  return {
    type: SHOWSIDEBAR,
  }
}

export const togglebar = () => {
  return {
    type: SIDEBARUNFOLD,
  }
}
