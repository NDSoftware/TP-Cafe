//  Common regex

export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const EMAIL_REGEX = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const PHONENUMBER_REGEX = /^\+\d{1,3}\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
export const ONLY_NUMBER = /^[0-9\b]+$/;
export const ONLY_TWO_DEGITS = /^[0-9]{1,2}?$/
export const URL_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
export const TITLE_MAXLENGTH = 100;
export const DESC_MAXLENGTH = 100;
export const CUST_TITLE_MAXLENGTH = 20;
export const CUST_DESC_MAXLENGTH = 60;
export const BENEFIT_TITLE_MAXLENGTH = 30;
export const STORE_TITLE_MAXLENGTH = 10;
export const TESTIMONIAL_TITLE_MAXLENGTH = 40;