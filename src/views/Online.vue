<template>
  <div id="OnlinePage">
    <div id="content">

      <div id="left-content" v-loading="loading">
        <!--        <div>-->
        <!--        你好,这是左。-->
        <!--        </div>-->
        <div>
          <el-upload
              v-show="isShow"
              class="uploadImg"
              :action="dealImg"
              list-type="picture-card"
              :auto-upload="true"
              :before-upload="beforeAvatarUpload"
              :on-success="onSuccess"
              :data="uploadParams()"
              accept=".jpg,.jpeg,.png,.heic"
          >
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
          <div v-show="isShow" class="tips">
            <span>请上传小于10M且为jpg/png/heic格式的人脸图片</span>
          </div>

          <div>
            <el-upload
                v-show="!isShow"
                ref="uploadRef"
                :action="dealImg"
                :show-file-list="false"
                :on-success="onSuccess"
                :before-upload="beforeAvatarUpload"
                :data="uploadParams()"
                title="重新上传"
                style="max-height: 320px;max-width: 550px;cursor: none;user-select: none;"
                accept=".jpg,.jpeg,.png,.heic"
            >
              <el-image
                  class="upload-img"
                  style="height: 320px;width: 550px;cursor: pointer;user-select: none;"
                  fit="scale-down"
                  :src="dialogImageUrl"
                  alt=""
              />
            </el-upload>
          </div>

        </div>
      </div>


      <div id="right-content">
        <!--        你好,这是右。-->
        <!--        <el-image-->
        <!--            class="upload-img"-->
        <!--            style="width:550px;height:320px;"-->
        <!--            fit="scale-down"-->
        <!--            src="/store/images/noImg.svg"></el-image>-->
        <el-image
            :v-loading="loading"
            class="upload-img"
            style="width:550px;height:320px;"
            fit="scale-down"
            :src="resultImgData"></el-image>
      </div>

    </div>


  </div>
</template>

<script>
import {ref} from "vue";
import store from "@/store"
import {openErrorNotification, openInfoNotification} from "@/utils/Notification";
import { Plus } from '@element-plus/icons-vue'
export default {
  name: "Online",
  components: {
    Plus
  },
  data() {
    return {
      dealImg: store.urls.dealImgURL,
      fileURL: ref(null),
      dialogImageUrl: '',
      disabled: false,
      isShow: true,
      loading: false,
      resultImgData: '/store/images/noImg.svg',
    }
  },
  methods: {
    uploadParams() {
      return {
        token: window.localStorage.getItem("token") ? JSON.parse(window.localStorage.getItem("token")) : ''
      };
    },
    onSuccess(response, file) {
      // fileList
      if (response.code === store.statusCode.SUCCESS) {
        this.resultImgData = 'data:image/jpg;base64,' + response.data.imageData;
        this.dialogImageUrl = file.raw.type === 'image/heic' ? 'data:image/jpg;base64,' + response.data.originImgData : URL.createObjectURL(file.raw)//file.url;
        // console.log(response.data.originImgData)
        // console.log(file.raw.type)
        // console.log("error" in response.data)
        // console.log(Object.prototype.hasOwnProperty.call(response.data, "error"))
        // console.log(response.data.error === undefined)
        if (Object.prototype.hasOwnProperty.call(response.data, "error")) {
          openInfoNotification('提示', response.data.error)
        }
      } else {
        // console.log(response);
        this.resultImgData = '/store/images/error.svg';
        this.dialogImageUrl = '';
        openErrorNotification('失败', response.data.error);
      }
      this.loading = false;
    },
    handleRemove(file) {
      console.log(file)
    },
    handleDownload(file) {
      console.log(file)
    },
    beforeAvatarUpload(file) {
      // this.dialogImageUrl = file.url;
      // console.log(file.raw.url)
      this.loading = true;
      this.isShow = false;
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isHEIC = file.type === 'image/heic';
      const isLt10M = file.size / 1024 / 1024 < 10

      // console.log(file.type)
      if (!isJPG && !isPNG && !isHEIC) {
        this.$message.error('请上传jpg/png/heic格式的图片')
        this.loading = false;
        this.isShow = true;
        return false;
      }
      if (!isLt10M) {
        this.$message.error('请上传小于10MB的图片')
        this.loading = false;
        this.isShow = true;
        return false;
      }
      // let fd = new FormData();//通过form数据格式来传
      // fd.append("file", file); //传文件
      // this.axios.post("http://loacalhost:8081/JMask/DealData/dealImgWeb",fd).then((data) => {
      //   console.log(data);
      // })

      return (isJPG || isPNG || isHEIC) && isLt10M
    },
  }
}
</script>

<style scoped>
#OnlinePage {
}

#content {
  /*margin-top: -44px;*/
  background-color: black;
  width: 100%;
  height: 100vh;
  /*height: 100%;*/
  align-items: center;
  display: flex;
  justify-content: center;

  --content-height: 60%;
  --content-width: 40%;
  --content-border-radius: 10px;
}

#right-content {
  margin-right: 5%;
  margin-left: auto;
  min-width: var(--content-width);
  min-height: var(--content-height);
  width: var(--content-width);
  height: var(--content-height);
  background: lightgray;
  border-radius: var(--content-border-radius);
  box-shadow: 0 0 50px white;
  align-items: center;
  display: flex;
  justify-content: center;
}

#left-content {
  margin-left: 5%;
  margin-right: auto;
  min-width: var(--content-width);
  min-height: var(--content-height);
  width: var(--content-width);
  height: var(--content-height);
  background: lightgray;
  border-radius: var(--content-border-radius);
  box-shadow: 0 0 50px white;
  /*flex 布局*/
  display: flex;
  /*!*实现垂直居中*!*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
}

#upload-img {
  margin-left: 5%;
  margin-right: auto;
  min-width: var(--content-width);
  min-height: var(--content-height);
  width: var(--content-width);
  height: var(--content-height);
  background: lightgray;
  border-radius: var(--content-border-radius);
  box-shadow: 0 0 50px white;
  /*flex 布局*/
  display: flex;
  /*!*实现垂直居中*!*/
  align-items: center;
  /*实现水平居中*/
  justify-content: center;
}

.el-image__inner {
  width: 300px;
  height: 300px;
}

.uploadImg {
  width: 100%;
  height: 100%;
  /*margin-left: 20px;*/
  align-items: center;
  display: flex;
  justify-content: center;
}

.tips {
  /*position: absolute;*/
  /*z-index: 99;*/
  color: dimgray;
  margin-top: 15px;
  font-weight: bold;
  font-size: 12px;
}

/*#closeButton {*/
/*  color: dimgray;*/
/*  z-index: 9999999999999999;*/
/*  float: right;*/
/*  margin-top: 0px;*/
/*  margin-bottom: auto;*/
/*  width: 15px;*/
/*  height: 15px;*/
/*  margin-left: auto;*/
/*  padding-right: 10px;*/
/*  !*padding-right: 20px;*!*/
/*  !*position: absolute;*!*/
/*}*/
</style>