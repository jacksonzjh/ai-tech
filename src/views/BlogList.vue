<template>
  <div>
    <h2>Blog Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/blogs/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      posts: [
        { id: 1, title: 'First Blog Post' },
        { id: 2, title: 'Second Blog Post' }
      ]
    }
  }
}
</script>
