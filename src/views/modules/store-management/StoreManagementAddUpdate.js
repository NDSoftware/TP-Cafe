import React, {Component} from "react";
import {CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormLabel, CRow} from "@coreui/react";

class StoreManagementAddUpdate extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      storeName: '',
      storeContactPersonName: '',
      storeAddress: '',
      storeContactNo: '',
      storeGSTNo: '',
      storeImage: [],
      storeGSTImage: [],
      storeCertificate: '',
      storeTimingOpen: '',
      storeTimingClose: '',
      storeStatus: false
    }
  }

  changeHandler = ev => {
    const {name,value}=ev.target;
    this.setState({[name]:value})
  }

  onClickBack = () => {
    window.history.back();
  }

  render() {
    return (
      <section className="store-management-add-update-section">
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Store Management</strong>
                <div className="float-end">
                  <button className="btn btn-info btn-sm" onClick={this.onClickBack}>Back</button>
                </div>
              </CCardHeader>
              <CCardBody>
                <form name="storeManagement" noValidate>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <CFormLabel htmlFor="storeName">Store Name <span className="required-mark"/></CFormLabel>
                      <CFormInput
                        type="text"
                        name="storeName"
                        id="storeName"
                        required
                        placeholder="Store Name"
                        value={this.state.storeName}
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>
                </form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </section>
    )
  }
}

export default StoreManagementAddUpdate;
