<template>
  <el-footer height="50px" padding="20px">
    <div>Copyright &copy; {{ year }}</div>
  </el-footer>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style lang="scss">
  .el-footer {
    padding-top: 10px;
    text-align: left;
    width: 100%;
  }

</style>
