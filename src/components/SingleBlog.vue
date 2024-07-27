<template>
  <div class="wrap">
    <div id="single-blog">
      <h1>博客详情</h1>
      <h1>{{singleBlog.title}}</h1>
      <article>{{singleBlog.content}}</article>
      <span>分类：</span><b v-for="category in singleBlog.categories">{{category}}</b>
      <p>作者：{{singleBlog.author}}</p>
      <p>时间：{{singleBlog.date}}</p>
    </div>
    <button v-on:click="deleteSingleBlog">删除</button>
    <router-link :to="'/edit/' + id">编辑</router-link>
  </div>
</template>
<script>
  // import axios from "axios"
export default {
  data() {
    return {
      id: this.$route.params.id,
      singleBlog: {},
    }
  },
  created() {
    this.axios.get("https://wd1593975953oiunqw.wilddogio.com/posts/" + this.id + ".json")
      .then((response) => {
        this.singleBlog = response.data;
      })

  },
  methods: {
    deleteSingleBlog() {
      this.axios.delete("https://wd1593975953oiunqw.wilddogio.com/posts/" + this.id + ".json")
        .then(response => {
          this.$router.push({ path: "/" })
        })
    }
  }
}

</script>
<style scoped>
.wrap {
  padding: 20px;
  margin: 20px 0;
  margin: 0 auto;
  max-width: 960px;
  background: #eee;

  border: 1px dotted #333;
}

b {
  margin-right: 10px;
}

h1 {
  padding: 20px 0;
}


</style>
