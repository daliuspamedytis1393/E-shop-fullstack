<template>
  <div id="app">
    <NavBar/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: 'Rubik', sans-serif;
  text-align: center;
  color: black;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
