<template>
  <el-header style="--el-header-height: var(--header-height)" :class="{ 'navbar--hidden': !showNavbar }" class="navbar">
    <!-- <img alt="Vue logo" src="../assets/logo.png" height="50">
    <p>Archi Project</p> -->
    <img :src="logo" class="logo__img" />
    <div class="sidemenu">
      <button class="sidemenu__btn" @click="navOpen=!navOpen" :class="{active: navOpen}">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <div class="sidemenu__wrapper">
        <nav :class="{active: navOpen}">
          <ul>
            <li><router-link to="/">Start</router-link></li>
            <li><router-link to="/projects">Projekty</router-link></li>
            <!-- <li><router-link to="/about">Curriculum Vitae</router-link></li> -->
            <li><a href="./CV.pdf" target="_blank">Curriculum Vitae</a></li>
            <li><router-link to="/contact">Kontakt</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- <nav>
      <ul>
        <li><router-link to="/">Start</router-link></li>
        <li><router-link to="/projects">Projekty</router-link></li> -->
        <!-- <li><router-link to="/about">Curriculum Vitae</router-link></li> -->
        <!-- <li><a href="./testpdf.pdf" target="_blank">Curriculum Vitae</a></li>
        <li><router-link to="/contact">Kontakt</router-link></li>
      </ul>
    </nav> -->
  </el-header>
</template>

<script>
export default {
  data () {
    return {
      navOpen: false,
      logo: require('../assets/logo.svg'),
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss">

  .logo__img {
    padding: 10px;
  }

  .router-link-active {
    border-bottom: solid 2px #ffdd00;
    /* border-right: solid 2px lightgrey; */
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
  }

  .navbar {
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
  }

  .navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }

  header {
    display: flex;
    padding: .5rem 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    //mix-blend-mode: difference;
    background-color: white;

    p {
      color: black;
      margin: .7rem 0 0 1rem;
      font-size: 2em;
      //mix-blend-mode: difference;
    }
  }

  .sidemenu {
    width: 100%;
    align-self: center;

    .sidemenu__btn {
      display: none;
    }

    nav {
      margin-left: auto;
      z-index: inherit;
      text-align: right;

      ul {
        list-style: none;
        margin: 0;
      }

      ul li {
        display: inline-flex;
        margin: 1rem 2.5rem 0.5rem;

        a {
          color: black;
          text-decoration: none;
        }
      }
    }
  }

@media (max-width: 768px) {
  .el-header {
    height: var(--mobile-header-height);
  }
  .sidemenu {
    text-align: end;

    nav {
      display: none;
    }
    nav.active {
      width: 200px;
      display: block;
      position: fixed;
      left: 0;
      z-index: 99;
      width: 100%;
      background: #ffffffde;
      top: 0;
      padding-top: 100px;

      ul li {
        display: block;
      }
    }

    .sidemenu {
      &__btn {
        display: inline-block;
        margin: 0 1rem;
        width: 50px;
        height: 50px;
        background: none;
        border: none;
        position: relative;
        z-index: 100;
        appearance: none;
        cursor: pointer;
        outline: none;

        span {
          display: block;
          width: 20px;
          height: 2px;
          margin: auto;
          background: black;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          transition: all .4s ease;

          &.top {
            transform: translateY(-8px);
          }

          &.bottom {
            transform: translateY(8px);
          }
        }
        &.active{
          .top {
            transform: rotate(-45deg);
          }
          .mid{
            transform: translateX(-20px) rotate(360deg);
            opacity: 0;
          }
          .bottom {
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
