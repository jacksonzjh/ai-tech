<template>
  <div id="show-blog" v-theme:column="'wide'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="(blog,index) in filtedBlogs" class="single-blog" :key="index">
      <router-link v-bind:to="'/blog/' +blog.id" target="_blank"><h2 v-rainbow>{{blog.title | to-uppercase}} <i class="fl">{{blog.date}}</i></h2>
      </router-link>
      <article>
        {{blog.content | snippet}}
      </article>
    </div>
  </div>
</template>
<script>
// import axios from "axios"
export default {
  name: 'show-blog',
  data() {
    return {
      blogs: [],
      search: ""
    }
  },
  created() {
    this.axios.get("https://wd1593975953oiunqw.wilddogio.com/posts.json")
      .then((respond) => {
        var blogs = respond.data;
        return blogs;

      })
      .then((respond) => {
        var blogsArray = [];
        for (let key in respond) {
          respond[key].id = key;
        }

        for (let index in respond) {
          blogsArray.push(respond[index])
        }
        this.blogs = blogsArray.reverse();
        console.log(this.blogs);
      })


  },
  computed: {
    filtedBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search); //箭头函数的this指向在执行的时候绑定，指向此时的执行期上下文
      })
    }
  },
  filters: {
    "to-uppercase": function(value) {
      return value.toUpperCase();
    },
    "snippet": function(value) {
      return value.slice(0, 100) + "...";
    }
  },
  directives: {
    "rainbow": {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8)
      }
    },
    "theme": {
      bind(el, binding, vnode) {
        if (binding.value == 'wide') {
          el.style.maxWidth = "1260px";
        } else if (binding.value == "narrow") {
          el.style.maxWidth = "560px";
        }
        if (binding.arg == "column") {
          el.style.background = "#6677cc";
          // el.style.background = "#aaa"
          el.style.padding = "20px"
        }
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.fl {
  font-size: 12px;
  float: right;
}
#show-blog {
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

</style>
