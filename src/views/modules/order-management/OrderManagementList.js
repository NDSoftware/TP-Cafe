import React, {memo} from "react";
import DataTable from 'react-data-table-component';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm, CFormInput, CFormLabel, CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from "@coreui/react";
import BaseListComponent from "../../../common/BaseListComponent";
import {Link} from "react-router-dom";

class OrderManagementList extends BaseListComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      edit: false,
      add: false,
      pickUpTime: ''
    }
    this.statusChange = false;
  }

  data = [
    {
      id: 1,
      orderId: 11,
      orderDate: '22/09/2021',
      customerName: 'Dhairya',
      price: 200
    },
    {
      id: 2,
      orderId: 212,
      orderDate: '22/10/2021',
      customerName: 'Namrata',
      price: 100
    },
    {
      id: 3,
      orderId: 123,
      orderDate: '22/09/2021',
      customerName: 'Dhairya',
      price: 500
    }
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
    },
    {
      name: 'Order Id',
      selector: row => {
        return (
          <>
            <Link to={`/order-management/details`} >
              {row.orderId}
            </Link>
          </>
        )
      }
    },
    {
      name: 'Order Date',
      selector: row => row.orderDate,
    },
    {
      name: 'Customer Name',
      selector: row => row.customerName,
    },
    {
      name: 'Price',
      selector: row => row.price,
    },
    {
      name: 'Action',
      selector: row => {
        return (
          <>
            <button  className="btn btn-success text-white btn-sm" onClick={() => this.onClose(true)}>
              Accept
            </button>
            <button  className="btn btn-danger text-white  btn-sm mr-2">
              Reject
            </button>
          </>
        )
      }
    }
  ];


  onClose = (accept) => {
    this.setState({
      visible: !this.state.visible,
      accept: accept
    });
  }

  render() {
    return(
      <section className="order-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Order Management</strong>
                <div className="float-end">
                  <button className="btn btn-success text-white btn-sm">Export <i className="fa fa-file-pdf-o" /></button>
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
        <CModal visible={this.state.visible} onClose={() => this.onClose(false)}>
          <CModalHeader>
            <CModalTitle>Order Management</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="pickup-time">Enter Pick-up Time</CFormLabel>
                <CFormInput
                  type="time"
                  name="pickup-time"
                  id="pickup-time"
                  required
                  value={this.state.pickUpTime}
                  onChange={this.changeHandler}
                />
              </div>
            </CForm>
          </CModalBody>
          <CModalFooter>
            <CButton color="success" className="btn-sm text-white" onClick={() => this.onClose(true)}>Done</CButton>
            <CButton color="secondary" className="btn-sm text-white mr-2" onClick={() => this.onClose(false)}>Cancel</CButton>
          </CModalFooter>
        </CModal>
      </section>
    )
  }
}

export default memo(OrderManagementList);
