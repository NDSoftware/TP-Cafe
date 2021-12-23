import React, {Component} from "react";
import DataTable from 'react-data-table-component';
import BaseListComponent from "../../../common/BaseListComponent";
import {onClickBack} from "../../../_helper/util";

class OrderManagementDetail extends BaseListComponent {
  data = [
    {
      id: 1,
      itemName: 'Dhosa',
      image: this.defaultDataConfig.defaultImage,
      storeName: 'Store A',
      qty: '1',
      priceName: 'INR 25',
      discountPrice: 'INR 60',
      status: 'Accepted',
      itemTotal: '80'
    },
    {
      id: 2,
      itemName: 'Idli',
      image: this.defaultDataConfig.defaultImage,
      storeName: 'Store B',
      priceName: 'INR 25',
      discountPrice: 'INR 60',
      status: 'Accepted',
      itemTotal: '80',
      qty: '1'
    },
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
      width: '100px'
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
      name: 'Qty',
      selector: row => row.qty,
      width: '100px'
    },
    {
      name: 'Price ',
      selector: row => row.priceName,
      width: '100px'
    },
    {
      name: 'Discount Price',
      selector: row => row.discountPrice,
      width: '100px'
    },
    {
      name: 'Status',
      selector: row => row.status
    },
    {
      name: 'Item Total',
      selector: row => row.itemTotal
    }
  ];

  render() {
    return (
      <section className="order-detail mb-2">
        <div className="card">
          <div className="card-header">
            <strong>
              Order Details
            </strong>
            <div className="float-end">
              <button className="btn btn-info btn-sm text-white" onClick={onClickBack}>Back</button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-7 form-group">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <div className="card">
                      <div className="card-header">
                        Customer Details
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            Customer Name
                          </div>
                          <div className="col-md-6">
                            : Dhairya Bhavsar
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            Contact Number
                          </div>
                          <div className="col-md-6">
                            : 7405180836
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-12 form-group">
                    <div className="card">
                      <div className="card-header">
                        Store Details
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            Store Name
                          </div>
                          <div className="col-md-6">
                            : TP-Cafe
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            Store Address
                          </div>
                          <div className="col-md-6">
                            : Ahmedabad
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 form-group">
                <div className="card">
                  <div className="card-header">
                    Order Details
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        Order Id
                      </div>
                      <div className="col-md-6">
                        : 12345
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        Order Date
                      </div>
                      <div className="col-md-6">
                        : 22/09/2021
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        Order Time
                      </div>
                      <div className="col-md-6">
                        : 7:00 PM
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        Order Status
                      </div>
                      <div className="col-md-6">
                        : Pending
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <DataTable
                  pagination
                  columns={this.columns}
                  data={this.data}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default OrderManagementDetail
