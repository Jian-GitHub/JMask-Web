import axios from "axios";
import qs from "qs";
import store from "../store"

//用户登录
export function login(userInfo) {
  return axios.post(
      store.urls.login,
      qs.stringify(userInfo)
  )
}
//用户注册
export function registration(registrationUserInfo) {
  return axios.post(
      store.urls.registration,
      qs.stringify(registrationUserInfo)
  )
}
//验证Token
export function checkToken() {
  return axios.post(
      store.urls.checkToken,
      qs.stringify({
        token: JSON.parse(window.localStorage.getItem('token'))
      })
  )
}
//检测注册用户名可用
export function checkUserName(userName) {
  return axios.post(
      store.urls.canUseUserName,
      qs.stringify({
        userName: userName
      })
  )
}