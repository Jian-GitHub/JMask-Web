const store = {
  urls: {
    //处理识别图片
    dealImgURL: '/api/JMask/DealData/dealImgWeb',
    //获取用户密码
    getPassWordURL: '/api/JMask/User/getPassWordByToken',
    //退出登录
    userLogOutURL: '/api/JMask/User/logOut',
    //登录
    loginURL: '/api/JMask/WebLogin',
    //校验token
    checkTokenURL: '/api/JMask/checkToken',
    //注册
    registrationURL: '/api/JMask/Registration/registration',
    //检查用户名是否可用
    canUseUserNameURL: '/api/JMask/Registration/canUseUserName',
    //获取用户ID
    getUserIdURL: '/api/JMask/User/getUserIdByToken',
    //获取用户名
    getUserNameURL: '/api/JMask/User/getUserNameByToken',
    //获取用户信息 - id、name、avatarURL
    getUserInfoURL: '/api/JMask/User/getUserInfoByToken',
    //更新用户名
    updateUserNameURL: '/api/JMask/User/updateUserNameByToken',
    //更新密码
    updatePassWordURL: '/api/JMask/User/updateUserPassWord',
    //注销用户
    removeAccountURL: '/api/JMask/User/removeAccount',
    //上传头像
    uploadAvatarURL: '/api/JMask/User/uploadAvatar',
    //获取识别记录的单张图片的Base64编码
    getLogImgBase64URL: '/api/JMask/User/getLogImgBase64',
    //获取识别记录表
    getLogURL: '/api/JMask/User/getLog',
    //获取 App 与 Web 功能对比表
    getCompareAppWebURL: '/api/JMask/Data/CompareAppWeb',
    //获取JMask App信息 - 版本、日期
    getJMaskAppInfoURL: '/api/JMask/Data/JMaskAppInfo',
  },
  // token: '',
  statusCode: {
    SUCCESS: 20000,
    ERROR: 50008
  },
  // notLogin: true,
  // toPath: ''
}

export default store
