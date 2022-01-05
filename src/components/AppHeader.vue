<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png" height="50">
    <p>Archi Project</p>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link :to="{ path: '/about', hash: '#apply' }">test</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    display: flex;
    padding: .5rem 1rem;
    //background-color: black;

    p {
      color: white;
      margin: .7rem 0 0 1rem;
      font-size: 2em;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin: 1rem 3rem 0.5rem;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
</style>
