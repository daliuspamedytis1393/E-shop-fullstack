<template>
  <div id="app">
    <DefaultLayout>
    <router-view :key="$route.fullPath"/>
    </DefaultLayout>
  </div>
</template>
<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
export default {
  components: {
    DefaultLayout
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
  color: black;
  margin-left: 10px;
}

#nav a.router-link-exact-active {
  color: #ed7669;
}
</style>
