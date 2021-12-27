// export const BASE_URL = process.env.REACT_APP_BASE_URL;
/**********************Local Environment Start************************** */
// // //Development Server API URL
export const BASE_URL = 'https://tp-cafe-tpccv.ondigitalocean.app';

export const IMAGE_SIZE = 5
export const MAX_BYTE_SIZE = 5000000
export const NO_VALUE = '-';

/**************API Verbs****************************/
export const GET = 'GET';
export const POST = 'POST';
export const DELETE = 'DELETE';
export const PUT = 'PUT';

//-------------------------------Growl Message Message summary----------------------------------

export const SUCCESS_MESSAGE_SUMMARY = 'Success message';
export const ERROR_MESSAGE_SUMMARY = 'Error message';
export const WARNING_MESSAGE_SUMMARY = 'Warning message';
export const INFO_MESSAGE_SUMMARY = 'Info message';
export const NETWORK_ERROR_MESSAGE = 'Network Error';
export const UNABLE_TO_LOGIN = "There is an issue while logging you in , please try again";
export const IMAGE_MAX_SIZE = "Image size should be less than 5 MB"
export const IMAGE_ERR = "Allow only png, jpg and jpeg"
//-------------------------------Growl Message Message Type----------------------------------------

export const URLERR = "Must be a valid URL"
export const EMAILERR = "Please enter a valid email"



export const SUCCESS_MESSAGE_TYPE = 'success';
export const ERROR_MESSAGE_TYPE = 'error';
export const WARNING_MESSAGE_TYPE = 'warn';
export const INFO_MESSAGE_TYPE = 'info';

export const TOAST_TIMEOUT = 3000;



export const STATUS_OPTION =  [
    { name: 'Active', code: 1 },
    { name: 'Inactive', code: 0 }
]

export const LOGIN = "/services/login"
