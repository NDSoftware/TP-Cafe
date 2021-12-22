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

class CategoryList extends Component {
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
      year: '1988',
    },
    {
      id: 2,
      name: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 3,
      name: 'Energy Drink',
      year: '1984',
    },
    {
      id: 4,
      name: 'Soft Drink',
      year: '1984',
    },
    {
      id: 5,
      name: 'Pizza',
      year: '1984',
    },
    {
      id: 6,
      name: 'Beverages',
      year: '1984',
    },{
      id: 7,
      name: 'Main Course',
      year: '1984',
    },{
      id: 8,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 9,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 10,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 11,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 12,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 13,
      name: 'Ghostbusters',
      year: '1984',
    },
  ];

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
       name: 'Action',
       selector: row => {
         return (
           <>
             <button  className="btn btn-primary btn-sm text-white" onClick={() => this.onClose('edit')}>
               <CIcon icon={cilPencil} className="cursor-pointer" />
             </button>
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
                <strong>Category Management</strong>
                <div className="float-end">
                  <button className="btn btn-primary text-white btn-sm" onClick={() => this.onClose('add')}>Add New</button>
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
            <CButton color="success text-white" className="btn-sm" onClick={() => this.onClose('save')}>{this.state.add ? 'Add' : 'Save'} </CButton>
          </CModalFooter>
        </CModal>
      </section>
    )
  }
}

export default memo(CategoryList);
