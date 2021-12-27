import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {cilLockLocked, cilUser} from '@coreui/icons';
// import icon from '../../../assets/images/icon.png';
import {EMAIL_REGEX} from "../../../shared/regex/regex";
import {API} from "../../../services/Api";
import {toast} from "react-toastify";

const Login = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [disable, setDisable] = useState(false)
  const [errors, setErrors] = useState({email: '', password: ''})

  useEffect(() => {
    getDisableValue()
  }, [user]);

  const getDisableValue = () => {
    if (user.email !== '' && user.password !== '') {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const handleValidation = () => {
    let errorObj = {}
    if (!EMAIL_REGEX.test(user.email)) {
      errorObj.email = "Please enter valid email"
      setErrors({...errorObj})
      return false
    } else if (user.password.trim() === '') {
      errorObj.password = "Please enter valid password"
      setErrors({...errorObj})
      return false
    } else {
      setErrors({...errorObj})
      return true
    }
  }

  const onLogin = () => {
    if (handleValidation()) {
      API.login(loginRes, user, false);
    }
  }

  const loginRes = {
    cancel: (c) => {
    },
    success: (response) => {
      if (response) {
        toast.success('Welcome ' + response.data['full_name']);
        localStorage.setItem("token", response.data.token)

        history.push("/dashboard");
      }
    },
    error: (error) => {
      toast.error(error);
    },
    complete: () => {
    },
  }

  const onHandleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
    setErrors({...errors, [e.target.name]: ''})
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    history.push("/forgot-password")
  }

  return (
    <div className="login-page-wrap min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-1">
                <CCardBody className="p-2">
                  <CForm>
                    <div className="row header-login text-center">
                      {/*<div className="col-md-4 text-center">*/}
                      {/*  <figure className="login-page-logo">*/}
                      {/*    <img src={icon} alt="TP Cafe"/>*/}
                      {/*  </figure>*/}
                      {/*</div>*/}
                      <div className="col-md-12 m-0 p-2">
                        <h1 className="login-txt">Login</h1>
                        <p className="text-success text-medium-emphasis m-0">Sign In to your account</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <CInputGroup className="mb-2">
                          <CInputGroupText>
                            <CIcon icon={cilUser}/>
                          </CInputGroupText>
                          <CFormInput placeholder="Email address"
                                      value={user.email} name="email"
                                      required
                                      onChange={(e) => onHandleChange(e)}
                          />
                        </CInputGroup>
                        {errors.email && <p className="text-danger">{errors['email']}</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <CInputGroup className="mb-2">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked}/>
                          </CInputGroupText>
                          <CFormInput
                            value={user.password} name="password"
                            type="password"
                            required
                            onChange={(e) => onHandleChange(e)}
                            placeholder="Enter your password"
                          />
                        </CInputGroup>
                        {errors.password && <p className="text-danger">{errors['password']}</p>}
                      </div>
                    </div>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary"
                                 onClick={() => onLogin()} disabled={disable}
                                 className="px-3">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link"
                                 onClick={(e) => handleForgotPassword(e)}
                                 className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
