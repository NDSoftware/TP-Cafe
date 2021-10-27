import React, {Component} from "react";
import {Route} from "react-router-dom";
import StoreManagementList from "./StoreManagementList";
import StoreManagementAddUpdate from "./StoreManagementAddUpdate";

class StoreManagementRoute extends Component {
  render() {
    return (
      <div>
        <Route exact path="/list" component={StoreManagementList} />
        <Route path="/add" component={StoreManagementAddUpdate} />
        <Route path="/edit/:id" component={StoreManagementAddUpdate} />
      </div>
    )
  }
}

export default StoreManagementRoute
