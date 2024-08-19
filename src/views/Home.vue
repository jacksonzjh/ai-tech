<template>
  <div class="home-container">
    <div class="content-container">
      <h1>主页开发中...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

body {
  font-family: 'Noto Sans', sans-serif;
}

.home-container {
  background-color: #f8f8f8;
  padding: 75px 0; /* 控制上下间距 */
  display: flex;
  justify-content: center; /* 内容居中 */
  align-items: center;
}

.content-container {
  max-width: 900px; /* 与导航栏保持一致 */
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 40px; /* 控制白板内边距 */
  border-radius: 8px; /* 圆角效果 */
  text-align: center;
}
</style>
