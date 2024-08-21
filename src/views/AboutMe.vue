<template>
  <div class="about-container">
    <div class="content-container">
      <div v-html="projectReadMeContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
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

<style scoped>
.about-container {
  background-color: #ffffff;
  padding: 75px 0;
  margin-left: 40px;
}

.content-container {
  max-width: 900px; /* 与导航栏一致的最大宽度 */
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 20px;
}
</style>