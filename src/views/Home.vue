<template>
  <el-main class="home">
    <el-container>
      <el-row>
        <el-col :xs="0" :sm="1" :md="3" :lg="6"></el-col>
        <el-col :xs="24" :sm="22" :md="19" :lg="14" class="main-area">
          <div class="main-text title">inż. arch.</div>
          <div class="main-text name">Edyta Sobieraj</div>
          <div class="main-text desc">Jestem studentką ostatniego roku architektury na Politechnice Poznańskiej. Zawodowo zajmuję się przede wszystkim grafiką 3D. Tworzę wizualizacje architektoniczne, a także teksturuję i optymalizuję modele pod VR. </div>
        </el-col>
        <el-col :xs="0" :sm="1" :md="2" :lg="4"></el-col>
      </el-row>
    </el-container>
    <el-container style="margin-top: calc(100vh - 500px);">
      <el-row>
        <el-col v-for="(asset, idx) in assets" :key="idx" :xs="24" :sm="24 / (assets.length || 1)" class="asset-area">
            <image-button :asset="asset" :projectId="parseInt(asset.substring(0,1))"></image-button>
        </el-col>
      </el-row>
    </el-container>
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageButton from '@/components/ImageButton.vue'

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
    padding-top: 160px;
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
    font-weight: lighter;
    animation: opacityHighToLow 1s ease-in;
    line-height: 1.15;
  }

  @media (max-width: 1920px) {
    .main-text {

      &.title {
        font-size: 2vw;
      }

      &.name {
        font-size: 5vw;
      }

      &.desc {
        font-size: 2.30vw;
      }
    }
  }

  @media (max-width: 1400px) {
    .main-text {

      &.title {
        font-size: 2.3vw;
      }

      &.name {
        font-size: 5.995vw;
      }

      &.desc {
        font-size: 2.77vw;
      }
    }
  }

  @media (max-width: 1200px) {
    .main-text {

      &.title {
        font-size: 2.851vw;
      }

      &.name {
        font-size: 6.7955vw;
      }

      &.desc {
        font-size: 3.77vw;
      }
    }
  }

  @media (max-width: 992px) {
    .main-text {

      &.title {
        font-size: 2.851vw;
      }

      &.name {
        font-size: 6.7955vw;
      }

      &.desc {
        font-size: 3.73vw;
      }
    }
  }

  @media (max-width: 768px) {

    .main-text {
      padding: 0 30px;

      &.title {
        font-size: 2.851vw;
        animation: none;
      }

      &.name {
        font-size: 9.9975vw;
      }

      &.desc {
        font-size: 3.73vw;
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

  @media (max-width: 576px) {
    .main-text {

      &.title {
        font-size: 4.377vw;
      }

      &.name {
        font-size: 12.579vw;
      }

      &.desc {
        font-size: 5.25vw;
      }
    }
  }

  @media (max-width: 480px) {
    .main-text {

      &.title {
        font-size: 4.377vw;
      }

      &.name {
        font-size: 12.579vw;
      }

      &.desc {
        font-size: 6.25vw;
      }
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
