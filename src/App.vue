<template>
  <div>
    <nav>
      <router-link to="/HomePage"> Home Page</router-link>
    </nav>
    <nav>
      <router-link to="/contactUs"> Contate-nos </router-link>
    </nav>
    <nav>
      <router-link to="/aboutUS">Sobre nós</router-link>
    </nav> 
  </div> 
  <router-View></router-View>
</template>

<script>

export default {
  name: 'App',

  }

</script>

<style>
#app {
  background-image:url(https://images.app.goo.gl/tUkbf2CLc8V7gjVS6);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

  /*pra tira a linha azul do link
  {
    text-decoration: none;
    color: inherit;
  }*/

</style>
