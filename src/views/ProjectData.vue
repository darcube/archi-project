<template>
  <el-main class="project">
    <div>
      <el-row>
        <el-col>
          <div class="back-to-projects"><el-icon><Back /></el-icon><router-link to="/projects">Powrót</router-link></div>
        </el-col>
      </el-row>
      <el-row>
          <el-col :span="8" class="description">
            <div class="slower" id="slower">
              <div class="title">{{description.title}}</div>
              <div class="label">Przedmiot</div><div>{{description.subject}}</div>
              <div class="label">Prowadzący</div><div>{{description.person}}</div>
              <div class="label">Rok</div><div>{{description.year}}</div>
              <div class="label">Programy</div><div>{{description.tech}}</div>
              <div class="text">{{description.desc}}</div>
            </div>
          </el-col>
          <el-col :span="16" class="images">
              <el-row v-for="(img, idx) in images" :key="idx">
                  <el-col><div><img style="width: 100%" :src="require('../assets/' + img)"></div></el-col>
              </el-row>
          </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { text } from '../assets/text.js'
// import HelloWorld from '../components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'project-data',
  components: {
  },
  props: {
    id: String
  },
  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      images: [] as Array<any>,
      description: text.project1
      // assets: ['1/main.png', '2/main.png', '3/main.png', '1/main.png', '2/main.png', '3/main.png', '3/main.png']
      // asset: require('@/assets/main-1.jpg'),
    }
  },
  computed: {
  },
  methods: {
    importAll (r : any) {
      r.keys().forEach((key : string) => (this.images.push(this.id + key.slice(1))))
    },
    parallax () {
      var s = document.querySelector('#slower') as HTMLElement
      var yPos = window.pageYOffset / 60
      // console.log(s, yPos)
      if (yPos < 18 && s) {
        s.style.top = 12 - yPos + '%'
      }
    }
  },
  mounted () {
    var a = require.context('../assets/1', true, /\.png$/)
    this.importAll(require.context('../assets/1', true, /\.png$/))
    window.addEventListener('scroll', this.parallax)
  }
})
</script>

<style lang="scss">
.description {
  text-align: right;
  font-size: .9rem;
  line-height: 1.5;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;

  .title {
    padding-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.1rem;
  }

  .label {
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 8px;
  }

  .text {
    padding-top: 20px;
  }

  .slower {
    position: fixed;
    top: 12%;
    width: 300px;
  }
}

.back-to-projects {
  position: fixed;
  top: 50px;
  text-align: left;
  background-color: white;
  width: 100%;
  z-index: 10;

  .el-icon {
    vertical-align: text-bottom;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: .9rem;
    padding-left: 5px;
  }
}

.images {
  padding: 0 30px;
}
</style>
