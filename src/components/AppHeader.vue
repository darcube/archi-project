<template>
  <el-header height="50px">
    <!-- <img alt="Vue logo" src="../assets/logo.png" height="50">
    <p>Archi Project</p> -->
    <nav>
      <ul>
        <li><router-link to="/">Start</router-link></li>
        <li><router-link to="/projects">Projekty</router-link></li>
        <li><router-link to="/about">O mnie</router-link></li>
        <li><router-link to="/contact">Kontakt</router-link></li>
      </ul>
    </nav>
  </el-header>
</template>

<style lang="scss">

  .router-link-active {
    border-bottom: solid 2px #ffdd00;
    /* border-right: solid 2px lightgrey; */
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
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

  nav {
    margin-left: auto;
    z-index: inherit;

    ul {
      list-style: none;
      margin: 0;
    }

    ul li {
      display: inline-flex;
      margin: 1rem 3rem 0.5rem;

      a {
        color: black;
        text-decoration: none;
      }
    }
  }
</style>
