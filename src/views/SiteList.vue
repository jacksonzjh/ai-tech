<template>
  <div>
    <h2>文章一览</h2>
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
        { id: 1, title: 'Typra - Markdown编辑器指南' },
        { id: 2, title: 'AI必学：从零到精通提示工程(Prompt Engineering)' }
      ]
    }
  }
}
</script>
