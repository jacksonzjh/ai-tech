<template>
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
          <router-link :to="'/ai-techs/' + scope.row.id" style="text-decoration: none; color: black;">
            <span style="font-weight: bold;">{{ scope.row.title }}</span>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SiteList',
  data() {
    return {
      posts: [
        { id: 1, title: 'Typra - Markdown编辑器指南' },
        { id: 2, title: 'AI技术前沿：从零到精通提示工程(Prompt Engineering)' }
      ]
    };
  }
}
</script>

<style scoped>
.centered-content {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.centered-content .el-table {
  width: 80%;
  max-width: 1200px;
}
</style>