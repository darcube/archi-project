<template>
  <el-main class="project">
    <div>
      <el-row>
        <el-col>
          <div class="back-to-projects"><el-icon><Back /></el-icon><router-link to="/projects">Powrót</router-link></div>
        </el-col>
      </el-row>
      <el-row>
          <el-col :xs="24" :sm="8" class="description">
            <div class="slower" id="slower">
              <div class="project-logo"><img style="width: 80%" :src="logoImg"></div>
              <div class="title">{{description.title}}</div>
              <div class="label">Przedmiot</div><div>{{description.subject}}</div>
              <div class="label">Prowadzący</div><div>{{description.person}}</div>
              <div class="label">Rok</div><div>{{description.year}}</div>
              <div class="label">Programy</div><div>{{description.tech}}</div>
              <div class="text">{{description.desc}}</div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="16" class="images">
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
      description: text['project' + this.id],
      logoImg: null
      // assets: ['1/main.png', '2/main.png', '3/main.png', '1/main.png', '2/main.png', '3/main.png', '3/main.png']
      // asset: require('@/assets/main-1.jpg'),
    }
  },
  computed: {
  },
  methods: {
    importAll (r : any) {
      r.keys().filter(x => x.includes('/' + this.id + '/')).forEach((key : string) => {
        if (key.includes('img')) {
          this.images.push(key.slice(2))
        }
      })
    },
    parallax () {
      var s = document.querySelector('#slower') as HTMLElement
      var yPos = window.pageYOffset / 20
      // console.log(s, yPos)
      if (yPos < 100 && s) {
        s.style.top = 15 - yPos + '%'
      }
    },
    myEventHandler (e) {
      if (window.innerWidth >= 768) {
        window.addEventListener('scroll', this.parallax)
      } else {
        window.removeEventListener('scroll', this.parallax)
      }
    }
  },
  created () {
    try {
      this.logoImg = require('../assets/' + this.id + '/logo.png')
    } catch (e) {
      console.log('file not found')
    }
    window.addEventListener('resize', this.myEventHandler)
  },
  mounted () {
    this.importAll(require.context('../assets/', true, /\.png$/))
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', this.parallax)
    }
  }
})
</script>

<style lang="scss">

.description {
  text-align: right;
  font-size: .9rem;
  line-height: 1.5;
  //padding-left: 40px;
  //padding-right: 40px;
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
    top: 15%;
    width: 33%;
  }
}

.back-to-projects {
  position: fixed;
  top: 70px;
  text-align: left;
  background-color: white;
  width: 100%;
  z-index: 10;
  padding-top: 10px;

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
  padding: 0 0 0 30px;
}

@media (max-width: 768px) {
  .el-main {
    padding: 0;
  }
  .description {
    .slower {
      position: initial;
      font-size: 1.1rem;
      padding: 70px 10px 0;
      width: auto;
      padding-top: 70px;
    }

    .text {
      padding: 20px 10px 0;
    }
  }

  .images {
    padding: 15px 10px 0;

    img {
      padding-bottom: 5px;
    }
  }

  .back-to-projects {
    position: fixed;
    top: 95px;
    width: 100%;
    padding: 15px 20px 10px;
    left: 0;
    z-index: 1;

    a {
      font-size: 1.1rem;;
    }
  }
}

</style>
