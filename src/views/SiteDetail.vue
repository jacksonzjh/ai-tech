<template>
  <div>
    <!-- 使用 v-html 指令将 HTML 内容直接插入页面 -->
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'SiteDetail',
  data() {
    return {
      post: { title: '', content: '' }
    }
  },
  mounted() {
    const postId = this.$route.params.id;
    if (postId === '1') {
      this.fetchHtmlContent('Ai-TechArticles/TypraMdEditorGuide.html', 'Typra - Markdown编辑器指南');
    } else if (postId === '2') {
      this.fetchHtmlContent('Ai-TechArticles/PromptEngineeringGuide/PromptEngineeringGuide.html', 'AI技术前沿：从零到精通提示工程(Prompt Engineering)');
    } else {
      this.fetchPost(postId);
    }
  },
  methods: {
    fetchPost(id) {
      const posts = [
        { id: 1, title: 'Typra - Markdown编辑器指南', content: 'Content of the first post.' },
        { id: 2, title: 'AI技术前沿：从零到精通提示工程(Prompt Engineering)', content: 'Content of the second post.' }
      ];
      this.post = posts.find(post => post.id === parseInt(id));
    },
    fetchHtmlContent(path, title) {
      fetch(`${process.env.BASE_URL}${path}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('网络响应不正常');
          }
          return response.text();
        })
        .then(htmlContent => {
          this.post = {
            title: title,
            content: htmlContent
          };
        })
        .catch(error => console.error('加载HTML内容时出错:', error));
    }
  }
}
</script>
