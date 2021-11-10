import React from "react";
import BaseListComponent from "../../../common/BaseListComponent";
import {CCard, CCardBody, CCardHeader, CCol, CRow} from "@coreui/react";
import DataTable from "react-data-table-component";
import CIcon from "@coreui/icons-react";
import {cilPencil} from "@coreui/icons";
import ReactSwitch from "../../components/react-switch/React-Switch";

class ContactUsList extends BaseListComponent {


  data = [
    {
      id: 1,
      firstName: 'Dhairya',
      lastName: 'Bhavsar',
      contactNumber: '7405183836',
      description: ''
    },
    {
      id: 2,
      firstName: 'Kartik',
      lastName: 'Patel',
      contactNumber: '7405183836',
      description: ''
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Deo',
      contactNumber: '7405183836',
      description: ''
    },
    {
      id: 4,
      firstName: 'Wornf',
      lastName: 'Roff',
      contactNumber: '7405183836',
      description: ''
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
      name: 'Contact',
      selector: row => row.contactNumber,
    },
    {
      name: 'Description',
      selector: row => row.description,
    }
  ];

  render() {
    return (
      <section className="contact-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Contact Us Form</strong>
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

export default ContactUsList;
