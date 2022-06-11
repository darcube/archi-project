<template>
  <el-main class="projects">
    <div class="asset-area">
    <el-row :gutter="10">
      <el-col :span="16"><div><image-button :asset="assets[0]" :projectId="1"></image-button></div></el-col>
      <el-col :span="8"><div><image-button :asset="assets[1]"></image-button></div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"><div><image-button :asset="assets[2]"></image-button></div></el-col>
      <el-col :span="12"><div><image-button :asset="assets[3]"></image-button></div></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6"><div><image-button :asset="assets[4]"></image-button></div></el-col>
      <el-col :span="12"><div><image-button :asset="assets[5]"></image-button></div></el-col>
      <el-col :span="6"><div><image-button :asset="assets[6]"></image-button></div></el-col>
    </el-row>
    </div>
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
      assets: ['1/img0.png', '2/img0.png', '3/img0.png', '1/img0.png', '2/img0.png', '3/img0.png', '3/img0.png']
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

<style lang="scss">

.asset-area {
  .el-row {
    padding-bottom: 10px;
  }

  .el-col {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

</style>
