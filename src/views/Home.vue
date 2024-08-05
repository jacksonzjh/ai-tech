<template>
  <div>
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
      fetch('/ProjectReadMe.html')
        .then(response => response.text())
        .then(html => {
          this.projectReadMeContent = html;
        })
        .catch(error => console.error('加载 ProjectReadMe 时出错:', error));
    }
  }
}
</script>
