import React, {Component} from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm,
  CFormCheck, CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow
} from "@coreui/react";
import AppConstant from "../../../common/AppConstant";
import {toast, ToastContainer} from 'react-toastify';

class StoreManagementAddUpdate extends Component {
  configConst = AppConstant;
  constructor(Props) {
    super(Props);
    this.state = {
      storeName: '',
      storeContactPersonName: '',
      storeAddress: '',
      storeContactNumber: '',
      storeGSTNo: '',
      storeImage: [],
      previewStoreImage: [],
      storeGSTImage: [],
      previewStoreGSTImage: [],
      storeCertificate: [],
      previewStoreCertificate: [],
      storeTimingOpen: '',
      storeTimingClose: '',
      storeStatus: false,
      validated: false
    }
  }

  changeHandler = ev => {
    const {name,value}=ev.target;
    this.setState({[name]:value})
  }

  onClickBack = () => {
    window.history.back();
  }

  /*File Upload Start*/
  uploadImage = (event, stateName, previewStateName, allowedFiles) => {
    if (event && event.target && event.target.files && event.target.files.length !== 0) {
      const arr = [...this.state[stateName]];
      const preview = [...this.state[previewStateName]];
      const mainArr = [...event.target.files];
      if (mainArr.length > allowedFiles) {
        toast.error('Max ' + allowedFiles + ' files are allowed to upload!');
        return;
      }
      mainArr.forEach((fl) => {
        if (this.configConst.fileTypeSupport.includes(fl.type)) {
          const size = fl.size / 1024 / 1024;
          if (size > this.configConst.maxFileSize ) {
            const index = arr.findIndex((el) => el.name.toLowerCase() === fl.name.toLowerCase());
            arr.splice(index, 1);
            toast.error('File may not be greater than 1 MB');
          } else {
            arr.push(fl);
            preview.push(URL.createObjectURL(fl));
          }
        } else {
          const index = arr.findIndex((el) => el.name.toLowerCase() === fl.name.toLowerCase());
          arr.splice(index, 1);
          toast.error('Please upload only this file type: jpeg, jpg, png format');
        }
      });
      if (arr.length === 0 && this.state.storeImage.length !== 0){
        return
      }
      this.setState({
        [stateName]: arr,
        [previewStateName]: preview
      });
    }
  }

  onRemoveImage(index, stateName, previewStateName) {
    const arr = [...this.state[stateName]];
    const preview = [...this.state[previewStateName]];
    arr.splice(index, 1);
    preview.splice(index, 1);
    this.setState({
      [stateName]: arr,
      [previewStateName]: preview
    });
  }
  /*File Upload End*/

  handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    if (!this.state.storeImage || this.state.storeImage.length === 0) {
      toast.error('Please upload one store image');
    }
    this.setState({
      validated: true
    });
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
                  <button className="btn btn-info btn-sm text-white" onClick={this.onClickBack}>Back</button>
                </div>
              </CCardHeader>
              <CCardBody>
                <CForm name="storeManagement" noValidate
                      validated={this.state.validated}
                      onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <div className="float-end mr-2">
                        <CFormCheck id="storeStatus" label="Active" value={this.state.storeStatus} onChange={this.changeHandler} />
                      </div>
                      <CFormLabel className="float-end ml-2" htmlFor="storeStatus">Store Status <span className="required-mark"/></CFormLabel>
                    </div>
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
                      <CFormFeedback invalid>Please enter store name.</CFormFeedback>
                    </div>
                    <div className="col-md-6 form-group">
                      <CFormLabel htmlFor="storeContactPersonName">Store Contact Person Name <span className="required-mark"/></CFormLabel>
                      <CFormInput
                        type="text"
                        name="storeContactPersonName"
                        id="storeContactPersonName"
                        required
                        placeholder="Store Contact Person Name"
                        value={this.state.storeContactPersonName}
                        onChange={this.changeHandler}
                      />
                      <CFormFeedback invalid>Please enter store contact person name.</CFormFeedback>
                    </div>
                    <div className="col-md-6 form-group">
                      <CFormLabel htmlFor="storeAddress">Store Address <span className="required-mark"/></CFormLabel>
                      <CFormTextarea
                        name="storeAddress"
                        id="storeAddress"
                        required
                        rows="5"
                        placeholder="Store Address"
                        value={this.state.storeAddress}
                        onChange={this.changeHandler}
                      />
                      <CFormFeedback invalid>Please enter store address.</CFormFeedback>
                    </div>
                    <div className="col-md-6 form-group">
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <CFormLabel htmlFor="storeContactNumber">Store Contact No. <span className="required-mark"/></CFormLabel>
                          <CFormInput
                            type="text"
                            name="storeContactNumber"
                            id="storeContactNumber"
                            required
                            placeholder="Store Contact Number"
                            value={this.state.storeContactNumber}
                            onChange={this.changeHandler}
                          />
                          <CFormFeedback invalid>Please enter store contact no.</CFormFeedback>
                        </div>
                        <div className="col-md-12 form-group">
                          <CFormLabel htmlFor="storeGSTNo">Store GST No. <span className="required-mark"/></CFormLabel>
                          <CFormInput
                            type="text"
                            name="storeGSTNo"
                            id="storeGSTNo"
                            required
                            placeholder="Store GST No."
                            value={this.state.storeGSTNo}
                            onChange={this.changeHandler}
                          />
                          <CFormFeedback invalid>Please enter store GST no.</CFormFeedback>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <CFormLabel htmlFor="storeTiming">Store Timings <span className="required-mark"/></CFormLabel>
                      <div className="mr-2 mt-3">
                        <div className="row form-group">
                          <div className="col-md-6 form-group">
                            <CFormLabel htmlFor="storeTimingOpen">Open Time <span className="required-mark"/></CFormLabel>
                          </div>
                          <div className="col-md-6 form-group">
                            <CFormInput
                              type="time"
                              name="storeTimingOpen"
                              id="storeTimingOpen"
                              required
                              value={this.state.storeTimingOpen}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </div>
                        <div className="row form-group">
                          <div className="col-md-6 form-group">
                            <CFormLabel htmlFor="storeTimingClose">Close Time <span className="required-mark"/></CFormLabel>
                          </div>
                          <div className="col-md-6 form-group">
                            <CFormInput
                              type="time"
                              name="storeTimingClose"
                              id="storeTimingClose"
                              required
                              value={this.state.storeTimingClose}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <CFormLabel htmlFor="storeImage">Store Image <span className="required-mark"/></CFormLabel>
                      <i className="fa fa-upload fa-2x mr-2 image-container-icon">
                        <CFormInput
                          type="file"
                          name="storeImage"
                          id="storeImage"
                          required
                          multiple
                          placeholder="Choose Store Image"
                          onChange={($event) => this.uploadImage($event, 'storeImage', 'previewStoreImage', 5)}
                        />
                      </i>
                      <CFormFeedback invalid>Please upload at least one store image.</CFormFeedback>
                      <div className="image-container-overflow" id="imageContainer">
                        {this.state.storeImage && this.state.storeImage.length !== 0 ?
                          <>
                            {
                              this.state.previewStoreImage.map((el, index) => {
                                return (
                                  <div key={"storeImage_" + index} className="position-relative">
                                    <i className="fa fa-times-circle-o" onClick={() => this.onRemoveImage(index,  'storeImage', 'previewStoreImage')}/>
                                    <img src={el} alt="store_atl"/>
                                  </div>
                                )
                              })
                            }
                          </>
                           :
                          <>
                            <img src={this.configConst.defaultImage} alt="Choose Store Image"/>
                          </>
                        }
                      </div>
                    </div>
                    <div className="col-md-6 form-group">
                      <CFormLabel htmlFor="storeGSTImage">Store GST Image <span className="required-mark"/></CFormLabel>
                      <i className="fa fa-upload fa-2x mr-2 image-container-icon">
                        <CFormInput
                          type="file"
                          name="storeGSTImage"
                          id="storeGSTImage"
                          required
                          multiple
                          placeholder="Choose Store GST Image"
                          onChange={($event) => this.uploadImage($event, 'storeGSTImage', 'previewStoreGSTImage', 2)}
                        />
                      </i>
                      <CFormFeedback invalid>Please upload at least one store GST image.</CFormFeedback>
                      <div className="image-container-overflow" id="gstImageContainer">
                        {this.state.storeGSTImage && this.state.storeGSTImage.length !== 0 ?
                          <>
                            {
                              this.state.previewStoreGSTImage.map((el, index) => {
                                return (
                                  <div key={"storeImage_" + index} className="position-relative">
                                    <i className="fa fa-times-circle-o" onClick={() => this.onRemoveImage(index, 'storeGSTImage', 'previewStoreGSTImage')}/>
                                    <img src={el} alt="store_atl"/>
                                  </div>
                                )
                              })
                            }
                          </>
                          :
                          <>
                            <img src={this.configConst.defaultImage} alt="Choose Store Image"/>
                          </>
                        }
                      </div>
                    </div>
                    <div className="col-md-4 form-group">
                      <CFormLabel htmlFor="storeCertificate">Store Registration Certificate Image <span className="required-mark"/></CFormLabel>
                      <i className="fa fa-upload fa-2x mr-2 image-container-icon">
                        <CFormInput
                          type="file"
                          name="storeCertificate"
                          id="storeCertificate"
                          required
                          multiple
                          placeholder="Choose Store Registration Certificate"
                          onChange={($event) => this.uploadImage($event, 'storeCertificate', 'previewStoreCertificate', 2)}
                        />
                      </i>
                      <CFormFeedback invalid>Please upload at least one store registration certificate image.</CFormFeedback>
                      <div className="image-container-overflow justify-content-center" id="storeCertificateContainer">
                        {this.state.storeCertificate && this.state.storeCertificate.length !== 0 ?
                          <>
                            {
                              this.state.previewStoreCertificate.map((el, index) => {
                                return (
                                  <div key={"storeImage_" + index} className="position-relative">
                                    <i className="fa fa-times-circle-o" onClick={() => this.onRemoveImage(index, 'storeCertificate', 'previewStoreCertificate')}/>
                                    <img src={el} alt="store_atl"/>
                                  </div>
                                )
                              })
                            }
                          </>
                          :
                          <>
                            <img src={this.configConst.defaultImage} alt="Choose Store Image"/>
                          </>
                        }
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group justify-content-center d-flex">
                      <CButton color="primary" type="submit">
                        Add
                      </CButton>
                      <CButton color="danger mr-2" className="text-white" onClick={this.onClickBack}>
                        Cancel
                      </CButton>
                    </div>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </section>
    )
  }
}

export default StoreManagementAddUpdate;
