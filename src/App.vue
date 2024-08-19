<template>
  <div id="app">
    <NavBar />
    <router-view />
    <BackToTopButton />
    <div class="footer">
      <p><a href="mailto:jacksonzjh2023@gmail.com">Email</a> •  
      <a href="https://github.com/jacksonzjh" target="_blank">Github</a> •  
      <a href="https://huggingface.co/Qwen/Qwen2-7B-Instruct" target="_blank">AI</a></p>
      <p>© 2024-2024  •  Jinhong  |  Made By AI</p>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import BackToTopButton from './components/BackToTopButton.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    BackToTopButton
  }
}
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 20px 0;
  background-color: #f8f8f8;
  margin-top: -70px; /* 向上移动 */
}

.footer p {
  margin: 5px 0;
  color: #666;
}

.footer a {
  text-decoration: none; /* 移除链接的下划线 */
  color: inherit; /* 保持与文本一致的颜色 */
}

.footer a:hover {
  color: #8fdeff;
  text-decoration: none; /* 悬停时保持无下划线 */
}
</style>
