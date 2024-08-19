<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-left">
        <router-link to="/" class="navbar-title">惊鸿</router-link>
      </div>
      <div class="navbar-right">
        <router-link to="/ai-techs" class="navbar-link" :class="{ active: $route.path === '/ai-techs' }">AI前沿技术</router-link>
        <router-link to="/about" class="navbar-link" :class="{ active: $route.path === '/about' }">关于</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

body {
  font-family: 'Noto Sans', sans-serif;
}

.navbar-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 20px; /* 增加上下间距 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-title {
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-left: 20px;
}

.navbar-link {
  font-size: 18px;
  color: black;
  text-decoration: none;
  margin-right: 20px; /* 增加按钮间距 */
}

.navbar-link:hover {
  color: #8fdeff;
  text-decoration: none;
}

.navbar-link.active {
  color: #8fdeff;
}
</style>