<template>
  <div class="DownloadPage">
    <div class="innerDownloadPage">
      <div class="headTitle">
        <span class="JMaskAPP">
          JMask APP
        </span>
        <el-button class="downloadButton" @click="downloadTitleButton" style="cursor: initial;user-select: none"
                   type="primary" size="small" round>下载
        </el-button>
      </div>

      <hr style="height:1px;border:none;border-top:1px solid #555555;margin-top: 15px"/>

      <!--      左面板-->
      <div class="leftContent">
        <div style="margin-left: 10px;margin-top: 10px;">
          <el-avatar class="JMaskAppIcon" shape="square" :size="140" :src="JMaskAppIconURL">
            <img :src="JMaskAppIconURL"/>
          </el-avatar>

          <div style="margin-top: 5px">
            <div>
              <span class="versionText">
                版本: {{JMaskVersion}}
<!--                2022.4.1-->
                <br/>
                {{JMaskDate}}
<!--                2022年4月1日-->
              </span>
            </div>
            <!--            <div>-->
            <!--              <span class="userID" :title="userName+'的ID'">-->
            <!--                {{ userID }}-->
            <!--              </span>-->
            <!--            </div>-->
          </div>
        </div>
      </div>

      <!--      右面板-->
      <div style="margin-left: 25vw;padding-top: 30px;width: 50vw;text-align: left;height: auto">

        <div style="margin-top: 0px">
          <span style="color: black;font-weight: bold;font-size: 35px">
            下载 JMask APP
          </span>
        </div>

        <!--        切换按钮组-->
        <div style="margin-top: 15px;height: 100px;margin-left: 15px;display: flex">
          <div>
            <el-button id="macOSButton" @click="downloadButton('macOSButton')" type="text"
                       style="font-size: 17px;font-weight:630">macOS
            </el-button>
            <hr id="macOSLine" style="height:1px;border:none;border-top:2px solid dodgerblue;margin-top: 0"/>
          </div>
          <div id="WindowsDiv" style="margin-left: 70px;">
            <el-button id="WindowsButton" @click="downloadButton('WindowsButton')" type="text"
                       style="color: darkgrey;font-size: 17px;font-weight: 630" size="large">Windows
            </el-button>
            <hr id="WindowsLine" style="height:1px;border:none;border-top:2px solid darkgrey;margin-top: 0"/>
          </div>
        </div>

        <!--        下载.dmg/exe按钮-->
        <div style="display: flex;margin-left: 10px;margin-top: -5px">

          <!--          <el-button type="primary" style="border-radius: 20px 0px 0px 20px;width: 80px;height: 40px">-->
          <!--            下载-->
          <!--          </el-button>-->
          <!--          <el-button type="primary" style="border-radius: 0px 20px 20px 0px;margin-left: 2px;width: 80px;height: 40px" @click="download">-->
          <!--            <span style="margin-left: -5px;font-size: 15px">-->
          <!--              .exe-->
          <!--            </span>-->
          <!--            <el-icon id="box" style="margin-left: 5px;">-->
          <!--              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">-->
          <!--                <path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z">-->
          <!--              </path>-->
          <!--              </svg>-->
          <!--            </el-icon>-->
          <!--          </el-button>-->

          <el-button @click="downloadAPP" type="primary" style="width: 130px;height: 40px;" round>
            <span style="font-weight: bold;font-size: 15px">
              下&nbsp;载&nbsp;&nbsp;&nbsp;
              <span v-if="downloadTypes.macOS">.dmg</span>
              <span v-else-if="downloadTypes.Windows">.exe</span>
            </span>
          </el-button>

        </div>

        <!--        <div style="margin-top: 100px;text-align: right">-->
        <!--          <span style="font-size: 20px;font-weight: bold">-->
        <!--            JMask APP-->
        <!--          </span>-->
        <!--          <span style="font-weight: bold;font-size: 20px;margin-left: 50px">-->
        <!--            JMask Web-->
        <!--          </span>-->
        <!--        </div>-->

        <!--        APP Web 比较-->
        <el-row style="margin-top: 30px">
          <el-col :span="11">
            <div class="grid-content bg-purple"></div>
          </el-col>

          <el-col :span="8" style="text-align: center">
             <span style="font-size: 20px;font-weight: bold">
            JMask APP
          </span>
          </el-col>
          <el-col :span="5">
            <div style="text-align: center">
            <span style="font-weight: bold;font-size: 20px;">
            JMask Web
          </span>
            </div>
          </el-col>
        </el-row>
        <!--        分割线-->
        <hr style="height:1px;border:none;border-top:1px solid #555555;margin-top: 15px"/>
        <div style="margin-top: 17px">

          <el-row v-for="compare in compareAppWeb" :key="compare" style="height: 40px;">
            <el-col :span="11">
              <div class="grid-content bg-purple"><span
                  style="font-size: 15px;font-weight: bold;margin-left: 20px;color: gray">{{ compare.item }}</span>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="grid-content bg-purple-light" style="text-align: center">
                <el-icon v-if="compare.canApp" style="font-size: 20px">
                  <svg fill="#367FF6" t="1648968645037" class="icon" viewBox="0 0 1413 1024"
                       xmlns="http://www.w3.org/2000/svg" p-id="4767" width="200" height="200">
                    <path
                        d="M1381.807797 107.47394L1274.675044 0.438669 465.281736 809.880718l-322.665524-322.714266L35.434718 594.152982l430.041982 430.041982 107.084012-107.035271-0.243705-0.292446z"
                        p-id="4768"></path>
                  </svg>
                </el-icon>
              </div>
            </el-col>

            <el-col :span="5">
              <div class="grid-content bg-purple-light" style="text-align: center">
                <el-icon v-if="compare.canWeb" style="font-size: 20px">
                  <!--                  <svg viewBox="0 0 24 24" class="wt-icon wt-icon_size_m table-icon-check">-->
                  <!--                    <path d="M8.416 20.414l-6.123-6.123 1.414-1.414 4.709 4.709L21.209 4.793l1.414 1.414L8.416 20.414z"></path>-->
                  <!--                  </svg>-->
                  <svg fill="#367FF6" t="1648968645037" class="icon" viewBox="0 0 1413 1024"
                       xmlns="http://www.w3.org/2000/svg" p-id="4767" width="200" height="200">
                    <path
                        d="M1381.807797 107.47394L1274.675044 0.438669 465.281736 809.880718l-322.665524-322.714266L35.434718 594.152982l430.041982 430.041982 107.084012-107.035271-0.243705-0.292446z"
                        p-id="4768"></path>
                  </svg>
                </el-icon>
              </div>
            </el-col>

          </el-row>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {openInfoNotification} from '../utils/Notification'
import {getCompareAppWebAPI, getJMaskAppInfoAPI} from "@/api/api";
import store from "@/store"
// import router from "@/router";

export default {
  name: "Download",
  created() {
    this.fetchData();
    // this.downloadButton('macOSButton');
    // document.getElementById('macOSLine').style.borderTop = '2px solid dodgerblue';
  },
  data() {
    return {
      JMaskAppIconURL: '/store/images/JMaskAppIcon.png',
      JMaskVersion: '',
      JMaskDate: '',
      downloadMacURL: '',
      downloadWinURL: '',
      rotate: true,
      // compareAppWeb: [
      //   {
      //     item: '手动选择上传图片',
      //     canApp: true,
      //     canWeb: true
      //   },
      //   {
      //     item: '自动拍摄上传图片',
      //     canApp: true,
      //     canWeb: false
      //   },
      //   {
      //     item: '上传头像',
      //     canApp: true,
      //     canWeb: true
      //   },
      //   {
      //     item: '修改用户名',
      //     canApp: true,
      //     canWeb: true
      //   },
      //   {
      //     item: '修改密码',
      //     canApp: true,
      //     canWeb: true
      //   },
      //   {
      //     item: '注销账号',
      //     canApp: true,
      //     canWeb: true
      //   },
      // ],
      compareAppWeb: [],
      downloadTypes: {
        macOS: true,
        Windows: false
      }
    }
  },
  methods: {
    fetchData() {
      getJMaskAppInfoAPI().then((response) => {
            if (response.data.code === store.statusCode.SUCCESS) {
              this.JMaskAppIconURL = response.data.data.JMaskAppInfo.iconURL;
              this.JMaskVersion = response.data.data.JMaskAppInfo.version;
              this.JMaskDate = response.data.data.JMaskAppInfo.date;
              this.downloadMacURL = response.data.data.JMaskAppInfo.downloadMacURL;
              this.downloadWinURL = response.data.data.JMaskAppInfo.downloadWinURL;
            }
      })
      getCompareAppWebAPI().then((response) => {
        if (response.data.code === store.statusCode.SUCCESS) {
          this.compareAppWeb = response.data.data.compareAppWeb
        }
      })
    },
    // download() {
    //   // // console.log('.')
    //   // let box = document.getElementById('box');
    //   // console.log(this.rotate)
    //   // this.rotate = !(this.rotate)
    //   // // box.onclick = function (){
    //   // box.style.transform = 'rotate(' + (this.rotate ? '0' : '180') + 'deg)';
    //   // // console.log('rotate(' + (this.rotate ? '0' : '180') + 'deg)')
    //   // // }
    // },
    downloadButton(downloadType) {
      this.downloadTypes.macOS = downloadType === 'macOSButton' ? true : false;
      this.downloadTypes.Windows = downloadType === 'macOSButton' ? false : true;
      document.getElementById(downloadType === 'macOSButton' ? 'macOSButton' : 'WindowsButton').style.color = 'dodgerblue';
      document.getElementById(downloadType === 'macOSButton' ? 'macOSLine' : 'WindowsLine').style.borderTop = '2px solid dodgerblue';
      document.getElementById(downloadType === 'macOSButton' ? 'WindowsButton' : 'macOSButton').style.color = 'darkgrey';
      document.getElementById(downloadType === 'macOSButton' ? 'WindowsLine' : 'macOSLine').style.borderTop = '2px solid darkgrey';
    },
    downloadTitleButton() {
      location.reload()
    },
    downloadAPP() {
      // openInfoNotification('提示', 'JMask APP 暂未开放下载');
      if (this.downloadTypes.macOS) {
        if (this.downloadMacURL == '') {
          openInfoNotification('提示', 'JMask APP Mac版 暂未开放下载');
          return;
        }
        // window.open(this.downloadMacURL)
        window.location.href = this.downloadMacURL;
        // router.push({path: this.downloadMacURL})
      }else if (this.downloadTypes.Windows) {
        if (this.downloadWinURL == '') {
          openInfoNotification('提示', 'JMask APP Windows版 暂未开放下载');
          return;
        }
        window.location.href = this.downloadWinURL;
        // window.open(this.downloadWinURL)
        // router.push({path: this.downloadWinURL})
      }
    }
  }
}
</script>

<style scoped>
.DownloadPage {
  /*margin-top: 44px;*/
  background-color: white;
  /*height: calc(100vh - 44px);*/
  min-height: 100vh;
  color: black;
}

.headTitle {
  padding-top: 60px;
  text-align: left;
}

.downloadButton {
  vertical-align: middle;
  float: right;
  margin-right: 5vw;
  box-shadow: 2px 2px 5px grey;
  width: 80px;
}

.innerDownloadPage {
  width: 80vw;
  margin-left: 10vw;
  margin-right: 10vw;
}

.JMaskAppIcon {
  /*cursor: pointer;*/
  user-select: none;
  box-shadow: 2px 2px 5px grey;
}

.JMaskAPP {
  color: black;
  font-size: 25px;
  font-weight: bold;
  vertical-align: middle;
  margin-left: 5vw;
  text-shadow: 2px 2px 5px grey;
}

.leftContent {
  padding-top: 30px;
  width: 20vw;
  float: left;
  text-align: left;
  margin-left: 5vw;
  height: auto;
}

.versionText {
  color: #5E5E5F;
  font-size: 17px;
}
</style>