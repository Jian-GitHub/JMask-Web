const store = {
  urls: {
    dealImgURL: '/api/JMask/DealData/dealImgWeb',
    getPassWordURL: '/api/JMask/User/getPassWordByToken',
    loginURL: '/api/JMask/WebLogin',
    checkTokenURL: '/api/JMask/checkToken',
    registrationURL: '/api/JMask/Registration/registration',
    canUseUserNameURL: '/api/JMask/Registration/canUseUserName',
    getUserIdURL: '/api/JMask/User/getUserIdByToken',
    getUserNameURL: '/api/JMask/User/getUserNameByToken',
    getUserInfoURL: '/api/JMask/User/getUserInfoByToken',
    updateUserNameURL: '/api/JMask/User/updateUserNameByToken',
    updatePassWordURL: '/api/JMask/User/updateUserPassWord',
    removeAccountURL: '/api/JMask/User/removeAccount',
    uploadAvatarURL: '/api/JMask/User/uploadAvatar',
  },
  token: '',
  statusCode: {
    SUCCESS: 20000,
    ERROR: 50008
  },
  notLogin: true
}

export default store
