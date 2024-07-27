<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <h3 v-if="submited">博客编辑成功，将为你跳转到首页。请稍后...</h3>
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
      <button v-on:click.prevent="post">编辑博客</button>
      <router-link :to="''"></router-link>
    </form>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
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
      id: this.$route.params.id,
      blog: {
        title: "",
        content: "",
        categories: []
      },
      authors: ["Hemiah", "Henry", "lee"],
      submited: false
    }
  },
  methods: {
    fetchData() {
      this.axios.get("https://wd1593975953oiunqw.wilddogio.com/posts/" + this.id + ".json")
        .then((data) => {
          this.blog = data.data;
        })
    },
    post: function() {
      this.axios.put("https://wd1593975953oiunqw.wilddogio.com/posts/" + this.id + ".json", this.blog)
        .then((data) => {
          console.log(data);
          this.submited = true;
        })
        .then(() => {
          setTimeout(() => {
            this.$router.push("/");
          }, 2000)
        })
    }
  },
  created() {
    this.fetchData();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
