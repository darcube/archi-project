<template>
<el-container>
  <app-header />
  <el-main>
    <router-view />
  </el-main>
  <app-footer />
</el-container>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow-x: hidden;
}

.el-container {
  display: block;
}

#app {
  font-family: "Josefin Sans", Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.el-main {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}

@media (max-width: 768px) {
  .el-main {
    min-height: calc(100vh - var(--mobile-header-height) - var(--footer-height));
  }
}
</style>
