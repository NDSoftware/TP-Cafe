import React from "react";
import BaseListComponent from "../../../common/BaseListComponent";
import {CCard, CCardBody, CCardHeader, CCol, CRow} from "@coreui/react";
import DataTable from "react-data-table-component";
import ReactStars from "react-rating-stars-component";

class ReviewRating extends BaseListComponent {


  data = [
    {
      id: 1,
      customerName: 'Dhairya',
      orderId: '123',
      productName: 'Dosha',
      productRatingAndReview: 4,
      storeName: 'TP-Cafe',
      storeRatingAndReview: 5
    },
    {
      id: 2,
      customerName: 'Dhairya',
      orderId: '123',
      productName: 'Dosha',
      productRatingAndReview: 4,
      storeName: 'TP-Cafe',
      storeRatingAndReview: 5
    }
  ];

  columns = [
    {
      name: 'Sr No.',
      selector: row => row.id,
      width: '100px'
    },
    {
      name: 'Customer Name',
      selector: row => row.customerName,
    },
    {
      name: 'Order Id',
      selector: row => row.orderId,
    },
    {
      name: 'Product Name',
      selector: row => row.productName,
    },
    {
      name: 'Product Review & Rating',
      selector: row => {
        return (
          <>
            <ReactStars
              count={row.productRatingAndReview}
              size={5}
              activeColor="#ffd700"
              edit={false}
              key={`p` + row.id}
              fullIcon={<i className="fa fa-star"/>}
            />
          </>
        )
      },
    },
    {
      name: 'Store Name',
      selector: row => row.storeName
    },
    {
      name: 'Store Review & Rating',
      selector: row => {
        return (
          <>
            <ReactStars
              count={row.storeRatingAndReview}
              size={5}
              activeColor="#ffd700"
              edit={false}
              key={`s` + row.id}
            />
          </>
        )
      },
    },
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

export default ReviewRating;
