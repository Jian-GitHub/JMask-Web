<template>
  <!--
            src="https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/large.mp4"
            -->
  <div class="HomePage">
    <h1 id="JMaskMsg">JMask是一个基于AI神经网络自动识别口罩佩戴的系统。</h1>
    <div id="JMaskAIDiv">
      <video
          v-show="isShowVideo"
          id="JMaskAIVideo"
          src="/store/video/JMaskAIbackgroundvideo.MP4"
          muted playsinline autoplay loop>
      </video>
      <div id="the-chip">
        <svg id="JMaskAIChip" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <!--        <title>JMask AI</title>-->
          <g id="JMask-AI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect fill="#737373" opacity="0" x="0" y="0" width="500" height="500"></rect>
            <path
                d="M427.623311,7.50064404 C449.692152,7.54187174 458.327482,9.5633655 466.534283,13.821693 L466.534283,13.821693 L467.050184,14.0923149 C475.244672,18.4801358 481.501599,24.7185419 485.762935,32.6778566 L485.762935,32.6778566 L486.181698,33.4722522 C490.482053,41.7625932 492.5,50.4937301 492.5,73.0707282 L492.5,73.0707282 L492.5,426.929272 C492.5,449.512203 490.480992,458.241995 486.178307,466.534283 L486.178307,466.534283 L485.907685,467.050184 C481.519864,475.244672 475.281458,481.501599 467.322143,485.762935 L467.322143,485.762935 L466.527748,486.181698 C458.237407,490.482053 449.50627,492.5 426.929272,492.5 L426.929272,492.5 L73.0707282,492.5 C50.4877971,492.5 41.7580052,490.480992 33.4657165,486.178307 L33.4657165,486.178307 L32.9498164,485.907685 C24.7553276,481.519864 18.4984009,475.281458 14.2370652,467.322143 L14.2370652,467.322143 L13.8183024,466.527748 C9.56780318,458.333519 7.54770593,449.708866 7.50079332,427.678725 L7.50079332,427.678725 L7.50064404,72.3766893 C7.54187174,50.3078479 9.5633655,41.6725177 13.821693,33.4657165 L13.821693,33.4657165 L14.0923149,32.9498164 C18.4801358,24.7553276 24.7185419,18.4984009 32.6778566,14.2370652 L32.6778566,14.2370652 L33.4722521,13.8183024 C41.666481,9.56780316 50.2911344,7.54770591 72.3212753,7.50079332 L72.3212753,7.50079332 Z"
                stroke="#FFFFFF" stroke-width="15"></path>
            <rect
                id="MiddleBox" stroke="#979797" fill="#FFFFFF" x="40.5" y="142.5" width="420" height="216"></rect>
            <path
                d="M445,15 C467.09139,15 485,32.90861 485,55 L485,445 C485,467.09139 467.09139,485 445,485 L55,485 C32.90861,485 15,467.09139 15,445 L15,55 C15,32.90861 32.90861,15 55,15 L445,15 Z M96.12,217.74 L85.59,217.74 L85.59,260.85 C85.59,265.44 84.78,268.77 83.16,270.84 C81.54,272.91 78.93,273.99 75.42,273.99 C69.03,273.99 65.88,270.3 65.88,262.92 L65.88,260.94 L55.35,260.94 L55.35,263.01 C55.35,269.31 57.06,274.26 60.48,277.86 C63.81,281.46 68.76,283.26 75.24,283.26 C82.71,283.26 88.11,281.37 91.53,277.59 C94.59,273.99 96.12,268.59 96.12,261.21 L96.12,217.74 Z M210.24,234.21 C204.3,234.21 199.62,235.2 196.2,237.36 C192.15,239.7 189.63,243.48 188.64,248.61 L198.81,249.42 C199.35,246.99 200.7,245.19 202.68,244.02 C204.39,242.94 206.64,242.49 209.52,242.49 C216.18,242.49 219.51,245.46 219.51,251.58 L219.51,253.38 L209.34,253.65 C202.5,253.83 197.19,255.27 193.41,257.97 C189.27,260.76 187.29,264.81 187.29,270.03 C187.29,273.9 188.73,277.05 191.61,279.57 C194.4,282 198.18,283.26 203.04,283.26 C207.09,283.26 210.6,282.54 213.57,281.19 C216.18,279.93 218.43,278.22 220.23,275.88 L220.23,282 L229.77,282 L229.77,252.3 C229.77,246.63 228.33,242.31 225.45,239.34 C222.21,235.92 217.08,234.21 210.24,234.21 Z M258.12,234.21 C252.36,234.21 247.77,235.38 244.26,237.9 C240.66,240.24 238.95,243.57 238.95,247.89 C238.95,251.94 240.75,255.09 244.35,257.34 C246.6,258.78 250.47,260.13 255.96,261.39 C260.64,262.47 263.7,263.28 265.14,264 C267.84,265.26 269.19,266.97 269.19,269.13 C269.19,272.91 265.59,274.89 258.39,274.89 C254.97,274.89 252.54,274.26 251.01,273.18 C249.48,271.92 248.4,269.85 247.86,266.88 L237.87,266.88 C238.86,277.77 245.79,283.26 258.75,283.26 C272.7,283.26 279.72,278.31 279.72,268.41 C279.72,264.27 277.83,260.94 274.14,258.6 C271.62,256.89 267.66,255.45 262.44,254.19 C257.76,253.02 254.7,252.12 253.17,251.49 C250.65,250.41 249.48,249.06 249.48,247.62 C249.48,245.82 250.2,244.56 251.82,243.75 C253.17,242.94 255.24,242.58 257.94,242.58 C261.09,242.58 263.43,243.03 264.96,244.02 C266.4,244.92 267.48,246.63 268.2,248.97 L278.19,248.97 C277.11,239.07 270.36,234.21 258.12,234.21 Z M121.05,217.74 L108.72,217.74 L108.72,282 L119.25,282 L119.25,237.72 L119.61,237.72 L138.51,282 L147.6,282 L166.5,237.72 L166.86,237.72 L166.86,282 L177.39,282 L177.39,217.74 L165.06,217.74 L143.28,268.14 L142.92,268.14 L121.05,217.74 Z M298.08,216.48 L287.82,216.48 L287.82,282 L298.08,282 L298.08,265.71 L302.76,261.3 L319.05,282 L332.19,282 L309.78,254.73 L330.39,235.47 L317.16,235.47 L298.08,253.92 L298.08,216.48 Z M398.7,217.74 L386.73,217.74 L362.16,282 L373.41,282 L379.26,265.89 L406.17,265.89 L412.02,282 L423.27,282 L398.7,217.74 Z M440.1,217.74 L429.57,217.74 L429.57,282 L440.1,282 L440.1,217.74 Z M219.51,260.76 L219.51,263.1 C219.51,266.7 218.07,269.67 215.37,272.01 C212.67,274.26 209.34,275.43 205.38,275.43 C203.13,275.43 201.33,274.8 199.89,273.72 C198.45,272.64 197.82,271.29 197.82,269.67 C197.82,264.09 201.87,261.21 210.06,261.03 L219.51,260.76 Z M392.94,229.08 L403.02,257.25 L382.41,257.25 L392.58,229.08 L392.94,229.08 Z"
                id="JMaskText" stroke="#979797" fill="#000000"></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
function easeInCubic(x) {
  return x * x * x;
}
function easeInOutQuart(x) {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}
export default {
  name: "Home",
  mounted(){
    scroll(0,0);
  },
  created() {
    window.addEventListener('scroll', () => {
      let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      // console.log(scrolled);
      let msg = document.querySelector('#JMaskMsg');
      let JMaskAI = document.querySelector('#JMaskAIChip');
      let JMaskAIOut = document.querySelector('#the-chip');
      let MiddleBox = document.querySelector('#MiddleBox');


      if (!msg || !JMaskAI || !JMaskAIOut || !MiddleBox) {
        return;
      }

      //文字渐隐
      if (scrolled <= 0.1) {
        msg.style.opacity = (0.1 - scrolled) / 0.1;
        // msg.setAttribute('style', 'z-index: 10');
      } else {
        msg.style.opacity = 0;
        // msg.setAttribute('style', 'z-index: -10');
      }

      //AI芯片渐入
      if (scrolled <= 0.4 && scrolled >= 0.1) {
        // JMaskAI.style.opacity = easeInOutCirc((scrolled - 0.4) / 0.4);
        JMaskAI.style.opacity = easeInCubic(1 - (0.4 - scrolled) / 0.3);
        // console.log(JMaskAI.style.opacity)
        // console.log(easeInOutCirc(0.3))
      } else if (scrolled < 0.3) {
        JMaskAI.style.opacity = 0;
      } else {
        JMaskAI.style.opacity = 1;
      }

      //AI芯片放大
      if (scrolled >= 0.5) {
        JMaskAIOut.style.width = JMaskAIOut.style.height = document.documentElement.clientWidth * 10 * easeInOutQuart((scrolled - 0.5) / 0.5) + 'px';
        MiddleBox.style.opacity = (1 - scrolled) / 0.5;
        JMaskAIOut.style.backgroundColor = 'transparent';
        this.isShowVideo = true;
      } else {
        this.isShowVideo = false;
        JMaskAIOut.style.backgroundColor = 'black';
        JMaskAIOut.style.width = JMaskAIOut.style.height = 200 + 'px';
        MiddleBox.style.opacity = 1
      }

      //AI芯片渐隐
      if (scrolled >= 0.8) {
        JMaskAIOut.style.opacity = (0.9 - scrolled) / 0.1;
      } else {
        JMaskAIOut.style.opacity = 1;
      }

      // if (msg.style.opacity <= 0) {
      //   //JMaskMsg_Opacity = （是否为-1？）scrolled (否：是否比scrolled小？) JMaskMsg_Opacity不变 （否）更新为更小的scrolled
      //   JMaskMsg_Opacity = (JMaskMsg_Opacity == -1) ? scrolled : (JMaskMsg_Opacity < scrolled) ? JMaskMsg_Opacity : scrolled;
      // }
      //
      // let JMaskMsg_Opacity_num = -1;
      // let JMaskAI_Scale_num = -1;
      //
      // //简介消息透明后，标记透明位置。AI晶片开始展示
      // if (msg.style.opacity <= 0 && JMaskMsg_Opacity != -1) {
      //   // JMaskMsg_Opacity = (JMaskMsg_Opacity == -1) ? scrolled : (JMaskMsg_Opacity < scrolled) ? JMaskMsg_Opacity : scrolled;
      //   JMaskMsg_Opacity_num = scrolled - JMaskMsg_Opacity;
      //   JMaskAI.style.opacity = myeaseInOutCubic(JMaskMsg_Opacity_num) * 30;
      // } else {
      //   JMaskAI.style.opacity = 0;
      // }
      //
      // if (JMaskAI.style.opacity >= 1) {
      //   //JMaskOut_Opacity = （是否为-1？）scrolled (否：是否比scrolled小？) JMaskMsg_Opacity不变 （否）更新为更小的scrolled
      //   JMaskOut_Opacity = (JMaskOut_Opacity == -1) ? scrolled : (JMaskOut_Opacity < scrolled) ? JMaskOut_Opacity : scrolled;
      // }
      // if (JMaskAI.style.opacity >= 1 && JMaskOut_Opacity != -1) {
      //   // JMaskAIOut_Scale = (JMaskAIOut_Scale == -1) ? scrolled : (JMaskAIOut_Scale < scrolled) ? JMaskAIOut_Scale : scrolled;
      //   JMaskAI_Scale_num = scrolled - JMaskOut_Opacity;
      //   JMaskAIOut.style.width = JMaskAIOut.style.height = document.documentElement.clientWidth * 30 * (JMaskAI_Scale_num) + 'px';
      //   MiddleBox.style.opacity = 1 - myeaseInOutCubic(JMaskAI_Scale_num) * 30;
      //   JMaskAIOut.style.boxShadow = '0px 0px 0px 100vw black, 0px 0px 0px 30px black inset';
      //   // this.isShow = true;
      //   // this.showVideo(true)
      // } else if (JMaskAI.style.opacity <= 0.8) {
      //   JMaskAIOut.style.boxShadow = '0px 0px 0px 100vw black, 0px 0px 0px 100px black inset';
      // }
      // if (JMaskAI.style.width >= 300 + 'px') {
      //   JMaskAI.style.opacity = myeaseInOutCubic(JMaskMsg_Opacity_num) * 30;
      // }
      //
      // if (JMaskAI.style.opacity <= 0) {
      //   JMaskAIOut.style.width = JMaskAIOut.style.height = 200 + 'px'
      // }
    })
  },
  data() {
    return {
      ok: false,
      msgOpacity: 1,
      isShowVideo: ref(false)
    }
  },
  methods: {
    clicked: function () {
      this.ok = !this.ok
    }
  }
}
</script>

<style scoped>
.HomePage {
  top: 0;
  background-color: black;
  width: 100%;
  z-index: -1;
  height: 200vh;
}

#JMaskMsg {
  padding-top: 25%;
  color: white;
  font-size: 3rem;
  text-align: center;
  background-color: transparent;
}

#JMaskAIDiv {
  position: sticky;
  top: 0;
  height: 100vh;
  /*width: 100vw;*/
  overflow: hidden;
  background-color: transparent;
  margin-top: 44px;
}

#JMaskAIVideo {
  height: 100vh;
  /*width: 100vw;*/
  position: relative;
  transform: translate(0%, 0);
}

#the-chip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 200px;
  min-height: 200px;
  box-shadow: 0 0 0 100vw black, 0 0 0 30px black inset;
  background-color: black;
}

#JMaskAIChip {
  opacity: 0;
}
</style>