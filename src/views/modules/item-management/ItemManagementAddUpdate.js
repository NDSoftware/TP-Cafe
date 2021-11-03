import React, {Component} from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow
} from "@coreui/react";
import {toast} from "react-toastify";
import categoryList from "../category/categoryList";

class ItemManagementAddUpdate extends Component {

  constructor(Props) {
    super(Props);
    this.state = {
      itemName: '',
      selectedCategory: '',
      categoryList: '',
      originalPrice: '',
      itemCode: '',
      discountPrice: '',
      todaySpecial: '',
      itemDescription: '',
      itemTags: '',
      itemQuantity: '',
      itemImages: [],
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
                <CForm name="productManagement" noValidate
                       validated={this.state.validated}
                       onSubmit={this.handleSubmit}>
                  <CRow>
                    <CCol lg={8}>
                      <CRow>
                        <CCol xs={8}>
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
                        <CCol lg={4}>
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
                    </CCol>
                    <CCol lg={4}>

                    </CCol>
                  </CRow>
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
