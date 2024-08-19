<template>
  <div class="back-to-top" v-if="isVisible" @click="scrollToTop">
    <img src="@/assets/back-to-top.svg" alt="Back to Top" class="back-to-top-icon" />
  </div>
</template>

<script>
export default {
  name: 'BackToTopButton',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.toggleVisibility);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleVisibility);
  },
  methods: {
    toggleVisibility() {
      this.isVisible = window.pageYOffset > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.back-to-top-icon {
  width: 25px; /* 根据需要调整大小 */
  height: 25px;
}
</style>