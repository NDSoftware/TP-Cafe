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

class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      edit: false,
      add: false,
    }
  }

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
     {
       selector: "action",
       name: 'Action',
       cell: record => {
         return (
           <>
              <CIcon icon={cilPencil} className="cursor-pointer" onClick={this.onClose('edit')}/>
           </>
         )
       }
     }
  ];

   data = [
    {
      id: 1,
      name: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      name: 'Ghostbusters',
      year: '1984',
    },
  ]

   onClose = (addEdit) => {
     this.setState({
       visible: !this.state.visible
     });
     if (addEdit === 'edit') {
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
     const addEditText = this.state.add ? 'Add' : 'Edit';
    return(
      <section className="category-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Category Management</strong>
                <div className="float-end">
                  <button className="btn btn-primary btn-sm" onClick={this.onClose}>Add New</button>
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
        <CModal visible={this.state.visible} onClose={this.onClose}>
          <CModalHeader>
            <CModalTitle>{addEditText} Category</CModalTitle>
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
            <CButton color="success" className="btn-sm" onClick={this.onClose}>{this.state.add ? 'Add' : 'Save'} </CButton>
          </CModalFooter>
        </CModal>
      </section>
    )
  }
}

export default memo(CategoryList);
