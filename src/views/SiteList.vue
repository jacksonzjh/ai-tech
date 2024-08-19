<template>
  <div class="site-list-container">
    <div class="centered-content">
      <el-table :data="posts" style="width: 100%">
        <el-table-column prop="index" label="序号" width="100">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="封面" width="120">
          <template slot-scope="scope">
            <img :src="scope.row.cover" alt="文章封面图" style="width: 100px; height: 100px; border-radius: 8px;">
          </template>
        </el-table-column>
        <el-table-column prop="title" label="文章标题">
          <template slot-scope="scope">
            <router-link :to="'/ai-techs/' + scope.row.id" class="router-link">
              <span style="font-weight: bold;">{{ scope.row.title }}</span>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteList',
  data() {
    return {
      posts: [
        { id: 1, title: 'Typra - Markdown编辑器指南', cover: `${process.env.BASE_URL}Ai-TechArticles/typra.png` },
        { id: 2, title: 'AI技术前沿：从零到精通提示工程(Prompt Engineering)', cover: `${process.env.BASE_URL}Ai-TechArticles/PromptEngineeringGuide/images/封面图.png` }
      ]
    };
  }
}
</script>

<style scoped>
.site-list-container {
  background-color: #f8f8f8;
  padding: 75px 0;
}

.centered-content {
  max-width: 900px; /* 与导航栏一致的最大宽度 */
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 20px;
}
</style>