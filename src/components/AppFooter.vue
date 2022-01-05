<template>
  <footer>
    <p>Copyright &copy; {{ year }}</p>
  </footer>
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
  footer {
    bottom: 0;
    position: absolute;
  }

</style>
