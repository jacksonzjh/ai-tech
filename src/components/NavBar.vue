<template>
  <nav>
    <router-link to="/">主页</router-link>
    <router-link to="/ai-techs">AI前沿技术</router-link>
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
