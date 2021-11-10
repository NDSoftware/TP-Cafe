import React, { memo} from "react";
import DataTable from 'react-data-table-component';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from "@coreui/react";
import {cilPencil} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import ReactSwitch from "../../components/react-switch/React-Switch";
import BaseListComponent from "../../../common/BaseListComponent";
import RolesPermissionAddUpdate from "./RolesPermissionAddUpdate";

class RolesPermissionList extends BaseListComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  data = [
    {
      id: 1,
      userName: 'Dhairya',
      createdDate: '21/08/2021',
      createdBy: 'Bhavsar',
      updatedDate: '22/08/2021',
      updatedBy: 'John'
    },
    {
      id: 2,
      userName: 'Smit',
      createdDate: '21/08/2021',
      createdBy: 'jim',
      updatedDate: '22/08/2021',
      updatedBy: 'John'
    },
    {
      id: 3,
      userName: 'Joe',
      createdDate: '21/08/2021',
      createdBy: 'Ownd',
      updatedDate: '22/08/2021',
      updatedBy: 'John'
    },
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
    },
    {
      name: 'User Name',
      selector: row => row.userName,
    },
    {
      name: 'Created Date',
      selector: row => row.createdDate,
    },
    {
      name: 'Created By',
      selector: row => row.createdBy,
    },
    {
      name: 'Updated Date',
      selector: row => row.updatedDate,
    },
    {
      name: 'Updated By',
      selector: row => row.updatedBy,
    },
    {
      name: 'Action',
      selector: row => {
        return (
          <>
            <button  className="btn btn-primary btn-sm" onClick={this.modalHideShow}>
              <CIcon icon={cilPencil} className="cursor-pointer" />
            </button>
            <ReactSwitch/>
          </>
        )
      }
    }
  ];

  modalHideShow = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return(
      <section className="roles-permission-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Roles & Permission List</strong>
                <div className="float-end">
                  <button className="btn btn-primary btn-sm" onClick={this.modalHideShow}>Create</button>
                </div>
              </CCardHeader>
              <CCardBody>
                <DataTable
                  pagination
                  columns={this.columns}
                  data={this.data}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CModal visible={this.state.visible} onClose={this.modalHideShow}>
          <CModalHeader>
            <CModalTitle>Add Roles and Permission</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <RolesPermissionAddUpdate/>
          </CModalBody>
          <CModalFooter>
            <CButton color="success" className="btn-sm" onClick={this.modalHideShow}>Add</CButton>
            <CButton color="secondary" className="btn-sm" onClick={this.modalHideShow}>Cancel</CButton>
          </CModalFooter>
        </CModal>
      </section>
    )
  }
}

export default memo(RolesPermissionList);
