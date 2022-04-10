import {ElNotification} from "element-plus";

export const openSuccessNotification = (title, message) => {
    ElNotification.success({
        title: title,
        message: message,
        showClose: false,
        duration: 2500
    })
}

export const openInfoNotification = (title, message, showClose = false) => {
    ElNotification({
        title: title,
        message: message,
        type: 'info',
        showClose: showClose,
        duration: 2500
    })
}

export const openErrorNotification = (title, message, showClose = false) => {
    ElNotification({
        title: title,
        message: message,
        type: 'error',
        showClose: showClose,
        duration: 2500
    })
}