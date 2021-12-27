import React, {useRef} from 'react'
import { Toast } from 'primereact/toast';
import * as CONSTANT from "../constant/constant";

const ToastContext = React.createContext(null);

const ToastProvider = ({ children }) => {
    const toast = useRef(null);
    const showSuccess = (msg) => {
        toast.current.show({severity:CONSTANT.SUCCESS_MESSAGE_TYPE, summary: CONSTANT.SUCCESS_MESSAGE_SUMMARY, detail:msg, life: CONSTANT.TOAST_TIMEOUT});
    }
    const showInfo = (msg) => {
        toast.current.show({severity:CONSTANT.INFO_MESSAGE_TYPE, summary: CONSTANT.INFO_MESSAGE_SUMMARY, detail:msg, life: CONSTANT.TOAST_TIMEOUT});
    }

    const showWarn = (msg) => {
        toast.current.show({severity:CONSTANT.WARNING_MESSAGE_TYPE, summary: CONSTANT.WARNING_MESSAGE_SUMMARY, detail:msg, life: CONSTANT.TOAST_TIMEOUT});
    }

    const showError = (msg) => {
        toast.current.show({severity:CONSTANT.ERROR_MESSAGE_TYPE, summary: CONSTANT.ERROR_MESSAGE_SUMMARY, detail:msg, life: CONSTANT.TOAST_TIMEOUT});
    }
  return (
    <ToastContext.Provider value={{showSuccess, showInfo, showWarn, showError}}>
        <Toast ref={toast}></Toast>
        {children}
    </ToastContext.Provider>
  )
}

const useToast = () => {
    const toastHelpers = React.useContext(ToastContext);
    return toastHelpers;
}

export { ToastContext, useToast };
export default ToastProvider;
