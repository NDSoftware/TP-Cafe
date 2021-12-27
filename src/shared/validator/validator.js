import * as Regex from "../../shared/regex/regex";

export const isNonEmptyString = (str) => {
return   Boolean(str && typeof str === "string" && str.length);

}

export const isUrlValid = (userInput) => {
    var res = userInput.match(Regex.URL_REGEX);
    if(res == null)
        return false;
    else
        return true;
}

// export const isValidMobileNumber = (number) =>
//   Boolean(
//     isNonEmptyString(number) && number.trim().match(Regex.PHONENUMBER_REGEX)
//   );

// export const isValidEmailID = (emailID) =>
//   Boolean(isNonEmptyString(emailID) && emailID.trim().match(Regex.EMAIL_REGEX));
