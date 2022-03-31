<template>
  <div class="UserPage">

    <div class="innerUserPage">
      <div class="headTitle">
        <span class="JMaskID">
          JMask ID
        </span>
        <el-button class="logOutButton" @click="logOut" type="primary" size="small" round>退出登录</el-button>
      </div>

      <hr style="height:1px;border:none;border-top:1px solid #555555;margin-top: 15px"/>

      <!--      左面板-->
      <div style="padding-top: 30px;width: 19vw;float: left;text-align: left;height: 50vh">
        <div style="margin-left: 10px;margin-top: 10px;">
          <el-upload
              class="avatar-uploader"
              style="width: 25%"
              :action="this.uploadAvatarURL"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :data="uploadAvatarParams"
              title="点击上传头像"
          >
            <el-avatar class="userAvatar" :size="80" :src="avatarURL">
              <span v-if="avatarURL == ''">{{ userName }}</span>
              <img
                  v-if="avatarURL != ''"
                  :src="avatarURL"
              />
            </el-avatar>
          </el-upload>

          <div style="margin-top: 5px">
            <div>
              <span class="userName">
                {{ userName }}
              </span>
            </div>
            <div>
              <span class="userID" :title="userName+'的ID'">
                {{ userID }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!--      右面板-->
      <div style="margin-left: auto;padding-top: 30px;width: 40vw;text-align: left;height: 50vh">

        <div style="margin-top: 20px">
          <span style="color: black;font-weight: bold;font-size: 25px">
            登录和安全
          </span>
        </div>

        <!--        卡片-->
        <div style="padding-top: 20px;">
<!--          第一行-->
          <div style="display: flex;text-align: left">
            <!--        账户卡片-->
            <el-button class="card" color="whitesmoke" plain @click="openUpdateUserNameDialog">
              <span>
                账户
              </span>
              <br/>
              <span style="color: grey;font-size: 12px">
                用于更新您的用户名
              </span>
            </el-button>

            <!--          密码卡片-->
            <el-button class="card" color="whitesmoke" plain @click="openUpdatePasswordDialog">
              <span>
                密码
              </span>
              <br/>
              <span style="color: grey;font-size: 12px">
                用于更新您的登录密码
              </span>
            </el-button>
          </div>
<!--          第二行-->
          <div style="margin-top: auto">
            <!--          注销卡片-->
            <el-button class="card" style="" color="whitesmoke" plain @click="openRemoveAccountDialog">
          <span>
            注销
          </span>
              <br/>
              <span style="color: grey;font-size: 12px">
            永久删除您的所有数据
          </span>
            </el-button>
          </div>

        </div>
      </div>
    </div>

    <!--    用户信息修改对话框-->
    <el-dialog v-model="updateUserNameDialogVisible" title="" width="43vw" center
               :show-close="showClose" :close-on-click-modal="closeOnClickModal"
    >
      <div style="position: absolute;margin-top: -55px;margin-left: -10px">
        <el-button type="text" @click="cancelNewUserName">
          <svg style="color: dimgray" width="15" height="15" t="1648606672924" class="icon" viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg" p-id="1476">
            <path fill="black"
                  d="M887.2 774.2 624.8 510.8l263-260c10.8-10.8 10.8-28.4 0-39.2l-74.8-75.2c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L512 395.6 249.8 136.6c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L136 211.8c-10.8 10.8-10.8 28.4 0 39.2l263 260L136.8 774.2c-5.2 5.2-8.2 12.2-8.2 19.6 0 7.4 2.8 14.4 8.2 19.6l74.8 75.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2L512 626.2l261.4 262.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2l74.8-75.2c5.2-5.2 8.2-12.2 8.2-19.6C895.4 786.4 892.4 779.4 887.2 774.2z"
                  p-id="1477">
            </path>
          </svg>
        </el-button>
      </div>

      <div class="dialogBody">

        <div>
          <span class="accountText">
            账户
          </span>
        </div>

        <div class="dialog-footer">
          <div style="color: black;font-weight: bold;font-size: 18px">
            <span>更改用户名</span>
          </div>
          <div style="margin-top: 25px;width: 70%;float: left;">
            <el-form ref="newUserNameForm" :model="newUserNameForm" :rules="newUserNameRules" auto-complete="on"
                     label-position="left" @submit.prevent>
              <el-form-item prop="newUserName">
                <el-input
                    class="input"
                    ref="newUserName"
                    v-model="newUserNameForm.newUserName"
                    maxlength="15"
                    placeholder="新用户名"
                    show-word-limit
                    name="newUserName"
                    type="text"
                    tabindex="1"
                    auto-complete="on"
                    @keydown.enter="submitNewUserName"
                />
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="footer" style="width:100%;display: flex;padding-top: 10px;height: 50px;">
        <div style="min-width: 50%">
          <el-button
              @click="cancelNewUserName"
              color="lightgrey"
              style="color: lightgrey;background-color: lightgrey;font-weight: bold;margin-right: auto;margin-left: 0"
          >
            <span style="color: black">
              取消
            </span>
          </el-button>
        </div>
        <div style="min-width: 50%;text-align: right">
          <el-button
              color="#4364BF"
              style="margin-left: auto;margin-right: 10px"
              @click="submitNewUserName"
              :loading="loading"
          >
            <span style="color: black;font-weight: bold">
              更新
            </span>
          </el-button>
        </div>
      </div>
      <!--      <template #footer>-->
      <!--       -->
      <!--      </template>-->
    </el-dialog>
    <!--    密码修改对话框-->
    <el-dialog v-model="updatePassWordDialogVisible" title="" width="43vw" center
               :show-close="showClose" :close-on-click-modal="closeOnClickModal"
    >
      <div style="position: absolute;margin-top: -55px;margin-left: -10px">
        <el-button type="text" @click="cancelNewPassWord">
          <svg style="color: dimgray" width="15" height="15" t="1648606672924" class="icon" viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg" p-id="1476">
            <path fill="black"
                  d="M887.2 774.2 624.8 510.8l263-260c10.8-10.8 10.8-28.4 0-39.2l-74.8-75.2c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L512 395.6 249.8 136.6c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L136 211.8c-10.8 10.8-10.8 28.4 0 39.2l263 260L136.8 774.2c-5.2 5.2-8.2 12.2-8.2 19.6 0 7.4 2.8 14.4 8.2 19.6l74.8 75.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2L512 626.2l261.4 262.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2l74.8-75.2c5.2-5.2 8.2-12.2 8.2-19.6C895.4 786.4 892.4 779.4 887.2 774.2z"
                  p-id="1477">
            </path>
          </svg>
        </el-button>
      </div>

      <div class="dialogBody">

        <div>
          <span class="accountText">
            密码
          </span>
        </div>

        <div class="dialog-footer">
          <div style="color: black;font-weight: bold;font-size: 18px">
            <span>更改密码</span>
          </div>
          <div style="margin-top: 25px;width: 70%;float: left;">
            <el-form ref="newPassWordForm" :model="newPassWordForm" :rules="newPassWordRules" auto-complete="on"
                     label-position="left" @submit.prevent>
              <el-form-item prop="oldPassWord">
                <el-input
                    class="input"
                    ref="oldPassWord"
                    v-model="newPassWordForm.oldPassWord"
                    maxlength="15"
                    placeholder="当前密码"
                    :type="oldPassWordType == true ? 'password' : 'text'"
                    show-word-limit
                    name="oldPassWord"
                    tabindex="1"
                    auto-complete="on"
                    @keydown.enter="submitNewPassWord"
                />
                <span class="show-pwd" @click="showPwd(1)">
                  <el-image style="position: absolute;width: 20px;height: 20px;"
                            :src="oldPassWordType == true ? '/store/images/no_eye.svg' : '/store/images/eye.svg'"/>
                </span>
              </el-form-item>
              <el-form-item prop="newPassWord">
                <el-input
                    class="input"
                    ref="newPassWord"
                    v-model="newPassWordForm.newPassWord"
                    maxlength="15"
                    placeholder="新密码"
                    :type="newPassWordType == true ? 'password' : 'text'"
                    show-word-limit
                    name="newPassWord"
                    tabindex="2"
                    auto-complete="on"
                    @keydown.enter="submitNewPassWord"
                />
                <span class="show-pwd" @click="showPwd(2)">
                  <el-image style="position: absolute;width: 20px;height: 20px;"
                      :src="newPassWordType == true ? '/store/images/no_eye.svg' : '/store/images/eye.svg'"/>
                </span>
              </el-form-item>
              <el-form-item prop="confirmPassWord">
                <el-input
                    class="input"
                    ref="confirmPassWord"
                    v-model="newPassWordForm.confirmPassWord"
                    maxlength="15"
                    placeholder="确认新密码"
                    :type="confirmPassWordType == true ? 'password' : 'text'"
                    show-word-limit
                    name="confirmPassWord"
                    tabindex="3"
                    auto-complete="on"
                    @keydown.enter="submitNewPassWord"
                />
                <span class="show-pwd" @click="showPwd(3)">
                  <el-image style="position: absolute;width: 20px;height: 20px;"
                            :src="confirmPassWordType == true ? '/store/images/no_eye.svg' : '/store/images/eye.svg'"/>
                </span>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="footer" style="width:100%;display: flex;padding-top: 10px;height: 50px;">
        <div style="min-width: 50%">
          <el-button
              @click="cancelNewPassWord"
              color="lightgrey"
              style="color: lightgrey;background-color: lightgrey;font-weight: bold;margin-right: auto;margin-left: 0"
          >
            <span style="color: black">
              取消
            </span>
          </el-button>
        </div>
        <div style="min-width: 50%;text-align: right">
          <el-button
              color="#4364BF"
              style="margin-left: auto;margin-right: 10px"
              @click="submitNewPassWord"
              :loading="loading"
          >
            <span style="color: black;font-weight: bold">
              更新
            </span>
          </el-button>
        </div>
      </div>
      <!--      <template #footer>-->
      <!--       -->
      <!--      </template>-->
    </el-dialog>
    <!--    注销账号对话框-->
    <el-dialog v-model="removeAccountDialogVisible" title="" width="43vw" center
               :show-close="showClose" :close-on-click-modal="closeOnClickModal"
    >
      <div style="position: absolute;margin-top: -55px;margin-left: -10px">
        <el-button type="text" @click="cancelRemoveAccount">
          <svg style="color: dimgray" width="15" height="15" t="1648606672924" class="icon" viewBox="0 0 1024 1024"
               xmlns="http://www.w3.org/2000/svg" p-id="1476">
            <path fill="black"
                  d="M887.2 774.2 624.8 510.8l263-260c10.8-10.8 10.8-28.4 0-39.2l-74.8-75.2c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L512 395.6 249.8 136.6c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L136 211.8c-10.8 10.8-10.8 28.4 0 39.2l263 260L136.8 774.2c-5.2 5.2-8.2 12.2-8.2 19.6 0 7.4 2.8 14.4 8.2 19.6l74.8 75.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2L512 626.2l261.4 262.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2l74.8-75.2c5.2-5.2 8.2-12.2 8.2-19.6C895.4 786.4 892.4 779.4 887.2 774.2z"
                  p-id="1477">
            </path>
          </svg>
        </el-button>
      </div>

      <div class="dialogBody">

        <div>
          <span class="accountText">
            注销
          </span>
        </div>

        <div class="dialog-footer">
          <div style="color: black;font-weight: bold;font-size: 18px">
            <span>注销您的账号, 提交后无法撤销</span>
          </div>
          <div style="margin-top: 25px;width: 70%;float: left;">
            <el-form ref="removeAccountForm" :model="removeAccountForm" :rules="removeAccountRules" auto-complete="on"
                     label-position="left" @submit.prevent>
              <el-form-item prop="userName">
                <el-input
                    class="input"
                    ref="userName"
                    v-model="removeAccountForm.userName"
                    maxlength="15"
                    placeholder="用户名"
                    name="userName"
                    tabindex="1"
                    auto-complete="on"
                    @keydown.enter="submitRemoveAccount"
                />
              </el-form-item>
              <el-form-item prop="passWord">
                <el-input
                    class="input"
                    ref="passWord"
                    v-model="removeAccountForm.passWord"
                    maxlength="15"
                    placeholder="密码"
                    :type="newPassWordType == true ? 'password' : 'text'"
                    name="passWord"
                    tabindex="2"
                    auto-complete="on"
                    @keydown.enter="submitRemoveAccount"
                />
                <span class="show-pwd" @click="showPwd(2)">
                  <el-image style="position: absolute;width: 20px;height: 20px;"
                      :src="newPassWordType == true ? '/store/images/no_eye.svg' : '/store/images/eye.svg'"/>
                </span>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="footer" style="width:100%;display: flex;padding-top: 10px;height: 50px;">
        <div style="min-width: 50%">
          <el-button
              @click="cancelRemoveAccount"
              color="lightgrey"
              style="color: lightgrey;background-color: lightgrey;font-weight: bold;margin-right: auto;margin-left: 0"
          >
            <span style="color: black">
              取消
            </span>
          </el-button>
        </div>
        <div style="min-width: 50%;text-align: right">
          <el-button
              color="#4364BF"
              style="margin-left: auto;margin-right: 10px"
              @click="submitRemoveAccount"
              :loading="loading"
          >
            <span style="color: black;font-weight: bold">
              提交
            </span>
          </el-button>
        </div>
      </div>
      <!--      <template #footer>-->
      <!--       -->
      <!--      </template>-->
    </el-dialog>

  </div>
</template>

<script>
import store from "@/store";
import {
  checkUserName,
  getUserInfoAPI,
  getUserPassWordAPI,
  removeAccountAPI,
  updateUserNameAPI,
  updateUserPassWordAPI
} from "@/api/api";
import {ref} from "vue";
import router from "@/router";
import base64Encode from "@/utils/Base64";
import CryptoJS from 'crypto-js/crypto-js'
import {openSuccessNotification} from "@/utils/Notification"


export default {
  name: "User",
  created() {
    this.getUserInfo();
  },
  data() {
    const validateNewUsername = (rule, value, callback) => {
      if (value.length < 2 || value.length > 15) {
        callback(new Error('用户名需在2至15位之间'))
      } else if (value == this.hasUserName) {
        callback(new Error('用户名已存在'))
        this.hasUserName = false;
      } else {
        callback()
      }
    }
    const validateUsername = (rule, value, callback) => {
      if (value.length < 2 || value.length > 15) {
        callback(new Error('用户名需在2至15位之间'))
      }else if(value == this.removeAccountInputErrorUserName){
        callback(new Error('账户或密码有误'))
      } else {
        callback()
      }
      if (value != this.removeAccountInputErrorUserName){
        this.removeAccountInputErrorPassWord = null;
      }
    }
    const validateOldPassword = (rule, value, callback) => {
      // console.log(value)
      // console.log(value == this.errorPassWord)
      if (value.length < 8 || value.length > 15) {
        callback(new Error('密码需在8位与15位之间'))
      } else if(value == this.errorPassWord){
        // console.log("密码不正确")
        callback(new Error('密码错误'))
      }else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 8 || value.length > 15) {
        callback(new Error('密码需在8位与15位之间'))
      }else if(value == this.removeAccountInputErrorPassWord){
        callback(new Error('账户或密码有误'))
      }else {
        callback()
      }
      if (value != this.removeAccountInputErrorPassWord){
        this.removeAccountInputErrorUserName = null;
      }
    }
    const validateConfirmPassword = (rule, value, callback) => {
      if (value.length < 8 || value.length > 15) {
        callback(new Error('密码需在8位与15位之间'))
      } else if (value.toString() !== this.newPassWordForm.newPassWord) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      userName: '',
      loading: ref(false),
      oldPassWordType: true,
      confirmPassWordType: true,
      newPassWordType: true,
      uploadAvatarURL: store.urls.uploadAvatarURL,
      avatarURL: '',
      userID: '',
      hasUserName: '',
      errorPassWord: '',
      removeAccountInputErrorUserName: null,
      removeAccountInputErrorPassWord: null,
      updateUserNameDialogVisible: ref(false),
      showClose: ref(false),
      closeOnClickModal: ref(false),
      updatePassWordDialogVisible: ref(false),
      removeAccountDialogVisible: ref(false),
      uploadAvatarParams: {
        token: JSON.parse(window.localStorage.getItem('token'))
      },
      newUserNameForm: {
        newUserName: ''
      },
      newUserNameRules: {
        newUserName: [{required: true, trigger: 'blur', validator: validateNewUsername}],
      },
      newPassWordForm: {
        oldPassWord: '',
        newPassWord: '',
        confirmPassWord: ''
      },
      newPassWordRules: {
        oldPassWord: [{required: true, trigger: 'blur', validator: validateOldPassword}],
        newPassWord: [{required: true, trigger: 'blur', validator: validatePassword}],
        confirmPassWord: [{required: true, trigger: 'blur', validator: validateConfirmPassword}]
      },
      removeAccountForm: {
        userName: '',
        passWord: ''
      },
      removeAccountRules: {
        userName: [{required: true, trigger: 'blur', validator: validateUsername}],
        passWord: [{required: true, trigger: 'blur', validator: validatePassword}],
      },
    }
  },
  methods: {
    logOut() {
      window.localStorage.removeItem('token');
      router.push({path: '/'})
    },
    getUserInfo() {
      getUserInfoAPI().then((response) => {
        if (response.data.code === store.statusCode.SUCCESS) {
          this.avatarURL = response.data.data.avatarURL;
          this.userID = response.data.data.id;
          this.userName = response.data.data.userName;
        } else {
          alert(response.data.data.error);
        }
      })
    },
    openUpdateUserNameDialog() {
      this.loading = false;
      this.newUserNameForm.newUserName = '';
      this.updateUserNameDialogVisible = true;
      // console.log('changeAccount')
    },
    openUpdatePasswordDialog() {
      this.newPassWordForm.oldPassWord = '';
      this.newPassWordForm.newPassWord = '';
      this.newPassWordForm.confirmPassWord = '';
      this.loading = false;
      this.updatePassWordDialogVisible = true;
    },
    openRemoveAccountDialog() {
      // openInfoNotification('提示', '注销功能暂未开放');
      this.removeAccountForm.userName = '';
      this.removeAccountForm.passWord = '';
      this.loading = false;
      this.removeAccountDialogVisible = true;
    },
    cancelNewPassWord() {
      this.updatePassWordDialogVisible = false;
      this.newPassWordForm.oldPassWord = '';
      this.newPassWordForm.newPassWord = '';
      this.newPassWordForm.confirmPassWord = '';
      this.newPassWordType = true;
      this.oldPassWordType = true;
      this.confirmPassWordType = true;
    },
    submitNewPassWord() {
      // console.log('修改密码')
      this.loading = true;
      this.$refs.newPassWordForm.validate(valid => {
        if (valid) {
          getUserPassWordAPI().then((response) => {
            if (response.data.code === store.statusCode.SUCCESS){
              let rightPassWord = String(response.data.data.passWord);
              let time = String(response.data.data.time);
              let inputPassWord = String(CryptoJS.HmacSHA512(this.newPassWordForm.oldPassWord, time));
              if (inputPassWord !== rightPassWord){
                this.errorPassWord = this.newPassWordForm.oldPassWord;
                this.$refs.newPassWordForm.validate(valid => {valid});
              }else{
                // console.log('当前密码正确，可修改')
                updateUserPassWordAPI(base64Encode(String(CryptoJS.HmacSHA512(this.newPassWordForm.newPassWord, time)))).then((responses) => {
                  if (responses.data.code === store.statusCode.SUCCESS){
                    this.newPassWordForm.oldPassWord = '';
                    this.newPassWordForm.newPassWord = '';
                    this.newPassWordForm.confirmPassWord = '';
                    this.newPassWordType = true;
                    this.oldPassWordType = true;
                    this.confirmPassWordType = true;
                    openSuccessNotification('成功', '新密码已更新');
                    this.updatePassWordDialogVisible = false;
                    // alert('修改成功');
                  }else {
                    alert('修改失败')
                  }
                })
              }
              // base64Encode()
              // console.log(response.data.data);
            }else{
              alert('服务器错误')
            }
          })
        }
      })
      this.loading = false;
    },
    submitNewUserName() {
      this.loading = true;
      this.$refs.newUserNameForm.validate(valid => {
        if (valid) {
          checkUserName(base64Encode(this.newUserNameForm.newUserName)).then((response) => {
            this.hasUserName = this.newUserNameForm.newUserName
            if (!response.data) {
              this.$refs.newUserNameForm.validate(valid => {valid});
              return false;
            } else {
              updateUserNameAPI(this.newUserNameForm.newUserName).then((response) => {
                if (response.data.code === store.statusCode.SUCCESS){
                  this.getUserInfo();
                  openSuccessNotification('成功', '新用户名已更新');
                  this.updateUserNameDialogVisible = false;
                  this.hasUserName = '';
                }else {
                  alert('修改失败')
                }
              });
            }
          })
        } else {
          console.log('不可用')
        }
      })
      this.loading = false;
    },
    cancelNewUserName() {
      this.updateUserNameDialogVisible = false;
    },
    showPwd(passwordIndex) {
      if(passwordIndex == 1){
        this.oldPassWordType = !this.oldPassWordType;
      }else if(passwordIndex == 2) {
        this.newPassWordType = !this.newPassWordType;
      }else if(passwordIndex == 3){
        this.confirmPassWordType = !this.confirmPassWordType;
      }
    },
    submitRemoveAccount() {
      this.loading = true;
      // console.log('提交注销')
      this.$refs.removeAccountForm.validate(valid => {
        if (valid) {

          getUserPassWordAPI().then((response) => {

            // console.log('获取密码')
            // console.log(response.data.code)
            if (response.data.code === store.statusCode.SUCCESS) {
              let rightPassWord = String(response.data.data.passWord);
              let time = String(response.data.data.time);
              let inputPassWord = String(CryptoJS.HmacSHA512(this.removeAccountForm.passWord, time));
              // console.log(inputPassWord !== rightPassWord)
              if (inputPassWord !== rightPassWord) {
                this.removeAccountInputErrorUserName = this.removeAccountForm.userName;
                this.removeAccountInputErrorPassWord = this.removeAccountForm.passWord;
                this.$refs.removeAccountForm.validate(valid => {
                  valid
                });
              } else {
                removeAccountAPI(this.removeAccountForm.userName, this.removeAccountForm.passWord, base64Encode(inputPassWord)).then((response) => {
                  if (response.data.code === store.statusCode.SUCCESS) {
                    openSuccessNotification('成功', '您的账号已注销');
                    window.localStorage.removeItem('toPath');
                    window.localStorage.removeItem('token');
                    store.token = '';
                    this.removeAccountInputErrorUserName = null;
                    this.removeAccountInputErrorPassWord = null;
                    this.removeAccountForm.userName = '';
                    this.removeAccountForm.passWord = '';
                    this.removeAccountDialogVisible = false;
                    router.push({path: '/'})
                  }else if(response.data.data.error == '用户信息错误') {
                    // console.log('用户信息错误')
                    this.removeAccountInputErrorUserName = this.removeAccountForm.userName;
                    this.removeAccountInputErrorPassWord = this.removeAccountForm.passWord;
                    this.$refs.removeAccountForm.validate(valid => {
                      valid
                    });
                  }
                })
              }
              // console.log('当前密码正确，可修改')
            }else {
              alert('服务器错误')
            }

          })
          this.$refs.removeAccountForm.validate(valid => {
            valid
          });
        }
      })
      this.loading = false;
    },
    cancelRemoveAccount() {
      this.removeAccountDialogVisible = false;
      this.removeAccountForm.userName = '';
      this.removeAccountForm.passWord = '';
      this.newPassWordType = true;
      this.removeAccountInputErrorUserName = null;
      this.removeAccountInputErrorPassWord = null;
      // console.log('取消注销')
    },
    beforeAvatarUpload(file) {
      this.loading = true;
      this.isShow = false;
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt10M = file.size / 1024 / 1024 < 10

      if (!isJPG) {
        this.$message.error('请上传jpg或png格式图片')
        this.loading = false;
        return false;
      }
      if (!isLt10M) {
        this.$message.error('请上传小于10MB的图片')
        this.loading = false;
        return false;
      }

      return isJPG && isLt10M
    },
    handleAvatarSuccess(response) {
      if (response.code === store.statusCode.SUCCESS) {
        openSuccessNotification('成功', '头像已更新');
        this.avatarURL = '';
        this.getUserInfo();
      }
    }
  }
}
</script>

<style scoped>
.UserPage {
  height: 100vh;
  width: 100vw;
  background-color: white;
  overflow: hidden;
  min-height: 600px;
  min-width: 1500px;
}

.headTitle {
  padding-top: 60px;
  text-align: left;
}

.logOutButton {
  vertical-align: middle;
  float: right;
  margin-right: 10px;
  box-shadow: 2px 2px 5px grey;
}

.innerUserPage {
  width: 60vw;
  margin-left: 20vw;
  margin-right: 20vw;
}

.userAvatar {
  cursor: pointer;
  user-select: none;
  box-shadow: 2px 2px 5px grey;
}

.JMaskID {
  color: black;
  font-size: 25px;
  font-weight: bold;
  vertical-align: middle;
  margin-left: 10px;
  text-shadow: 2px 2px 5px grey;
}

.userName {
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.userID {
  color: gray;
  font-weight: bold;
  font-size: 12px;
}

.card {
  background-color: white;
  background-image: linear-gradient(to right, white , whitesmoke);
  /*margin-left: auto;*/
  margin-right: auto;
  margin-top: 15px;
  min-width: 18vw;
  min-height: 100px;
  width: 40%;
  height: 60%;
  border-radius: 10px;
  box-shadow: 0 0 50px white;
  /*flex 布局*/
  display: flex;
  /*!*实现垂直居中*!*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
  box-shadow: 2px 2px 10px lightgray;
  cursor: pointer;
  user-select: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

/deep/ .el-dialog.el-dialog--center {
  border-radius: 9px;
  box-shadow: 0px 0px 50px grey;
  min-width: 500px;
  min-height: 300px;
}

/deep/ .el-overlay-dialog {
  position: absolute;
  z-index: 1002;
  background-color: rgb(255, 255, 255, 0.5);
  padding-top: -50px;
}

/deep/ .dialogBody {
  /*child-align: top;*/
  height: 40vh;
  /*flex 布局*/
  /*display: flex;*/
  /*!*实现垂直居中*!*/
  /*align-items: center;*/
  /*实现水平居中*/
  justify-content: center;
  /*background-color: red;*/
  /*vertical-align: middle;*/
}

.dialog-footer {
  /*display: flex;*/
  margin-top: 50px;
}

.accountText {
  margin-top: -25px;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
}

/deep/ .el-input__inner {
  border-radius: 10px;
  min-height: 45px;
  max-height: 45px;
}

/deep/ .el-form-item__content {
  border-radius: 10px;
  min-height: 45px;
  max-height: 45px;
}
.show-pwd {
  position: absolute;
  right: 30px;
  top: 30%;
  font-size: 12px;
  color: var(--dark_gray);
  cursor: pointer;
  user-select: none;
}
/deep/ .el-image__inner{
  background-color: white;
}
</style>