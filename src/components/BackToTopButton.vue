<template>
  <div class="back-to-top" v-if="isVisible" @click="scrollToTop">
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="Back-top" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path
          d="M8.71335931,15.2865297 C8.61179683,16.2090609 7.32293758,16.1267953 7.27304695,15.2865297 C7.27175008,14.6475142 7.27175008,5.26479636 7.27175008,5.26479636 L2.83675052,9.54548344 C2.14185995,10.1440615 1.3143288,9.18731159 1.83135998,8.55773353 C3.79557855,6.65310872 7.3202657,3.24515592 7.40179694,3.16632781 C7.72696878,2.81306222 8.23887498,2.79476534 8.58495308,3.16632781 C9.23193739,3.7919215 14.0334057,8.42146792 14.1791557,8.58804603 C14.66614,9.19338972 13.8787807,10.0892021 13.2066089,9.58451469 C13.0329683,9.43717095 8.71468744,5.26462448 8.71468744,5.26462448 L8.71335931,15.2865297 Z M1.81868811,-8.54871729e-14 L14.1075619,-8.54871729e-14 L14.1075619,1.39509361 L1.81868811,1.39509361 L1.81868811,-8.54871729e-14 Z"
          fill="#FFFFFF"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
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
  bottom: 50px;
  right: 60px;
  background-color: #bdbec4;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px; /* 根据需要调整大小 */
  height: 45px;
}

.back-to-top:hover {
  background-color: #595d6c; /* 鼠标悬停时的背景颜色 */
}
</style>