<template>
  <el-main class="home">
    <el-container>
      <el-row>
        <el-col :xs="0" :sm="6"></el-col>
        <el-col :xs="24" :sm="18" class="main-area">
          <div class="main-text title">inż. arch.</div>
          <div class="main-text name">Edyta Sobieraj</div>
          <div class="main-text desc">Jestem studentką ostatniego roku architektury na Politechnice Poznańskiej. Zawodowo zajmuję się przede wszystkim grafiką 3D. Tworzę wizualizacje architektoniczne, a także teksturuję i optymalizuję modele pod VR. </div>
        </el-col>
      </el-row>
    </el-container>
    <el-container style="margin-top: calc(100vh - 500px);">
      <el-row>
        <el-col v-for="(asset, idx) in assets" :key="idx" :xs="24" :sm="24 / (assets.length || 1)" class="asset-area">
            <image-button :asset="asset" :projectId="asset.substring(0,1)"></image-button>
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

// </style>

// <style lang="scss">
  body {
    background-color: white;
  }

  .home {
    // display: flex;
    overflow: hidden;
    padding: 0;
    //background-color: black;
  }

  .main-area {
    padding-top: 250px;
  }

  .main-text {
    //position: absolute;
    color: black;
    text-align: left;
    //font-family: Lato;
  }
  .main-text.title {
    font-size: 2vw;
    margin-bottom: 20px;
    font-weight: lighter;
    animation: opacityHighToLow 1s ease-in;
  }

  .main-text.name {
    font-size: 7vw;
    margin-bottom: 20px;
    animation: opacityHighToLow 1s ease-in;
  }

   .main-text.desc {
    font-size: 3vw;
    animation: opacityHighToLow 1s ease-in;
  }

  @media (max-width: 768px) {

    .main-text {
      padding: 0 30px;

      &.title {
        font-size: 18px;
        animation: none;
      }

      &.name {
        font-size: 35px;
      }

      &.desc {
        font-size: 22px;
      }
    }

    .home .asset-area {
      height: 300px;
      padding: 5px 0;
    }

    .img-btn-area {
      padding: 5px 10px;
    }

  }

  @keyframes opacityHighToLow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
