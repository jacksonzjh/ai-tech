<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/ai-techs">AI Techs</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
