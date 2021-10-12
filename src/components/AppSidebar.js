/* eslint-disable react/prop-types */
import React from "react"
import { useSelector, useDispatch, connect } from "react-redux"

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react"
import CIcon from "@coreui/icons-react"

import { AppSidebarNav } from "./AppSidebarNav"

import { logoNegative } from "src/assets/brand/logo-negative"
import { sygnet } from "src/assets/brand/sygnet"

import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { togglebar } from "../redux/Sidebar/SidebarActionCreators"

// sidebar nav config
import navigation from "../_nav"

const AppSidebar = (props) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  console.log(":::::::sides::::::::>", props.sides)

  return (
    <CSidebar
      position="fixed"
      unfoldable={props.sides.sidebarUnfoldable}
      visible={props.sides.sidebarShow}
      onVisibleChange={(visible) => {
        // dispatch({ type: "set", sidebarShow: visible })
        togglebar()
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        // onClick={() => dispatch({ type: "set", sidebarUnfoldable: !unfoldable })}
        onClick={() => props.togglebar()}
      />
    </CSidebar>
  )
}

const mapStateToProps = (state) => {
  return {
    sides: state.SidebarReducer,
  }
}

const mapDispatchToProps = {
  togglebar,
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AppSidebar))
