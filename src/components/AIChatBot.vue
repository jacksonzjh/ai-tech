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
        <div class="header-content">
          <img class="header-logo" src="@/assets/chatbot.png" alt="Chatbot Logo" />
          <span class="title">小鸿AI问答助手</span>
          <div class="status">
            <!-- 根据status值显示不同颜色的指示灯 -->
            <span v-if="status === 'online'" class="indicator-green"></span>
            <span v-else-if="status === 'training'" class="indicator-red"></span>
            <span class="status-text">{{ statusText }}</span>
          </div>
        </div>
        <button class="close-button" @click="toggleSidebar">✕</button>
      </div>

      <!-- 聊天内容显示区域 -->
      <div class="message-display" ref="messageDisplay">
        <!-- <div v-for="(msg, index) in messages" :key="index" class="chat-message">
          {{ msg }}
        </div> -->
      </div>

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
      // message: "", // 用户输入的消息
      // messages: [], // 用于存储所有消息
      isDragging: false,
      offset: { x: 0, y: 0 },
      initialPosition: { top: '10%', left: '70%' },
      isTextareaFocused: false,
      status: 'training', // 'online' 或 'training'
    };
  },
  computed: {
    statusText() {
      return this.status === 'online' ? '在线' : '模型训练中';
    }
  },
  components: {
    'el-button': Button, // 注册Element UI按钮组件
  },
  methods: {
    toggleStatus() {
      this.status = this.status === 'online' ? 'training' : 'online';
    },
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
      this.messages = [];  // 清空聊天记录
    },
    sendMessage() {
      // 发送消息
      alert('发送的消息: ' + this.message);
      this.clearMessage();

      // 滚动到最新消息处
      // const messageBox = document.querySelector('.message-box');
      // messageBox.scrollTop = messageBox.scrollHeight;
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

.chatbot-sidebar {
  position: fixed;
  width: 400px; /* 固定宽度 */
  height: 85vh; /* 高度占屏幕的85% */
  right: 45px; /* 靠右45px */
  bottom: 20px; /* 距离底部20px，防止撑到页面底部 */
  background-color: #f6f6f6;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2), 0px -4px 5px rgba(0, 0, 0, 0.2), 4px 0px 5px rgba(0, 0, 0, 0.2), -4px 0px 5px rgba(0, 0, 0, 0.2); /* 添加左右、上下四周的阴影效果 */
  display: flex;
  flex-direction: column;
  border-radius: 10px; /* 边缘弧度 */
  z-index: 1001; /* 保证窗口在最上层 */
  cursor: grab; /* 提示窗口可拖动 */
  overflow-y: auto; /* 避免内容被截断 */
  padding-bottom: 120px; /* 给底部留出空间 */
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

.status {
  display: flex;
  align-items: center;
  margin-left: 15px; /* 调整与标题的间距 */
}

.indicator-green{
  width: 10px;
  height: 10px;
  background-color: #49de6e; /* 绿色指示灯 */
  border-radius: 50%; /* 圆形 */
  box-shadow: 0 0 10px rgba(39, 168, 69, 0.6); /* 发光效果 */
  margin-right: 8px; /* 与文字的间距 */
  
}

.indicator-red {
  width: 10px;
  height: 10px;
  background-color: #e74545; /* 玫红色指示灯 */
  border-radius: 50%; /* 圆形 */
  box-shadow: 0 0 10px rgba(255, 20, 20, 0.6); /* 玫红色发光效果 */
  margin-right: 8px; /* 与文字的间距 */
}

.status-text {
  color: #b1b1b1; /* 文字颜色为绿色 */
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 1px;
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

/* 聊天输入框和按钮样式 */
.chat-box {
  position: absolute; 
  bottom: 0;
  width: 100%; 
  padding: 2px;
  background-color: #f6f6f6;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-radius: 2px;
  min-height: 120px; /* 设置最小高度，扩展空间 */
}

.limited-textarea {
  width: calc(100% - 1px); /* 调整宽度，确保文本框不会超出边界 */
  max-width: 399px; /* 微调这个值，根据需求 */
  padding-right: 15px; /* 让文本框内部右侧留出更多空间 */
  padding: 7px;
  height: 80px;
  border-radius: 2px;
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  font-size: 14px;
  resize: none; /* 禁止手动拖动 */
  overflow-y: auto;
  transition: width 0.3s, height 0.3s; /* 添加动画效果 */
}

/* 聊天内容显示区域 */
.message-display {
  overflow-y: auto; /* 内容多时可滚动 */
  width: 99%; /* 设置宽度，不要占满整个聊天窗口 */
  height: 86%;
  padding: 10px;
  margin: 1.5px auto; /* 让消息框与边界保持均匀的间隔 */
  background-color: #f6f6f6;
  border: 1px solid #ccc;
  border-radius: 2px;
}

/* 聊天消息样式(暂不需要) */
/* .chat-message {
  background-color: #e1f5fe;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
} */

/* 聊天消息显示框样式 */
.message-box {
  flex: 1; /* 占据剩余空间 */
  padding: 10px;
  overflow-y: auto; /* 内容多时可滚动 */
  background-color: #ffffff;
  border-radius: 10px 10px 0 0; /* 圆角 */
  border: 1px solid #ccc;
  margin-bottom: 10px; /* 和输入框留出距离 */
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
  margin-top: 7px;
  margin-bottom: 10px;
  margin-left: 7px;
  margin-right: 7px;
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