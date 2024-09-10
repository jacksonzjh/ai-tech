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
        { id: 2, title: '从零到精通提示工程(Prompt Engineering)', cover: `${process.env.BASE_URL}Ai-TechArticles/PromptEngineeringGuide/images/封面图.png` },
        { id: 3, title: '检索增强生成（RAG）技术详解与LangChain实践', cover: `${process.env.BASE_URL}Ai-TechArticles/RetrievalAugmentedGeneration/images/封面图.png` }
      ]
    };
  }
}
</script>

<style scoped>

.site-list-container {
  background-color: #ffffff;
  padding: 40px 0;
  margin-top: 17px;
  margin-left: 150px;
}

.centered-content {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  background-color: #ffffff; /* 调整为白色背景 */
  padding-bottom: 100px; /* 确保footer不被覆盖 */
}

.centered-content .el-table {
  width: 80%;
  max-width: 935px;
}

.router-link {
  color: #212323;
  text-decoration: none; /* 移除链接的默认下划线 */
}

.router-link:hover {
  color: #8fdeff; /* 鼠标悬停时的颜色变化 */
  text-decoration: none; /* 移除链接的下划线 */
}

.router-link:focus,
.router-link:active {
  color: #8fdeff;
  text-decoration: none; /* 移除链接的下划线 */
  outline: none; /* 移除点击后的默认边框 */
}
</style>