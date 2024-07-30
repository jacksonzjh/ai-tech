<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'SiteDetail',
  data() {
    return {
      post: { title: '', content: '' }
    }
  },
  mounted() {
    const postId = this.$route.params.id
    this.fetchPost(postId)
  },
  methods: {
    fetchPost(id) {
      const posts = [
        { id: 1, title: 'First Post', content: 'Content of the first post.' },
        { id: 2, title: 'Second Post', content: 'Content of the second post.' }
      ]
      this.post = posts.find(post => post.id === parseInt(id))
    }
  }
}
</script>
