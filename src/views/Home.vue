<template>
  <div>
    <!-- 使用 v-html 指令将 HTML 内容直接插入页面 -->
    <div v-html="projectReadMeContent"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      projectReadMeContent: ''
    }
  },
  mounted() {
    this.fetchProjectReadMe();
  },
  methods: {
    fetchProjectReadMe() {
      fetch(`${process.env.BASE_URL}ProjectReadMe.html`)
        .then(response => {
          if (!response.ok) {
            throw new Error('加载 ProjectReadMe 失败');
          }
          return response.text();
        })
        .then(htmlContent => {
          this.projectReadMeContent = htmlContent;
        })
        .catch(error => console.error('加载 ProjectReadMe 时出错:', error));
    }
  }
}
</script>
