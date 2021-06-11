<template>
  <div id="app">
    <h1>Welcome to this page!</h1>
    <hr>
    <router-link to="/">file</router-link>
    <router-link to="/users/10"> about </router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
