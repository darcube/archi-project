<template>
  <div class="home">
    <transition
      appear
      name="list-right"
    >
      <div class="rectangle right-rectangle"></div>
    </transition>
    <transition
      appear
      name="list-left"
    >
      <div class="rectangle left-rectangle"></div>
    </transition>
    <transition
      appear
      name="list-top"
    >
      <div class="rectangle top-rectangle"></div>
    </transition>
    <transition
      appear
      name="list-bottom"
    >
      <div class="rectangle bottom-rectangle"></div>
    </transition>
    <div class="main-text top">ARCHITEKT</div>
    <div class="main-text bottom">Anna Kowalska</div>
    <div class="main-projects">
      <img src="../assets/main-1.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '../components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
  },
  data () {
    return {
      window: {
        width: 0,
        height: 0
      }
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
  .home {
    display: flex;
    overflow: hidden;
    //background-color: black;

    .rectangle {
      background-color: black;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    .top-rectangle {
      width: 100px;
      height: 100%;
      left: 0;
      bottom: 0;
    }
    .left-rectangle {
      width: 100%;
      height: 600px;
      left: 0;
      bottom: 0;
    }
    .right-rectangle {
      width: 100%;
      height: 300px;
      right: 0;
      top: 0;
    }
    .bottom-rectangle {
      width: 300px;
      height: 100%;
      right: 0;
      top: 0;
    }
  }

  .main-text {
    position: absolute;
    color: white;
    font-family: Lato;
  }
  .main-text.top {
    font-size: 13vw;
    bottom: 30%;
    left: 2%;
  }
  .main-text.bottom {
    font-size: 10vw;
    bottom: 15%;
    right: 10%;
  }

.list-top-enter-from {
  transform: translate(0, -100%);
  opacity: .5;
}
.list-top-enter-active{
  transition: all 3s ease;
  transition-delay: .5s;
}
.list-top-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}

.list-right-enter-from {
  transform: translate(100%, 0);
  opacity: .1;
}
.list-right-enter-active{
  transition: all 4s ease;
}

.list-right-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}

.list-left-enter-from {
  transform: translate(-100%, 0);
  opacity: .6;
}
.list-left-enter-active{
  transition: all 4s ease;
  transition-delay: .8s;
}
.list-left-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}

.list-bottom-enter-from {
  transform: translate(0, 100%);
  opacity: .7;
}
.list-bottom-enter-active{
  transition: all 2s ease;
  transition-delay: 1s;
}
.list-bottom-enter-to {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
