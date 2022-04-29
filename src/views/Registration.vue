<template>
  <div class="registration-container">
    <el-form ref="registrationForm" :model="registrationForm" :rules="registrationRules" class="registration-form"
             auto-complete="on"
             label-position="left">

      <div class="title-container">
        <h3 class="title">注册页面</h3>
      </div>


      <div>
        <el-form-item prop="username">
        <span class="svg-container">
<!--          <svg-icon icon-class="user"/>-->
          <!--          <el-icon><user-filled /></el-icon>-->
          <svg class="icon" width="30px" height="30px" viewBox="110 -250 1200 1024" xmlns="http://www.w3.org/2000/svg"
               data-v-ba633cb8="">
            <path fill="currentColor"
                  d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"></path>
          </svg>
        </span>
          <el-input
              ref="username"
              v-model="registrationForm.username"
              placeholder="请输入用户名"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
        <span class="svg-container">
<!--          <svg-icon icon-class="password"/>-->
          <svg width="30px" height="30px" class="icon" viewBox="0 -250 1500 1024" xmlns="http://www.w3.org/2000/svg"
               data-v-ba633cb8="">
            <path fill="currentColor"
                  d="M870.4 354.576H716.8v-42.88c0-72.32-26.464-193.304-204.8-193.304-185.16 0-204.8 135.048-204.8 193.296v42.888H153.6v-42.88C153.6 122.248 294.384 0 512 0c217.616 0 358.4 122.248 358.4 311.688v42.888z m-256 314.848c0-43.52-46.104-78.656-102.4-78.656-56.296 0-102.4 35.136-102.4 78.656 0 29.456 20.536 54.464 51.256 67.816v89.64c0 21.744 23 39.696 51.2 39.696 28.192 0 51.2-17.952 51.2-39.696V737.24c30.664-13.352 51.144-38.36 51.144-67.816zM1024 512v393.608c0 65.264-69.16 118.392-153.6 118.392H153.6C69.208 1024 0 970.872 0 905.608V512c0-65.224 69.16-118.392 153.6-118.392h716.8c84.44 0 153.6 53.168 153.6 118.392z"></path>
          </svg>
        </span>
          <el-input
              :key="passwordType"
              ref="password"
              v-model="registrationForm.password"
              :type="passwordType"
              placeholder="请输入密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter="handleRegistration"
          />
          <span class="show-pwd" @click="showPwd(this.passwordType)">
            <el-image style="position: absolute;width: 20px;height: 20px;"
                      :src="passwordType === 'password' ? '/store/images/no_eye.svg' : '/store/images/eye.svg'"/>
        </span>
        </el-form-item>
        <el-form-item prop="confirmPassword">
        <span class="svg-container">
<!--          <svg-icon icon-class="password"/>-->
          <svg width="30px" height="30px" class="icon" viewBox="0 -250 1500 1024" xmlns="http://www.w3.org/2000/svg"
               data-v-ba633cb8="">
            <path fill="currentColor"
                  d="M870.4 354.576H716.8v-42.88c0-72.32-26.464-193.304-204.8-193.304-185.16 0-204.8 135.048-204.8 193.296v42.888H153.6v-42.88C153.6 122.248 294.384 0 512 0c217.616 0 358.4 122.248 358.4 311.688v42.888z m-256 314.848c0-43.52-46.104-78.656-102.4-78.656-56.296 0-102.4 35.136-102.4 78.656 0 29.456 20.536 54.464 51.256 67.816v89.64c0 21.744 23 39.696 51.2 39.696 28.192 0 51.2-17.952 51.2-39.696V737.24c30.664-13.352 51.144-38.36 51.144-67.816zM1024 512v393.608c0 65.264-69.16 118.392-153.6 118.392H153.6C69.208 1024 0 970.872 0 905.608V512c0-65.224 69.16-118.392 153.6-118.392h716.8c84.44 0 153.6 53.168 153.6 118.392z"></path>
          </svg>
        </span>
          <el-input
              :key="confirmPasswordType"
              ref="confirmPassword"
              v-model="registrationForm.confirmPassword"
              :type="confirmPasswordType"
              placeholder="请确认密码"
              name="confirmPassword"
              tabindex="3"
              auto-complete="on"
              @keyup.enter="handleRegistration"
          />
          <span class="show-pwd" @click="showPwd(2)">
            <el-image style="position: absolute;width: 20px;height: 20px;"
                      :src="confirmPasswordType === 'password' ? '/store/images/no_eye.svg' : '/store/images/eye.svg'"/>
          </span>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
                   @click.enter.prevent="handleRegistration">注册
        </el-button>

      </div>
      <span class="tips" style="font-weight:bold;float:right">
        已有账号？
        <a style="font-weight:bold;color: #6fd1ff;cursor: pointer;user-select: none;" @click="$router.replace({path: '/JMask/Login'})">点我登录</a>
      </span>

    </el-form>
  </div>
</template>

<script>
import store from "@/store"
import {registration} from "@/api/api";
import {checkUserName} from "@/api/api";
import router from "@/router";
import base64Encode from "@/utils/Base64"
import CryptoJS from 'crypto-js/crypto-js'

export default {
  name: 'Registration',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 2 || value.length > 15) {
        callback(new Error('用户名需在2至15位之间'))
      } else if (value === this.hasUserName) {
        callback(new Error('用户名已存在'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 8 || value.length > 15) {
        callback(new Error('密码需在8位与15位之间'))
      } else {
        callback()
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      // if (value.length < 10) {
      if (value.length < 8 || value.length > 15) {
        callback(new Error('密码需在8位与15位之间'))
      } else if (value !== this.registrationForm.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      hasUserName: false,
      registrationForm: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      registrationRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePassword}],
        confirmPassword: [{required: true, trigger: 'blur', validator: validateConfirmPassword}]
      },
      loading: false,
      passwordType: 'password',
      confirmPasswordType: 'password',
      redirect: undefined
    }
  },
  methods: {
    showPwd(passwordIndex) {
      if (passwordIndex !== 2 ? this.passwordType === 'password' : this.confirmPasswordType === 'password') {
        passwordIndex !== 2 ? this.passwordType = '' : this.confirmPasswordType = '';
      } else {
        passwordIndex !== 2 ? this.passwordType = 'password' : this.confirmPasswordType = 'password';
      }
      this.$nextTick(() => {
        passwordIndex !== 2 ? this.$refs.password.focus() : this.$refs.password2.focus();
      })
    },
    // getNowFormatDate() {
    //   var date = new Date();
    //   var seperator1 = "-";
    //   var seperator2 = ":";
    //   var month = date.getMonth() + 1;
    //   var strDate = date.getDate();
    //   var hours = date.getHours()
    //   if (month >= 1 && month <= 9) {
    //     month = "0" + month;
    //   }
    //   if (hours >= 1 && hours <= 9) {
    //     hours = "0" + hours;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //     strDate = "0" + strDate;
    //   }
    //   var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    //       + " " + hours + seperator2 + date.getMinutes()
    //       + seperator2 + date.getSeconds();
    //   return currentdate;
    // },
    handleRegistration() {
      // if (this.registrationForm.username != '' && this.registrationForm.password != ''){
      //
      // }
      // let test = CryptoJS.HmacSHA512(this.registrationForm.password, 'key');
      // console.log(test.toString())
      // console.log('时间: ')
      // console.log(this.getNowFormatDate())
      this.$refs.registrationForm.validate(valid => {
        // alert(valid)
        // console.log('valid')
        // console.log(valid)
        if (valid) {
          this.loading = true;
          // console.log('check')
          checkUserName(base64Encode(this.registrationForm.username)).then((response) => {
            // console.log('response');
            // console.log(response.data);
            this.hasUserName = response.data
            if (!response.data){
              alert('用户名不可用')
              this.loading = false;
              return false;
            }else {
              // console.log('执行')
              let time = String(Math.round(new Date() / 1000));
              // console.log(time)
              registration(
                  // this.registrationForm
                  {
                    userName: base64Encode(this.registrationForm.username),
                    password: base64Encode(CryptoJS.HmacSHA512(this.registrationForm.password, time)),
                    time: base64Encode(time)
                  }
              ).then((response) => {
                if (response.data.code === store.statusCode.SUCCESS) {
                  this.loading = false
                  // localStorage.setItem('token', JSON.stringify(response.data.data.token));
                  // let toURL = window.localStorage.getItem('toPath') ? window.localStorage.getItem('toPath') : '/JMask/Home';
                  // if (window.localStorage.getItem('toPath')) {
                  //   window.localStorage.removeItem('toPath');
                  // }
                  alert('注册成功')
                  router.push({path: '/JMask/Login'});
                  return true;
                } else {
                  alert('注册失败')
                  this.loading = false
                }
              })
            }
          })
        } else {
          alert('注册错误')
          this.loading = false;
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.registration-container .el-input input {
  color: #fff;
}

.registration-container {
  --bg: #333333;
  --light_gray: #fff;
  --cursor: #fff;
}

.el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}

.input {
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 12px 5px 12px 15px;
  color: var(--light_gray);
  height: 47px;
  caret-color: var(--cursor);
}

.-webkit-autofill {
  box-shadow: 0 0 0 1000px var(--bg) inset !important;
  -webkit-text-fill-color: var(--cursor) !important;
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

.registration-container {
  --bg: #333333;
  --dark_gray: #889aa4;
  --light_gray: #eee;

  min-height: 100%;
  width: 100%;
  background-color: var(--bg);
  overflow: hidden;
}

.registration-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}

.first-of-type {
  margin-right: 16px;
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: var(--dark_gray);
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}

.title-container {
  position: relative;
}

.title {
  font-size: 26px;
  color: var(--light_gray);
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: bold;
}

.show-pwd {
  position: absolute;
  right: 45px;
  top: 30%;
  font-size: 12px;
  color: var(--dark_gray);
  cursor: pointer;
  user-select: none;
}
</style>
