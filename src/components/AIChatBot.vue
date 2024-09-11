<template>
  <div>
    <!-- AI聊天窗口按钮 -->
    <div class="chatbot-button" @click="toggleSidebar">
      <img src="@/assets/chatbot.png" alt="Chatbot Button" />
    </div>

    <!-- AI聊天侧边栏窗口，使用原生JS拖拽 -->
    <div v-if="isSidebarVisible" ref="chatbotSidebar" class="chatbot-sidebar" @mousedown="startDrag">
      <!-- 头部 (Header) -->
      <div class="header">
        <!-- 聊天机器人logo和标题 -->
        <div class="header-content">
          <img class="header-logo" src="@/assets/chatbot.png" alt="Chatbot Logo" />
          <span class="title">小鸿AI问答助手</span>
        </div>
        <!-- 关闭按钮 -->
        <button class="close-button" @click="toggleSidebar">✕</button>
      </div>

      <!-- 中心化的标题 -->
      <div class="sidebar-content">
        <h2>AI & 知识库应用开发中...</h2>

        <!-- 打字输入框和功能按钮，放在底部 -->
        <div class="chat-box">
          <textarea 
            v-model="message" 
            placeholder="请输入您的问题..." 
            class="limited-textarea"
            @focus="onTextareaFocus"
            @blur="onTextareaBlur"
          ></textarea>
          <!-- 右下角的编辑按钮 -->
          <el-button icon="el-icon-edit" class="expand-icon" @click="expandTextarea"></el-button>
          <div class="button-group">
            <button class="clear-button" @click="clearMessage">清空对话</button>
            <button class="send-button" @click="sendMessage">发送</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'; // 引入Element UI的按钮组件
import 'element-ui/lib/theme-chalk/index.css'; // 引入Element UI的样式

export default {
  data() {
    return {
      isExpanded: false,
      initialHeight: '80px',
      expandedHeight: '450px',
      isSidebarVisible: false,
      message: "",
      isDragging: false,
      offset: { x: 0, y: 0 },
      initialPosition: { top: '10%', left: '70%' },
      isTextareaFocused: false,
    };
  },
  components: {
    'el-button': Button, // 注册Element UI按钮组件
  },
  mounted() {
    // 检测是否在文章页面，并调整 fwrite 的 padding
    if (this.$route.name === 'SiteDetail' || this.$route.name === 'AboutMe') {
      const fwriteElements = document.querySelectorAll('.fwrite');
      fwriteElements.forEach(element => {
        element.style.padding = '0'; // 动态覆盖文章页面 fwrite 的 padding
      });
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
      this.$nextTick(() => {
        const chatbot = this.$refs.chatbotSidebar;
        chatbot.style.top = "50px";
        chatbot.style.right = "70px";
      });
    },
    clearMessage() {
      this.message = '';
    },
    sendMessage() {
      alert('发送的消息: ' + this.message);
      this.clearMessage();
    },
    expandTextarea() {
      const textarea = document.querySelector('.limited-textarea');
      if (this.isExpanded) {
        textarea.style.height = this.initialHeight;
      } else {
        textarea.style.height = this.expandedHeight;
      }
      this.isExpanded = !this.isExpanded;
    },
    startDrag(event) {
      if (this.isTextareaFocused) return;
      const chatbot = this.$refs.chatbotSidebar;
      this.isDragging = true;
      this.offset.x = event.clientX - chatbot.offsetLeft;
      this.offset.y = event.clientY - chatbot.offsetTop;
      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    drag(event) {
      if (!this.isDragging) return;

      const chatbot = this.$refs.chatbotSidebar;
      const newX = event.clientX - this.offset.x;
      const newY = event.clientY - this.offset.y;
      const maxRight = window.innerWidth - chatbot.offsetWidth;
      const maxBottom = window.innerHeight - chatbot.offsetHeight;

      chatbot.style.left = `${Math.min(Math.max(newX, 0), maxRight)}px`;
      chatbot.style.top = `${Math.min(Math.max(newY, 0), maxBottom)}px`;
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
    onTextareaFocus() {
      this.isTextareaFocused = true;
    },
    onTextareaBlur() {
      this.isTextareaFocused = false;
    },
  },
};
</script>

<style scoped>
/* 聊天机器人按钮样式 */
.chatbot-button {
  position: fixed;
  bottom: 130px;
  right: 50px;
  width: 68px;
  height: 70px;
  cursor: pointer;
  z-index: 1000;
}

.chatbot-button img {
  width: 100%;
  height: 100%;
}

/* AI聊天侧边栏窗口样式，带有边缘弧度 */
.chatbot-sidebar {
  position: fixed;
  width: 400px; /* 固定宽度 */
  height: 85vh; /* 高度占屏幕的85% */
  right: 45px; /* 靠右45px */
  bottom: 20px; /* 距离底部20px，防止撑到页面底部 */
  background-color: #f6f6f6;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  display: flex;
  flex-direction: column;
  border-radius: 10px; /* 边缘弧度 */
  z-index: 1001; /* 保证窗口在最上层 */
  cursor: grab; /* 提示窗口可拖动 */
  overflow: hidden; /* 防止内容超出窗口 */
}

/* 窗口在较小屏幕上的自适应 */
@media (max-width: 768px) {
  .chatbot-sidebar {
    width: 90vw; /* 在小屏幕上，宽度占屏幕的90% */
    right: 5vw; /* 让窗口保持居中 */
  }
}

/* Header 样式 */
.header {
  background: linear-gradient(135deg, #0c3d3c, #000000); /* 渐变黑色 */
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center; /* 居中显示标题 */
  align-items: center;
  border-top-left-radius: 10px; /* 保持边缘弧度 */
  border-top-right-radius: 10px;
}

.title {
  font-weight: bold;
  font-size: 14px;
}

/* 关闭按钮样式 */
.close-button {
  position: absolute;
  right: 15px;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 30px; /* 设置按钮的宽度 */
  height: 30px; /* 设置按钮的高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease; /* 添加渐显效果 */
}

.close-button:hover {
  background: linear-gradient(135deg, #ff6767, #ff0000);
  width: 30px;  /* 保持正方形 */
  height: 30px; /* 保持正方形 */
  border-radius: 5px; /* 将圆角调整为小的圆角，保留正方形 */
}

/* 中心化的标题 */
.sidebar-content h2 {
  text-align: center; /* h2标题居中 */
}

/* 聊天输入框和按钮样式 */
.chat-box {
  position: absolute;
  bottom: 0;
  width: 400px;
  padding: 10px;
  background-color: #f6f6f6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  min-height: 120px; /* 设置最小高度，扩展空间 */
}

.limited-textarea {
  width: 100%;
  max-width: 380px; /* 限制输入框的最大宽度 */
  height: 70px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  font-size: 14px;
  resize: none; /* 禁止手动拖动 */
  overflow-y: auto;
  transition: width 0.3s, height 0.3s; /* 添加动画效果 */
}

/* 编辑按钮固定在右下角 */
.expand-icon {
  position: absolute;
  right: 10px;
  bottom: 60px;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.3s ease;
}

/* 选中或激活状态 - 仅变色，不放大 */
.expand-icon:focus,
.expand-icon:active {
  background-color: transparent !important; /* 保持背景透明 */
  color: #4f4f4f; /* 点击时图标变色 */
  outline: none; /* 移除默认的 focus 边框 */
}

/* 按钮组样式 */
.button-group {
  display: flex;
  justify-content: space-between; /* 均匀分布 */
  align-items: center; /* 垂直居中对齐 */
  background-color: #f6f6f6;
  margin-top: 10px;
}

.clear-button {
  color: white;
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button {
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-button {
  background: linear-gradient(135deg, #000000, #767676); /* 渐变黑色 */
}

.send-button {
  background: linear-gradient(135deg, #28a745, #218838); /* 渐变绿色 */
}

.clear-button:hover, .send-button:hover {
  opacity: 0.8;
}

.header-content {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

.header-logo {
  width: 33px; /* 控制 logo 的宽度 */
  height: 33px; /* 控制 logo 的高度 */
  margin-top: -3px;
  margin-right: 5px; /* 图标和标题之间的空隙 */
  object-fit: contain; /* 确保图片不变形 */
}

.title {
  font-size: 15px;
  white-space: nowrap; /* 防止标题换行 */
  overflow: hidden;
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  max-width: 150px; /* 限制标题的最大宽度，保持较窄 */
}

img {
  max-width: 100%; /* 防止图像撑出父容器 */
  height: auto; /* 保持图片的纵横比 */
}

* {
  box-sizing: border-box; /* 强制所有元素使用 border-box 模式 */
}
</style>