import React, {Component} from "react";
import {CForm, CFormCheck, CFormInput, CFormLabel, CFormTextarea} from "@coreui/react";

class RolesPermissionAddUpdate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <CForm>
        <div className="row">
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="name">Name</CFormLabel>
            <CFormInput type="text" id="name" placeholder="Enter Name" />
          </div>
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="contactNumber">Contact Number</CFormLabel>
            <CFormInput type="text" id="contactNumber" placeholder="Enter Contact Number" />
          </div>
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="description">Description</CFormLabel>
            <CFormTextarea id="description" rows="5" placeholder="Enter Description">
            </CFormTextarea>
          </div>
          <div className="col-md-6 form-group">
            <div className="row">
              <div className="col-md-12 form-group">
                <CFormLabel htmlFor="emailUserName">Email Address / User Name</CFormLabel>
                <CFormInput type="text" id="emailUserName" placeholder="Enter Email Address / User Name" />
              </div>
              <div className="col-md-12 form-group">
                <CFormLabel htmlFor="password">Password</CFormLabel>
                <CFormInput type="password" id="password" placeholder="Enter Password" />
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12 form-group horizontalScroll">
            <table className="table table-striped">
              <thead>
              <tr>
                <td>Name</td>
                <td>View</td>
                <td>Create</td>
                <td>Delete</td>
                <td>Edit</td>
                <td>Import</td>
                <td>Export</td>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Dashboard
                  </td>
                  <td>
                    <CFormCheck id="view" />
                  </td>
                  <td>
                    <CFormCheck id="view" />
                  </td>
                  <td>
                    <CFormCheck id="view" />
                  </td>
                  <td>
                    <CFormCheck id="view" />
                  </td>
                  <td>
                    <CFormCheck id="view" />
                  </td>
                  <td>
                    <CFormCheck id="view" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CForm>
    )
  }
}

export default RolesPermissionAddUpdate;
