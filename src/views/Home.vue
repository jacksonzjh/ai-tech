<template>
  <div>
    <h1>欢迎来到我的AI技术学习网站</h1>
    <div v-html="articleContent"></div>
  </div>
</template>

<script>
import articleContent from '@/assets/data/articles/PromptEngineeringGuide/PromptEngineeringGuide.html';

export default {
  name: 'HomeComponent',
  data() {
    return {
      articleContent
    }
  }
}
</script>
