<template>
  <div>
    <h2>Site Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/ai-techs/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SiteList',
  data() {
    return {
      posts: [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' }
      ]
    }
  }
}
</script>
