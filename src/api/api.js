import axios from "axios";
import qs from "qs";
import store from "../store"

//用户登录
export function login(userInfo) {
  return axios.post(
      store.urls.loginURL,
      qs.stringify(userInfo)
  )
}
//用户注册
export function registration(registrationUserInfo) {
  return axios.post(
      store.urls.registrationURL,
      qs.stringify(registrationUserInfo)
  )
}
//验证Token
export function checkToken() {
  return axios.post(
      store.urls.checkTokenURL,
      qs.stringify({
        token: JSON.parse(window.localStorage.getItem('token'))
      })
  )
}
//检测注册用户名可用
export function checkUserName(userName) {
  return axios.post(
      store.urls.canUseUserNameURL,
      qs.stringify({
        userName: userName
      })
  )
}
//获取用户头像
export function getAvatar() {
    return axios.post(
        store.urls.getAvatarURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token'))
        })
    )
}
//获取用户ID
export function getUserID() {
    return axios.post(
        store.urls.getUserIdURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token'))
        })
    )
}
//获取用户名
export function getUserName() {
    return axios.post(
        store.urls.getUserIdURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token'))
        })
    )
}
//获取用户信息- id userName avatarURL
export function getUserInfoAPI() {
    return axios.post(
        store.urls.getUserInfoURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token'))
        })
    )
}
//获取用户密码
export function getUserPassWordAPI() {
    return axios.post(
        store.urls.getPassWordURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token'))
        })
    )
}
//修改用户名
export function updateUserNameAPI(newUserName) {
    return axios.post(
        store.urls.updateUserNameURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token')),
            newUserName: newUserName
        })
    )
}
//修改用户密码
export function updateUserPassWordAPI(newPassWord) {
    return axios.post(
        store.urls.updatePassWordURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token')),
            newPassWord: newPassWord
        })
    )
}
//注销账户
export function removeAccountAPI(userName, passWord, encodePassWord) {
    return axios.post(
        store.urls.removeAccountURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token')),
            userName: userName,
            passWord: passWord,
            encodePassWord: encodePassWord
        })
    )
}
//上传头像
export function uploadAvatarAPI(file) {
    return axios.post(
        store.urls.uploadAvatarURL,
        qs.stringify({
            token: JSON.parse(window.localStorage.getItem('token')),
            file: file
        })
    )
}