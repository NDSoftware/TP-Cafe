import React, {memo} from "react";
import DataTable from 'react-data-table-component';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from "@coreui/react";
import ReactSwitch from "../../components/react-switch/React-Switch";
import {Link} from "react-router-dom";
import BaseListComponent from "../../../common/BaseListComponent";

class ItemManagementList extends BaseListComponent {
  constructor(props) {
    super(props);
  }

  data = [
    {
      id: 1,
      itemName: 'Dhosa',
      image: this.defaultDataConfig.defaultImage,
      storeName: 'Store A',
      priceName: 'INR 25',
      discountPrice: 'INR 60',
      status: ''
    },
    {
      id: 2,
      itemName: 'Idli',
      image: this.defaultDataConfig.defaultImage,
      storeName: 'Store B',
      priceName: 'INR 25',
      discountPrice: 'INR 60',
      status: ''
    },
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
    },
    {
      name: 'Item Name',
      selector: row => row.itemName,
    },
    {
      name: 'Image',
      selector: row => {
        return (
          <div className="default-image">
            <img src={row.image} alt="Default"/>
          </div>
        )
      },
    },
    {
      name: 'Price Name',
      selector: row => row.priceName,
    },
    {
      name: 'Discount Price',
      selector: row => row.discountPrice,
    },
    {
      name: 'Action',
      selector: row => {
        return (
          <>
            <ReactSwitch/>
          </>
        )
      }
    }
  ];

  render() {
    return(
      <section className="item-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Product List</strong>
                <div className="float-end">
                  <Link to={"/item-management/add"} className="btn btn-primary btn-sm">Add New</Link>
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

export default memo(ItemManagementList);
