<template>
  <div id="app">
    <blog-header></blog-header>
      <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlog.vue'
import BlogHeader from './components/BlogHeader.vue'
// import Demo from './components/demo.vue'
export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlog,
    "blog-header":BlogHeader,
  }

}
</script>
  
<style>
</style>
