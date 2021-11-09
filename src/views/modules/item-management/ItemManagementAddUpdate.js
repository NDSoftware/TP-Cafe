import React, {Component} from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm, CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect, CFormTextarea,
  CRow
} from "@coreui/react";
import {toast} from "react-toastify";
import AppConstant from "../../../common/AppConstant";

class ItemManagementAddUpdate extends Component {
  configConst = AppConstant;
  constructor(Props) {
    super(Props);
    this.state = {
      itemName: '',
      selectedCategory: '',
      categoryList: '',
      originalPrice: '',
      itemCode: '',
      discountedPrice: '',
      todaySpecial: '',
      itemDescription: '',
      itemTags: '',
      itemQuantity: '',
      itemImages: [],
      previewItemImages: [],
      validated: false
    }
  }

  categoryList = [
    {
      id: 1,
      name: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      name: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 3,
      name: 'Energy Drink',
      year: '1984',
    },
    {
      id: 4,
      name: 'Soft Drink',
      year: '1984',
    },
    {
      id: 5,
      name: 'Pizza',
      year: '1984',
    },
    {
      id: 6,
      name: 'Beverages',
      year: '1984',
    },{
      id: 7,
      name: 'Main Course',
      year: '1984',
    },{
      id: 8,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 9,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 10,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 11,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 12,
      name: 'Ghostbusters',
      year: '1984',
    },{
      id: 13,
      name: 'Ghostbusters',
      year: '1984',
    },
  ];

  componentDidMount() {
  }

  handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    this.setState({
      validated: true
    });
  }

  changeHandler = ev => {
    const {name,value}=ev.target;
    this.setState({[name]:value})
  }

  /*File Upload Start*/
  uploadImage = (event, stateName, previewStateName) => {
    if (event && event.target && event.target.files && event.target.files.length !== 0) {
      const arr = [...this.state[stateName]];
      const preview = [...this.state[previewStateName]];
      const mainArr = [...event.target.files];
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
                <strong>Create Product</strong>
                <div className="float-end">
                  <button className="btn btn-info btn-sm text-white" onClick={this.onClickBack}>Back</button>
                </div>
              </CCardHeader>
              <CCardBody>
                <CForm name="productManagement" noValidate
                       validated={this.state.validated}
                       onSubmit={this.handleSubmit}>
                  <CRow>
                    <CCol lg={8}>
                      <CRow>
                        <CCol xs={8} className="form-group">
                          <CFormLabel htmlFor="itemName">Item Name <span className="required-mark"/></CFormLabel>
                          <CFormInput
                            type="text"
                            name="itemName"
                            id="itemName"
                            required
                            placeholder="Item Name"
                            value={this.state.itemName}
                            onChange={this.changeHandler}
                          />
                          <CFormFeedback invalid>Please enter Item name.</CFormFeedback>
                        </CCol>
                        <CCol lg={4} className="form-group">
                          <CFormLabel htmlFor="category">Category <span className="required-mark"/></CFormLabel>
                          <CFormSelect id="category" name="category" onChange={this.changeHandler}>
                            <option>Choose...</option>
                            {this.categoryList && this.categoryList.length !== 0 ?
                              <>
                                { this.categoryList.map((cat, index) => {
                                  return (
                                  <option key={index} value={cat.name}>{cat.name}</option>
                                  )}
                                )}
                              </> :
                              ''
                            }
                          </CFormSelect>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={8} className="form-group">
                          <CFormLabel htmlFor="originalPrice">Original Price <span className="required-mark"/></CFormLabel>
                          <CFormInput
                            type="text"
                            name="originalPrice"
                            id="originalPrice"
                            required
                            placeholder="Original Price"
                            value={this.state.originalPrice}
                            onChange={this.changeHandler}
                          />
                          <CFormFeedback invalid>Please enter original price.</CFormFeedback>
                        </CCol>
                        <CCol xs={4} className="form-group">
                          <CFormLabel htmlFor="itemCode">Item Code <span className="required-mark"/></CFormLabel>
                          <CFormInput
                            type="text"
                            name="itemCode"
                            id="itemCode"
                            required
                            placeholder="Item Code"
                            value={this.state.itemCode}
                            onChange={this.changeHandler}
                          />
                          <CFormFeedback invalid>Please enter item code.</CFormFeedback>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={8} className="form-group">
                          <CFormLabel htmlFor="discountedPrice">Discounted Price <span className="required-mark"/></CFormLabel>
                          <CFormInput
                            type="text"
                            name="discountedPrice"
                            id="discountedPrice"
                            required
                            placeholder="Discounted Price"
                            value={this.state.discountedPrice}
                            onChange={this.changeHandler}
                          />
                          <CFormFeedback invalid>Please enter discounted price.</CFormFeedback>
                        </CCol>
                        <CCol lg={4} className="form-group">
                          <CFormLabel htmlFor="todaySpecial">Today Special <span className="required-mark"/></CFormLabel>
                          <CFormCheck
                            type="radio"
                            name="todaySpecial"
                            label="Yes"
                            defaultChecked
                          />
                          <CFormCheck
                            type="radio"
                            name="todaySpecial"
                            label="No"
                          />
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol xs={8} className="form-group">
                          <CFormLabel htmlFor="itemDescription">Item Description <span className="required-mark"/></CFormLabel>
                          <CFormTextarea id="itemDescription" value={this.state.itemDescription}
                                         onChange={this.changeHandler} rows="5">
                          </CFormTextarea>
                          <CFormFeedback invalid>Please enter item description.</CFormFeedback>
                        </CCol>
                        <CCol lg={4} className="form-group">
                          <CRow>
                            <CCol xs={12} className="form-group">
                              <CFormLabel htmlFor="itemTag">Item Tag </CFormLabel>
                              <CFormInput
                                type="text"
                                name="itemTag"
                                id="itemTag"
                                placeholder="Item Tag"
                                value={this.state.itemTag}
                                onChange={this.changeHandler}
                              />
                              <CFormFeedback invalid>Please enter Item tag.</CFormFeedback>
                            </CCol>
                            <CCol xs={12} className="form-group">
                              <CFormLabel htmlFor="itemQuantity">Item Quantity <span className="required-mark"/></CFormLabel>
                              <CFormInput
                                type="text"
                                name="itemQuantity"
                                id="itemQuantity"
                                required
                                placeholder="Item Quantity"
                                value={this.state.itemQuantity}
                                onChange={this.changeHandler}
                              />
                              <CFormFeedback invalid>Please enter Item quantity.</CFormFeedback>
                            </CCol>
                          </CRow>
                        </CCol>
                      </CRow>
                    </CCol>
                    <CCol lg={4}>
                      <CFormLabel className="form-group" htmlFor="itemImages">Product Image <span className="required-mark"/></CFormLabel>
                      <i className="fa fa-upload fa-2x mr-2 image-container-icon">
                        <CFormInput
                          type="file"
                          name="itemImages"
                          id="itemImages"
                          required
                          multiple
                          placeholder="Choose Item Image"
                          onChange={($event) => this.uploadImage($event, 'itemImages', 'previewItemImages')}
                        />
                      </i>
                      <div className="image-container-overflow" id="imageContainer">
                        {this.state.itemImages && this.state.itemImages.length !== 0 ?
                          <>
                            {
                              this.state.previewItemImages.map((el, index) => {
                                return (
                                  <div key={"itemImage_" + index} className="position-relative">
                                    <i className="fa fa-times-circle-o" onClick={() => this.onRemoveImage(index,  'itemImages', 'previewItemImages')}/>
                                    <img src={el} alt="product"/>
                                  </div>
                                )
                              })
                            }
                          </>
                          :
                          <>
                            <img src={this.configConst.defaultImage} alt="Choose Product Image"/>
                          </>
                        }
                      </div>
                    </CCol>
                  </CRow>
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

export default ItemManagementAddUpdate;
