import axios, {AxiosResponse} from 'axios';
import * as APPCONSTANTS from '../shared/constant/constant';
import {toast} from "react-toastify";

let CancelToken = axios.CancelToken;

export const API = {
  login: (onResponse, data, isHeaderRequired) => {
    isHeaderRequired = false;
    request(onResponse, data, APPCONSTANTS.POST, 'JSON', isHeaderRequired, APPCONSTANTS.BASE_URL + APPCONSTANTS.LOGIN);
  },
}

export const buildHeaderWithToken = (headerParams = {}) => {
  let token = localStorage.getItem("token")
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + token
  };

  Object.assign(header, headerParams);
  return header;
}


async function request(onResponse, data, type, returnType, isHeaderRequired, featureURL, secureRequest) {
  let response = '';
  let responseJSON;
  if (navigator.onLine) {
    try {
      if (type === APPCONSTANTS.GET) {
        if (isHeaderRequired) {
          axios.get(featureURL, {
            headers: secureRequest,
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              onResponse.cancel(c)
            })
          }).then(function (response) {
            responseJSON = response;
            if (response.status === 200) {
              onResponse.success(responseJSON.data);
            } else {
              onResponse.error(responseJSON.data);
            }
            if (onResponse.complete) {
              onResponse.complete();
            }
          }).catch(function (error) {
            const err = error.response;
            if (err.status === 401) {
              onResponse.error(err.data.error);
            } else {
              localStorage.removeItem("token")
              window.location.replace('/')
              onResponse.error(err.data.error);
            }
          });
        } else {
          axios.get(featureURL, {
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              onResponse.cancel(c)
            })
          }).then(function (res) {
            response = res

            if (returnType === 'TEXT') {
              responseJSON = response.text();
            } else {
              responseJSON = response;
            }
            // console.log("responseJSON " + JSON.stringify(responseJSON));
            if (response.status === 200) {
              // console.log("onResponse success ");
              onResponse.success(responseJSON.data);
            } else {
              // console.log("onResponse error");
              onResponse.error(responseJSON.data);
            }
            if (onResponse.complete) {
              // console.log("onResponse complete");
              onResponse.complete();
            }
          }).catch(function (error) {
            console.log("error", error)
            // console.log(error);
            if (error.message === APPCONSTANTS.NETWORK_ERROR_MESSAGE) {
              let netError = {
                networkError: true
              }
              onResponse.error(netError);
            } else if (error.response) {
              if (error.response.data.meta.message_code === "UNAUTHORIZED") {
                localStorage.removeItem("token")
                window.location.replace('/')
              }
              onResponse.error(error.response.data);
            }
          });
        }
      } else if (type === APPCONSTANTS.POST) {
        axios.post(featureURL, data, {
          headers: secureRequest,
          cancelToken: new CancelToken(function executor(c) {
            onResponse.cancel(c)
          })
        }).then(function (res) {
          response = res
          if (returnType === 'TEXT') {
            responseJSON = response.text();
          } else {
            responseJSON = response;
          }
          if (response.status === 200) {
            onResponse.success(responseJSON.data);
          } else {
            onResponse.error(responseJSON.data);
          }
          if (onResponse.complete) {
            onResponse.complete();
          }
        }).catch(function (error) {
          console.log(error.response);
          const err = error.response;
          if (err.status === 401) {
            onResponse.error(err.data.error);
          } else {
            localStorage.removeItem("token")
            window.location.replace('/')
            onResponse.error(err.data.error);
          }
        });
      } else if (type === APPCONSTANTS.PUT) {
        if (isHeaderRequired) {
          // console.log("Request Call put with Header:  " + JSON.stringify(secureRequest));
          axios.put(featureURL, data, {
            headers: secureRequest,
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              onResponse.cancel(c)
            })
          }).then(function (res) {
            response = res
            // console.log("response " + JSON.stringify(response));
            // console.log("response status " + response.status);
            if (returnType === 'TEXT') {
              responseJSON = response.text();
            } else {
              responseJSON = response;
            }
            // console.log("responseJSON " + JSON.stringify(responseJSON));
            if (response.status === 200) {
              // console.log("onResponse success ");
              onResponse.success(responseJSON.data);
            } else {
              // console.log("onResponse error");
              onResponse.error(responseJSON.data);
            }
            if (onResponse.complete) {
              // console.log("onResponse complete");
              onResponse.complete();
            }
          }).catch(function (error) {
            const err = error.response;
            if (err.status === 401) {
              onResponse.error(err.data.error);
            } else {
              localStorage.removeItem("token")
              window.location.replace('/')
              onResponse.error(err.data.error);
            }
          });
        } else {
          // console.log("Request Call put without header");
          axios.put(featureURL, {
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              onResponse.cancel(c)
            })
          }).then(function (res) {
            response = res
            if (returnType === 'TEXT') {
              responseJSON = response.text();
            } else {
              responseJSON = response;
            }
            // console.log("responseJSON " + JSON.stringify(responseJSON));
            if (response.status === 200) {
              // console.log("onResponse success ");
              onResponse.success(responseJSON.data);
            } else {
              // console.log("onResponse error");
              onResponse.error(responseJSON.data);
            }
            if (onResponse.complete) {
              // console.log("onResponse complete");
              onResponse.complete();
            }
          }).catch(function (error) {
            const err = error.response;
            if (err.status === 401) {
              onResponse.error(err.data.error);
            } else {
              localStorage.removeItem("token")
              window.location.replace('/')
              onResponse.error(err.data.error);
            }
          });
        }
      } else if (type === APPCONSTANTS.DELETE) {
        if (isHeaderRequired) {
          // console.log("Request Call delete with Header");
          axios.delete(featureURL, {
            headers: secureRequest,
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              onResponse.cancel(c)
            })
          }).then(function (res) {
            response = res
            // console.log("response " + JSON.stringify(response));
            // console.log("response status " + response.status);
            if (returnType === 'TEXT') {
              responseJSON = response.text();
            } else {
              responseJSON = response;
            }
            // console.log("responseJSON " + JSON.stringify(responseJSON));
            if (response.status === 200) {
              // console.log("onResponse success ");
              onResponse.success(responseJSON.data);
            } else {
              // console.log("onResponse error");
              onResponse.error(responseJSON.data);
            }
            if (onResponse.complete) {
              // console.log("onResponse complete");
              onResponse.complete();
            }
          }).catch(function (error) {
            const err = error.response;
            if (err.status === 401) {
              onResponse.error(err.data.error);
            } else {
              localStorage.removeItem("token")
              window.location.replace('/')
              onResponse.error(err.data.error);
            }
          });
        } else {
          // console.log("Request Call delete without header");
          axios.delete(featureURL, {
            cancelToken: new CancelToken(function executor(c) {
              // An executor function receives a cancel function as a parameter
              onResponse.cancel(c)
            })
          }).then(function (res) {
            response = res
            // console.log("response " + JSON.stringify(response));
            // console.log("response status " + response.status);
            if (returnType === 'TEXT') {
              responseJSON = response.text();
            } else {
              responseJSON = response;
            }
            // console.log("responseJSON " + JSON.stringify(responseJSON));
            if (response.status === 200) {
              // console.log("onResponse success ");
              onResponse.success(responseJSON.data);
            } else {
              // console.log("onResponse error");
              onResponse.error(responseJSON.data);
            }
            if (onResponse.complete) {
              // console.log("onResponse complete");
              onResponse.complete();
            }
          }).catch(function (error) {
            const err = error.response;
            if (err.status === 401) {
              onResponse.error(err.data.error);
            } else {
              localStorage.removeItem("token")
              window.location.replace('/')
              onResponse.error(err.data.error);
            }
          });
        }
      }
    } catch (error) {
      if (onResponse.complete) {
        onResponse.complete();
      }
    }
  } else {
    let error = {
      networkError: true
    }
    onResponse.error(error)
  }
}
