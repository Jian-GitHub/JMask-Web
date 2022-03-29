<template>
  <div id="OnlinePage">
    <div id="content">

      <div id="left-content" v-loading="loading">
        <!--        <div>-->
        <!--        你好,这是左。-->
        <!--        </div>-->
        <el-upload
            v-show="isShow"
            class="el-upload"
            :action="dealImg"
            list-type="picture-card"
            :auto-upload="true"
            :before-upload="beforeAvatarUpload"
            :on-success="onSuccess"
        >
          <template #default>
            <el-icon>
              <plus/>
            </el-icon>
          </template>
          <template #file="{ file }">
            <div>
              <el-image class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
              <span class="el-upload-list__item-actions">
          <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
          >
        <el-icon><zoom-in/></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
          >
            <el-icon><download/></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
          >
            <el-icon><delete/></el-icon>
          </span>
        </span>
            </div>
          </template>
        </el-upload>

        <el-image v-show="!isShow" class="upload-img"
                  style="width:550px;height:320px;"
                  fit="scale-down"
                  :src="dialogImageUrl"
                  alt=""
        />

        <el-dialog v-model="dialogVisible">
          <el-image fit="contain" width="100%" :src="dialogImageUrl" alt=""/>
        </el-dialog>
      </div>


      <div id="right-content" :v-loading="loading">
<!--        你好,这是右。-->
<!--        <el-image-->
<!--            class="upload-img"-->
<!--            style="width:550px;height:320px;"-->
<!--            fit="scale-down"-->
<!--            src="/store/images/noImg.svg"></el-image>-->
        <el-image
            class="upload-img"
            style="width:550px;height:320px;"
            fit="scale-down"
            :src="resultImgData"></el-image>
      </div>

    </div>


  </div>
</template>

<script>
import {Plus, ZoomIn, Download, Delete} from '@element-plus/icons-vue'
import {ref} from "vue";
import store from "@/store"

export default {
  name: "Online",
  components: {
    Plus,
    ZoomIn,
    Download,
    Delete,
  },
  data() {
    return {
      dealImg: store.urls.dealImg,
      fileURL: ref(null),
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      isShow: true,
      loading: false,
      resultImgData: '/store/images/noImg.svg',
    }
  },
  methods: {
    onSuccess(response, file, fileList) {
      fileList
      if(response === ""){
        this.resultImgData = '/store/images/error.svg';
        this.dialogImageUrl = '';
      }else {
        // console.log(response);
        this.resultImgData = 'data:image/jpg;base64,' + response;
        this.dialogImageUrl = file.url;
      }
      this.isShow = false;
      this.loading = false;
    },
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      console.log(file.url);
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    },
    beforeAvatarUpload(file) {
      // this.dialogImageUrl = file.url;
      // console.log(file.raw.url)
      this.loading = true;
      const isJPG = file.type === 'image/jpeg';// || file.type === 'image/png'
      const isLt10M = file.size / 1024 / 1024 < 10

      if (!isJPG) {
        this.$message.error('请上传jpg图片')
        this.loading = false;
        return false;
      }
      if (!isLt10M) {
        this.$message.error('请上传小于10MB的图片')
        this.loading = false;
        return false;
      }
      // let fd = new FormData();//通过form数据格式来传
      // fd.append("file", file); //传文件
      // this.axios.post("http://loacalhost:8081/JMask/DealData/dealImgWeb",fd).then((data) => {
      //   console.log(data);
      // })

      return isJPG && isLt10M
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

.el-upload {
  width: 100%;
  height: 100%;
  /*margin-left: 20px;*/
  align-items: center;
  display: flex;
  justify-content: center;
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