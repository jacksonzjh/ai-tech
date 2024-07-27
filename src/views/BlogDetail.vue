<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
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
        { id: 1, title: 'First Blog Post', content: 'Content of the first post.' },
        { id: 2, title: 'Second Blog Post', content: 'Content of the second post.' }
      ]
      this.post = posts.find(post => post.id === parseInt(id))
    }
  }
}
</script>
