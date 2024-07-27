<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action="" v-if="!submited">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" requried>
      <label for="">博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for="">React.js</label>
        <input type="checkbox" value="Rect.js" v-model="blog.categories">
        <label for="">Angular4</label>
        <input type="checkbox" value="Angular" v-model="blog.categories">
      </div>
      <label for="">作者：</label>
      <select name="" id="" v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
      <router-link :to="''"></router-link>
    </form>
    <div v-if="submited">
      <h3>你的博客发布成功,3秒后为你自动跳转至首页...</h3>
    </div>
    <div id。="preview">
      <h3>博客总览</h3>
      <p>博客标题：<i>{{blog.title}}</i></p>
      <p>博客内容：</p>
      <b>{{blog.content}}</b>
      <p>博客分类</p>
      <ul class="categories">
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>
<script>
// import axios from "axios"
export default {
  name: 'add-blog',
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
        date:""
      },
      authors: ["Hemiah", "Henry", "lee"],
      submited: false
    }
  },
  methods: {
    post: function() {
      this.blog.date = Date();
      this.axios.post("https://wd1593975953oiunqw.wilddogio.com/posts.json", this.blog)
        .then((data) => {
          console.log(this.blog.date)
          this.submited = true;
        })
        .then(() => {
          setTimeout(() => {
            this.$router.push("/")
          }, 3000)
        })

    }
  }
}

</script>
<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  /*width:1200px;*/
  margin: 20px auto;
  max-width: 1000px;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 0;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

#preview p {
  line-height: 50px;
}

h3 {
  margin-top: 10px;
}

.categories {
  display: flex;
  list-style-type: none;

}

.categories li {
  margin: 0 10px;
}

</style>
