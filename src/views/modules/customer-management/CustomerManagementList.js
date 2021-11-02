import React from "react";
import DataTable from 'react-data-table-component';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from "@coreui/react";
import {cilPencil} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import ReactSwitch from "../../components/react-switch/React-Switch";
import BaseListComponent from "../../../common/BaseListComponent";

class CustomerManagementList extends BaseListComponent {
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
      firstName: 'Dhairya',
      lastName: 'Bhavsar',
      contactNumber: '7405183836',
      status: false,
    },
    {
      id: 2,
      firstName: 'Namrata',
      lastName: 'Bhavsar',
      contactNumber: '7405183836',
      status: true,
    },
    {
      id: 3,
      firstName: 'Het',
      lastName: 'Bhavsar',
      contactNumber: '7405183836',
      status: true,
    },
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
    },
    {
      name: 'First Name',
      selector: row => row.firstName,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
    },
    {
      name: 'Contact Number',
      selector: row => row.contactNumber,
    },
    {
      name: 'Status',
      selector: row => {
        return (
          <>
            {row.status ? 'Active' : 'Offline'}
          </>
        )
      },
    },
    {
      name: 'Action',
      selector: row => {
        return (
          <>
            <ReactSwitch />
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
      <section className="customer-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Customer Management</strong>
                <div className="float-end">
                  <button className="btn btn-success btn-sm text-white">Export <i className="fa fa-file-pdf-o"/></button>
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
      </section>
    )
  }
}

export default CustomerManagementList;
