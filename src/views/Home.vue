<template>
  <el-main class="home">
    <div class="main-text top">ARCHITEKT</div>
    <div class="main-text bottom">Edyta Sobieraj</div>
    <el-container style="margin-top: calc(100vh - 40px);">
      <el-row>
        <el-col  v-for="(asset, idx) in assets" :key="idx" :span="24 / (assets.length || 1)" class="asset-area">
            <image-button :asset="asset"></image-button>
        </el-col>
        <!-- <el-col :span="8"><div class="img-area"><img style="width: 100%" src="../assets/main-1.jpg"><span class="line"></span><span class="line-text">{{lineText}}</span></div></el-col>
        <el-col :span="8"><img style="width: 100%" src="../assets/main-2.jpg"></el-col>
        <el-col :span="8"><img style="width: 100%" src="../assets/main-3.jpg"></el-col> -->
      </el-row>
    </el-container>
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageButton from '@/components/ImageButton.vue'
// import HelloWorld from '../components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    ImageButton
  },
  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      lineText: 'Szczegóły',
      assets: ['1/img0.png', '2/img0.png', '3/img0.png']
      // asset: require('@/assets/main-1.jpg'),
    }
  },
  computed: {
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  }
})
</script>

<style scoped lang="scss">
.asset-area {
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
}

</style>

<style lang="scss">
  body {
    background-color: white;
  }
  .home {
    // display: flex;
    overflow: hidden;
    padding: 0;
    //background-color: black;
  }

  .main-text {
    position: absolute;
    color: black;
    font-family: Lato;
  }
  .main-text.top {
    font-size: 13vw;
    top: 30%;
    left: 2%;
    animation: 1s ease-out 0s 1 slideInFromTop;
  }

  .main-text.bottom {
    font-size: 10vw;
    top: 50%;
    right: 10%;
    animation: 1s ease-out 0s 1 slideInFromBottom;
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-30%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(30%);
    }
    100% {
      transform: translateY(0);
    }
  }

</style>
