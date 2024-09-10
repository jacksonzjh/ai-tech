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
        <span class="title">小鸿AI问答助手</span>
        <!-- 关闭按钮 -->
        <button class="close-button" @click="toggleSidebar">✕</button>
      </div>

      <!-- 中心化的标题 -->
      <div class="sidebar-content">
        <h2>AI知识库应用助手开发中...</h2>

        <!-- 打字输入框和功能按钮，放在底部 -->
        <div class="chat-box">
          <textarea 
            v-model="message" 
            placeholder="输入您的问题..." 
            class="limited-textarea"
          ></textarea>
          <!-- 右下角延伸角标 -->
          <span class="expand-icon" @click="expandTextarea">↗</span>
          <div class="button-group">
            <button class="clear-button" @click="clearMessage">清空</button>
            <button class="send-button" @click="sendMessage">发送</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarVisible: false, // 控制 AI 聊天窗口的可见性
      message: "", // 聊天输入内容
      isDragging: false, // 控制拖拽
      offset: { x: 0, y: 0 }, // 拖拽偏移
      initialPosition: { top: '10%', left: '70%' }, // 初始位置
      isTextareaFocused: false, // 输入框焦点状态，控制拖拽
    };
  },
  methods: {
    // 切换侧边栏显示状态
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
      this.$nextTick(() => {
        // 初始弹出时置于机器人按钮上方
        const chatbot = this.$refs.chatbotSidebar;
        chatbot.style.top = "50px"; // 调整到机器人按钮上方
        chatbot.style.right = "70px";
      });
    },
    // 清空输入内容
    clearMessage() {
      this.message = ''; 
    },
    // 发送消息
    sendMessage() {
      alert('发送的消息: ' + this.message);
      this.clearMessage(); 
    },
    // 展开输入框功能
    expandTextarea() {
      const textarea = document.querySelector('.limited-textarea');
      if (textarea.style.width === '500px') {
        textarea.style.width = '100%';
        textarea.style.height = '50px';
      } else {
        textarea.style.width = '500px';
        textarea.style.height = '500px';
      }
    },
    // 开始拖拽事件
    startDrag(event) {
      if (this.isTextareaFocused) return; // 如果输入框聚焦，则禁止拖拽
      const chatbot = this.$refs.chatbotSidebar;
      this.isDragging = true;
      this.offset.x = event.clientX - chatbot.offsetLeft;
      this.offset.y = event.clientY - chatbot.offsetTop;
      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    // 拖拽处理
    drag(event) {
      if (!this.isDragging) return;

      const chatbot = this.$refs.chatbotSidebar;
      const newX = event.clientX - this.offset.x;
      const newY = event.clientY - this.offset.y;
      const maxRight = window.innerWidth - chatbot.offsetWidth;
      const maxBottom = window.innerHeight - chatbot.offsetHeight;

      // 边界控制，防止窗口被拖出屏幕
      chatbot.style.left = `${Math.min(Math.max(newX, 0), maxRight)}px`;
      chatbot.style.top = `${Math.min(Math.max(newY, 0), maxBottom)}px`;
    },
    // 停止拖拽事件
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
    // 当输入框获取焦点时禁用拖拽
    onTextareaFocus() {
      this.isTextareaFocused = true;
    },
    // 当输入框失去焦点时恢复拖拽功能
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
  width: 420px; /* 增加宽度 */
  height: 80vh;
  right: 50px; /* 确保窗口靠右 */
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 15px; /* 边缘弧度 */
  z-index: 1001;
  cursor: grab; /* 可拖动光标 */
}

/* Header 样式 */
.header {
  background: linear-gradient(135deg, #000000, #333333); /* 渐变黑色 */
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center; /* 居中显示标题 */
  align-items: center;
  border-top-left-radius: 15px; /* 保持边缘弧度 */
  border-top-right-radius: 15px;
}

.title {
  font-weight: bold;
  font-size: 16px;
}

/* 关闭按钮样式 */
.close-button {
  position: absolute;
  right: 10px;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
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
  background-color: #ffffff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.limited-textarea {
  width: 100%;
  max-width: 380px; /* 限制输入框的最大宽度 */
  height: 50px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  resize: none; /* 禁止手动拖动 */
  overflow-y: auto;
  transition: width 0.3s, height 0.3s; /* 添加动画效果 */
}

/* 右下角延伸角标 */
.expand-icon {
  position: absolute;
  bottom: 10px;
  right: -12px;
  cursor: pointer;
  font-size: 18px;
}

/* 按钮组样式 */
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.clear-button, .send-button {
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-button {
  background: linear-gradient(135deg, #ff4d4d, #ff0000);
}

.send-button {
  background: linear-gradient(135deg, #28a745, #218838); /* 渐变绿色 */
}

.clear-button:hover, .send-button:hover {
  opacity: 0.8;
}
</style>