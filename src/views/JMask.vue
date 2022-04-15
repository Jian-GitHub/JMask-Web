<template>
  <div class="JMaskPage">
    <div>
      <el-menu
          v-if="this.$router.currentRoute.value.path.toLowerCase() !== '/jmask/login' && this.$router.currentRoute.value.path.toLowerCase() !== '/jmask/registration'"
          id="menu"
          class="menu"
          :default-active="activeIndex"
          mode="horizontal"
          :background-color="backgroundColor"
          :text-color="textColor"
          :active-text-color="textColor"
          @select="handleSelect"
      >
        <el-menu-item id="JMaskMenuItem" index="1" style="margin-left: auto;transform: translateX(50px)">
          {{ JMaskTitleMenu.JMaskHomePage }}
        </el-menu-item>
        <el-menu-item index="2" style=";transform: translateX(50px)">
          {{ JMaskTitleMenu.JMaskOnline }}
        </el-menu-item>
        <el-menu-item index="3" style="margin-right: auto;transform: translateX(50px)">
          {{ JMaskTitleMenu.JMaskDownload }}
        </el-menu-item>

        <!--        <el-sub-menu index="4" style="float: right;">-->
        <!--          <template #title>-->
        <!--            <svg class="icon" width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"-->
        <!--                 data-v-365b8594="">-->
        <!--              <path fill="currentColor"-->
        <!--                    d="M288 320a224 224 0 10448 0 224 224 0 10-448 0zm544 608H160a32 32 0 01-32-32v-96a160 160 0 01160-160h448a160 160 0 01160 160v96a32 32 0 01-32 32z">-->
        <!--              </path>-->
        <!--            </svg>-->
        <!--          </template>-->
        <!--            <el-menu-item index="4-1" style="align-items: center;display: flex;justify-content: center;overflow: hidden">-->
        <!--              登录-->
        <!--            </el-menu-item>-->
        <!--            <el-menu-item index="4-2" style="align-items: center;display: flex;justify-content: center;overflow: hidden">-->
        <!--              注册-->
        <!--            </el-menu-item>-->
        <!--        </el-sub-menu>-->

        <!--        <span style="margin-right: 5px;font-size: 12px;float: right">登录 / 注册</span>-->
        <el-menu-item id="accountMenuItem" index="4" style=";display:flex;float: right;">
          <svg class="icon" width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
               data-v-365b8594="">
            <path fill="currentColor"
                  d="M288 320a224 224 0 10448 0 224 224 0 10-448 0zm544 608H160a32 32 0 01-32-32v-96a160 160 0 01160-160h448a160 160 0 01160 160v96a32 32 0 01-32 32z">
            </path>
          </svg>
        </el-menu-item>

        <!--        <el-menu-item index="3" :disabled="true">Info</el-menu-item>-->
      </el-menu>
    </div>
    <router-view id="view" @JMaskTitleMenuItem="JMaskTitleMenuItem"></router-view>
    <!--    <router-view></router-view>-->
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import router from "@/router";
// import {checkToken} from "@/api/api";
// import store from "@/store";
// // import {openInfoNotification} from "@/utils/Notification";

export default defineComponent({
  name: "JMask",
  computed: {},
  mounted() {
    document.querySelector('body').setAttribute('style', 'background-color: #333333')
    let scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width: 99px;height: 99px;overflow: scroll;position: absolute;top: -9999px;';
    document.body.appendChild(scrollDiv);
    this.scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.menu = document.querySelector('#menu');
  },
  data() {
    return {
      JMaskTitleMenu: {
        JMaskHomePage: 'JMask',
        JMaskOnline: window.localStorage.getItem("token") ? "在线使用" : '在线试用',
        JMaskDownload: '下载应用'
      },
      // JMaskPage : true
      backgroundColor: ref('#333333'),
      textColor: ref('#fff'),
      activeTextColor: ref('#ffd04b'),
      activeIndex: ref('1'),
      scrollbarWidth: ref(-1),
      menu: ref(null),
    }
  },
  methods: {
    handleSelect: function (key) {
      switch (key) {
        case '1':
          router.push({path: '/JMask/Home'})
          // if (this.menu != null) {
          //   this.menu.style.paddingRight = '0px';
          // }
          break;
        case '2':
          router.push({path: '/JMask/Online'});
          // if (this.menu != null) {
          //   this.menu.style.paddingRight = this.scrollbarWidth + 'px';
          // }
          break;
        case '3':
          router.push({path: '/JMask/Download'})
          // if (this.menu != null) {
          //   this.menu.style.paddingRight = this.scrollbarWidth + 'px';
          // }
          // openInfoNotification('提示', '下载功能暂未开放', true);
          break;
        case '4':
          router.push({path: '/JMask/Account/Manage'})
          // if (this.menu != null) {
          //   this.menu.style.paddingRight = this.scrollbarWidth + 'px';
          // }
          break;
      }
      // keyPath
      // console.log('key:' + key + '===' + 'keyPath: ' + keyPath)
    },
    JMaskTitleMenuItem(arg) {
      // console.log('接收')
      // console.log(arg.onLineItemName)
      this.JMaskTitleMenu.JMaskOnline = arg.onLineItemName
    }
  }
  // setup() {
  //   // const activeIndex = ref('1')
  //
  //   const handleSelect = (key, keyPath) => {
  //     switch (key) {
  //       case '1':
  //         router.push({path: '/JMask/Home'})
  //         break;
  //       case '2':
  //         router.push({path: '/JMask/Online'})
  //         break;
  //       case '3':
  //         break;
  //       case '4':
  //         break;
  //     }
  //     keyPath
  //     // console.log('key:' + key + '===' + 'keyPath: ' + keyPath)
  //   }
  //   // let backgroundColor = ref('#333333');
  //   // let textColor = ref('#fff')
  //   // let activeTextColor = ref('#ffd04b')
  //   return {
  //     // activeIndex,
  //     handleSelect,
  //     // backgroundColor,
  //     // textColor,
  //     // activeTextColor
  //   }
  // }
})
</script>

<style scoped>
.JMaskPage {
  /*background-color: #000;*/
  /*position: absolute;*/
  /*top: 0px;*/
  width: 100%;
  height: 100%;
  /*padding-top: 44px;*/
  font-family: PingFangSC-Regular, serif;
  z-index: -999999;
  /*box-sizing: border-box;*/
}

.menu {
  position: fixed;
  border-bottom-color: #333333;
  /*margin-right: auto;*/
  /*margin-left: auto;*/
  display: flex;
  width: 100%;
  top: 0;
  align-items: center;
  /*text-align: center;*/
  /*justify-content: center;*/
  height: 44px;
  overflow: hidden;
  z-index: 1001;
}

#view {
  /*margin-top: 44px;*/
  /*height: auto;*/
  /*background-color: black;*/
  width: 100%;
  z-index: -1;
}

</style>