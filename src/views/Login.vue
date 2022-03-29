<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
             label-position="left">

      <div class="title-container">
        <h3 class="title">登录页面</h3>
      </div>


      <div >
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
              v-model="loginForm.username"
              placeholder="Username"
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
                  d="M870.4 354.576H716.8v-42.88c0-72.32-26.464-193.304-204.8-193.304-185.16 0-204.8 135.048-204.8 193.296v42.888H153.6v-42.88C153.6 122.248 294.384 0 512 0c217.616 0 358.4 122.248 358.4 311.688v42.888z m-256 314.848c0-43.52-46.104-78.656-102.4-78.656-56.296 0-102.4 35.136-102.4 78.656 0 29.456 20.536 54.464 51.256 67.816v89.64c0 21.744 23 39.696 51.2 39.696 28.192 0 51.2-17.952 51.2-39.696V737.24c30.664-13.352 51.144-38.36 51.144-67.816zM1024 512v393.608c0 65.264-69.16 118.392-153.6 118.392H153.6C69.208 1024 0 970.872 0 905.608V512c0-65.224 69.16-118.392 153.6-118.392h716.8c84.44 0 153.6 53.168 153.6 118.392z"
                  p-id="1368"></path>
          </svg>
        </span>
          <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
<!--          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>-->
<!--            <svg t="1648359071583" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">-->
<!--              <path d="-->
<!--              M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3-7.7 16.2-7.7 35.2 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z" p-id="2174"></path>-->
<!--              <path d="M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z-->
<!--" p-id="2175"></path>-->
<!--            </svg>-->
<!--            <svg-icon name="no_eye"/>-->
            <el-image style="position: absolute;width: 20px;height: 20px;" :src="passwordType === 'password' ? '/store/images/no_eye.svg' : '/store/images/eye.svg'"/>
        </span>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
                   @click.enter.prevent="handleLogin">登录
        </el-button>

<!--        <div class="tips">-->
<!--          <span style="margin-right:20px;">用户名: admin</span>-->
<!--          <span style="margin-right:20px;"> 密码: 123456</span>-->
<!--          <span>权限: 管理员（所有页面）</span>-->
<!--        </div>-->
<!--        <div class="tips">-->
<!--          <span style="margin-right:35px;">用户名: user</span>-->
<!--          <span style="margin-right:20px;">密码: 123456</span>-->
<!--          <span>权限: 普通用户（无采集页）</span>-->
<!--        </div>-->
      </div>
      <span class="tips" style="font-weight:bold;float:right">没有账号？<a style="font-weight:bold;color: #6fd1ff" href="/JMask/Registration">点我注册</a></span>

    </el-form>
  </div>
</template>

<script>
import {login} from "@/api/api";
import router from "@/router";
import store from "@/store"

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('请输入用户名\nPlease enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码位数需大于5位\nThe password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePassword}]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          login(this.loginForm).then((response => {
            if (response.data.code === store.statusCode.SUCCESS && response.data.data.token != '' && response.data.data.token != null) {
              store.token = response.data.data.token;
              this.loading = false
              localStorage.setItem('token', JSON.stringify(response.data.data.token));
              let toURL = window.localStorage.getItem('toPath') ? window.localStorage.getItem('toPath') : '/JMask/Home';
              if (window.localStorage.getItem('toPath')) {
                window.localStorage.removeItem('toPath');
              }
              router.push({path: toURL});
            } else {
              alert('登录失败')
              this.loading = false
            }
          }))
        } else {
          alert('登录错误\nerror submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!--<style scoped>-->
<!--/* 修复input 背景不协调 和光标变色 */-->
<!--/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */-->

<!--/*$bg:#283443;*/-->
<!--/*$light_gray:#fff;*/-->
<!--/*$cursor: #fff;*/-->

<!--/*@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {*/-->
<!--/*  .login-container .el-input input {*/-->
<!--/*    color: $cursor;*/-->
<!--/*  }*/-->
<!--/*}*/-->
<!--/*.login-container .el-input input {*/-->
<!--/*    color: #fff;*/-->
<!--/*}*/-->
<!--/*    !* reset element-ui css *!*/-->
<!--/*.login-container {*/-->
<!--/*  &#45;&#45;bg:#283443;*/-->
<!--/*  &#45;&#45;light_gray:#fff;*/-->
<!--/*  &#45;&#45;cursor: #fff;*/-->
<!--/*  .el-input {*/-->
<!--/*    display: inline-block;*/-->
<!--/*    height: 47px;*/-->
<!--/*    width: 85%;*/-->

<!--/*    .input {*/-->
<!--/*      background: transparent;*/-->
<!--/*      border: 0px;*/-->
<!--/*      -webkit-appearance: none;*/-->
<!--/*      border-radius: 0px;*/-->
<!--/*      padding: 12px 5px 12px 15px;*/-->
<!--/*      color: var(&#45;&#45;light_gray);*/-->
<!--/*      height: 47px;*/-->
<!--/*      caret-color: var(&#45;&#45;cursor);*/-->

<!--/*      .-webkit-autofill {*/-->
<!--/*        box-shadow: 0 0 0px 1000px var(&#45;&#45;bg) inset !important;*/-->
<!--/*        -webkit-text-fill-color: var(&#45;&#45;cursor) !important;*/-->
<!--/*      }*/-->
<!--/*    }*/-->
<!--/*  }*/-->

<!--/*  .el-form-item {*/-->
<!--/*    border: 1px solid rgba(255, 255, 255, 0.1);*/-->
<!--/*    background: rgba(0, 0, 0, 0.1);*/-->
<!--/*    border-radius: 5px;*/-->
<!--/*    color: #454545;*/-->
<!--/*  }*/-->
<!--/*}*/-->
<!--</style>-->

<style scoped>
.login-container .el-input input {
  color: #fff;
}

/* reset element-ui css */
.login-container {
  /*--bg: #283443;*/
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
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: var(--light_gray);
  height: 47px;
  caret-color: var(--cursor);
}

.-webkit-autofill {
  box-shadow: 0 0 0px 1000px var(--bg) inset !important;
  -webkit-text-fill-color: var(--cursor) !important;
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

.login-container {
  /*--bg: #2d3a4b;*/
  --bg: #333333;
  --dark_gray: #889aa4;
  --light_gray: #eee;

  min-height: 100%;
  width: 100%;
  background-color: var(--bg);
  overflow: hidden;
}

.login-form {
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
  margin: 0px auto 40px auto;
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
