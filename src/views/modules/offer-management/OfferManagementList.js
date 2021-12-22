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
import OfferManagementAddUpdate from "./OfferManagementAddUpdate";

class OfferManagementList extends BaseListComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  data = [
    {
      id: 1,
      storeName: 'Store A',
      couponCode: '112XX12XX',
      minimumOrderValue: '100',
      discount: '10',
      startDate: '21/08/2021',
      endDate: '21/08/2021',
      status: 'Upcoming'
    },
    {
      id: 2,
      storeName: 'Store B',
      couponCode: '112XX12XX',
      minimumOrderValue: '100',
      discount: '10',
      startDate: '21/08/2021',
      endDate: '21/08/2021',
      status: 'Upcoming'
    },
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
    },
    {
      name: 'Store Name',
      selector: row => row.storeName,
    },
    {
      name: 'Coupon Code',
      selector: row => row.couponCode,
    },
    {
      name: 'Minimum Order Value',
      selector: row => row.minimumOrderValue,
    },
    {
      name: 'Discount (%)',
      selector: row => row.discount,
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
    },
    {
      name: 'End Date',
      selector: row => row.endDate,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: 'Action',
      selector: row => {
        return (
          <>
            <button  className="btn btn-primary text-white btn-sm" onClick={this.modalHideShow}>
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
                <strong>Offer Management</strong>
                <div className="float-end">
                  <button className="btn btn-primary text-white btn-sm" onClick={this.modalHideShow}>Create</button>
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
            <CModalTitle>Add Offer Management</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <OfferManagementAddUpdate />
          </CModalBody>
          <CModalFooter>
            <CButton color="success" className="btn-sm text-white" onClick={this.modalHideShow}>Create</CButton>
            <CButton color="secondary" className="btn-sm text-white" onClick={this.modalHideShow}>Cancel</CButton>
          </CModalFooter>
        </CModal>
      </section>
    )
  }
}

export default memo(OfferManagementList);
