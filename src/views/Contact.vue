<template>
  <div class="home">
    <el-container>
      <el-row class="contact-row">
        <el-col :xs="1" :md="4" :lg="7" :span="7"></el-col>
        <el-col :xs="22" :md="16" :lg="14" :span="14" class="contact-area">
          <div class="text1">Porozmawiajmy.</div>
          <div class="text2">Zapraszam do kontaktu przez e-mail lub telefonicznie.</div>
          <div class="text2">Chętnie odpowiem na wszystkie pytania.</div>
          <div class="info">
            <el-row>
              <el-col :xs="24" :span="12">
                <div class="title">Adres email:</div>
                <div class="desc">sobi.edyta@gmail.com</div>
              </el-col>
              <el-col :xs="24" :span="12">
                <div class="title">Numer telefonu:</div>
                <div class="desc">+48 534 355 686</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="0" :sm="1" :md="4" :lg="3" :span="3"></el-col>
      </el-row>
    </el-container>
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
  }
})
</script>

<style scoped lang="scss">

.contact-area {
  text-align: left;
  margin-top: 100px;

  .text1 {
    font-weight: normal;
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
  .text2 {
    font-weight: lighter;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  .info {
    margin-top: 30px;
  }
  .title {
    font-weight: normal;
    margin-bottom: 8px;
    font-size: .9rem;
  }
  .desc {
    font-weight: lighter;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
}

</style>
