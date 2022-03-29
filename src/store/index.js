const store = {
  urls: {
    dealImg: '/api/JMask/DealData/dealImgWeb',
    login: '/api/JMask/WebLogin',
    checkToken: '/api/JMask/checkToken',
    registration: '/api/JMask/Registration/registration',
    canUseUserName: '/api/JMask/Registration/canUseUserName'
  },
  token: '',
  statusCode: {
    SUCCESS: 20000,
    ERROR: 50008
  },
  notLogin: true
}

export default store
