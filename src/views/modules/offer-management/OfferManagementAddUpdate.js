import React, {Component} from "react";
import {CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CFormTextarea} from "@coreui/react";

class OfferManagementAddUpdate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <CForm>
        <div className="row">
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="name">Select Store</CFormLabel>
            <CFormSelect aria-label="Select Store">
              <option>Select Store</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </div>
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="couponCode">Coupon Code</CFormLabel>
            <CFormSelect aria-label="Select Store">
              <option>Select Coupon Code</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </div>
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="minimumOrderValue">Minimum Order Amount</CFormLabel>
            <input type="number" name="minimumOrderValue" id="minimumOrderValue" className="form-control"/>
          </div>
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="discount">Discount Rate (%)</CFormLabel>
            <input type="number" name="discount" id="discount" className="form-control"/>
          </div>
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="startDate">Start Date</CFormLabel>
            <input type="date" name="discount" id="discount" className="form-control"/>
          </div>
          <div className="col-md-6 form-group">
            <CFormLabel htmlFor="endDate">End Date</CFormLabel>
            <input type="date" name="endDate" id="endDate" className="form-control"/>
          </div>
        </div>
      </CForm>
    )
  }
}

export default OfferManagementAddUpdate;
