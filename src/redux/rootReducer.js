/* eslint-disable prettier/prettier */
import SidebarReducer from "./Sidebar/SidebarReducer"
const { combineReducers } = require("redux")

const rootReducer = combineReducers({
  SidebarReducer,
})
export default rootReducer
