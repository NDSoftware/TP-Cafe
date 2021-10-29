import React, { Component, memo} from "react";
import DataTable from 'react-data-table-component';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm, CFormInput, CFormLabel,
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
import {Link} from "react-router-dom";

class StoreManagementList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      edit: false,
      add: false,
    }
    this.statusChange = false;
  }

  data = [
    {
      id: 1,
      name: 'Beetlejuice',
      storeStatus: 'Active',
    },
    {
      id: 2,
      name: 'Ghostbusters',
      storeStatus: 'Active',
    },
    {
      id: 3,
      name: 'Energy Drink',
      storeStatus: 'Active',
    },
    {
      id: 4,
      name: 'Soft Drink',
      storeStatus: 'Active',
    },
    {
      id: 5,
      name: 'Pizza',
      storeStatus: 'Active',
    },
    {
      id: 6,
      name: 'Beverages',
      storeStatus: 'Active',
    },{
      id: 7,
      name: 'Main Course',
      storeStatus: 'DeActive',
    },{
      id: 8,
      name: 'Ghostbusters',
      storeStatus: 'DeActive',
    },{
      id: 9,
      name: 'Ghostbusters',
      storeStatus: 'Active',
    },{
      id: 10,
      name: 'Ghostbusters',
      storeStatus: 'Active',
    },{
      id: 11,
      name: 'Ghostbusters',
      storeStatus: 'DEActive',
    },{
      id: 12,
      name: 'Ghostbusters',
      storeStatus: 'Active',
    },{
      id: 13,
      name: 'Ghostbusters',
      storeStatus: 'DeActive',
    },
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
    },
    {
      name: 'Store Name',
      selector: row => row.name,
    },
    {
      name: 'Store Status',
      selector: row => row.storeStatus,
    },
    {
      name: 'Action',
      selector: row => {
        return (
          <>
            <Link to={"/storeManagement/edit"} className="btn btn-primary btn-sm"><CIcon icon={cilPencil} className="cursor-pointer"/></Link>
            <ReactSwitch/>
          </>
        )
      }
    }
  ];


  onClose = (addEdit) => {
    this.setState({
      visible: !this.state.visible,
      add: false,
      edit: false,
    });
    if (addEdit !== '' && addEdit === 'edit') {
      this.setState({
        add: false,
        edit: true,
      });
    } else {
      this.setState({
        add: true,
        edit: false,
      });
    }
  }

  render() {
    return(
      <section className="category-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Store Management</strong>
                <div className="float-end">
                  <Link to={"/storeManagement/add"} className="btn btn-primary btn-sm">Add New</Link>
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
        <CModal visible={this.state.visible} onClose={() => this.onClose('close')}>
          <CModalHeader>
            <CModalTitle>{this.state.add ? 'Add' : 'Edit'} Category</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="CName">Category Name</CFormLabel>
                <CFormInput type="text" id="CName" placeholder="Enter Category Name" required/>
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="success" className="btn-sm" onClick={() => this.onClose('save')}>{this.state.add ? 'Add' : 'Save'} </CButton>
          </CModalFooter>
        </CModal>
      </section>
    )
  }
}

export default memo(StoreManagementList);
