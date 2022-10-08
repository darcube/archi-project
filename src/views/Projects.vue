<template>
  <div class="projects">
    <div class="asset-area">
      <el-row v-for="(row, idx) in assetsLayout" :key="idx">
        <el-col v-for="(col, idx) in row" :key="idx" :xs="24" :sm="col.sm">
          <image-button :asset="assets[col.project - 1]" :projectId="col.project" @handle-load="handleLoad"></image-button>
        </el-col>
      </el-row>
    </div>
  </div>
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
      assets: ['1/img0.png', '2/img0.png', '3/img0.png', '4/img0.png', '5/img0.png', '6/img0.png', '7/img0.png'],
      assetsLayout: [
        [
          { sm: 16, project: 1 },
          { sm: 8, project: 2 }
        ],
        [
          { sm: 12, project: 3 },
          { sm: 12, project: 4 }
        ],
        [
          { sm: 6, project: 5 },
          { sm: 12, project: 6 },
          { sm: 6, project: 7 }
        ]
      ],
      loading: true,
      imgLoaded: 0
      // asset: require('@/assets/main-1.jpg'),
    }
  },
  computed: {
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    handleLoad (todo) {
      this.imgLoaded++
      if (this.imgLoaded === this.assets.length) {
        this.loading = false
      }
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

<style lang="scss">

.loading-area {
  min-height: 100vh;
}

.asset-area {
  .el-row {
    padding-bottom: 10px;
  }

  .el-col {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    padding: 0 5px;
  }

  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

 @media (max-width: 768px) {
  .el-main {
    padding: 0;
  }

  .asset-area {
    min-height: 100%;
    .el-row {
      padding-bottom: 0;
    }
  }
 }

</style>
