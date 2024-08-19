<template>
  <div class="chatbot-button" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <img :src="isHovered ? hoverImage : normalImage" alt="Chatbot Button" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      normalImage: require('@/assets/chatbot_alt.png'),
      hoverImage: require('@/assets/chatbot.png'),
    };
  },
};
</script>

<style scoped>
.chatbot-button {
  position: fixed;
  bottom: 5px; /* 与返回顶部按钮在同一水平线上 */
  right: 75px; /* 位于返回顶部按钮的左侧 */
  width: 100px; /* 调大按钮宽度 */
  height: 100px; /* 调大按钮高度 */
  cursor: pointer;
  z-index: 1000;
}

.chatbot-button img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}

.chatbot-button:hover img {
  transform: scale(1.1); /* 放大效果 */
}
</style>