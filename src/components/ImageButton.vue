<template>
<router-link :to="{ name: 'project',  params: { id: projectId || 1 }}">
  <div class="img-btn-area">
    <img style="width: 100%" :src="require('../assets/' + asset)" class="img-btn">
    <div class="details-area">
        <span class="line"></span>
        <span class="text">{{lineText}}</span>
    </div>
  </div>
    </router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'image-button',
  props: {
    asset: String,
    projectId: Number,
    text: String
  },
  components: {
  },
  data (vm) {
    return {
      lineText: vm.text || 'Szczegóły'
    }
  },
  computed: {
  },
  methods: {
  }
})
</script>

<style lang="scss">

.img-btn {
  height: 100%;
  object-fit: cover;
}

.details-area {
  display: none;
}

@keyframes run {
    0% {
      //right: -100px;
      transform: translateX(20%);
    }
    100% {
      //right: 0;
      transform: translateX(0);
    }
}

.img-btn-area {
  overflow: hidden;
  position: relative;
  height: 100%;

  &:hover {
    background: black;

    .img-btn {
      transition: transform .8s ease;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      -webkit-filter: none;
      filter: grayscale(100%);
      //filter: none;
      cursor: pointer;
      transform: scale(1.2);
      opacity: .5;
    }

    .details-area {
      animation: linear;
      animation-name: run;
      animation-duration: .5s;
      display: block;
      position: absolute;
      width: 100%;
      height: 100px;
      //right: 0;
      bottom: 0;

      .line {
        width: 50px;
        border-top: solid white 2px;
        position: absolute;
        right: 120px;
        top: 50%;
      }

      .text {
        color: white;
        line-height: 100px;
        position: absolute;
        right: 40px;
      }
    }
  }
}

</style>
