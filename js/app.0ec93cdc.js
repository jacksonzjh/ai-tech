(function(){"use strict";var t={3870:function(t,e,n){var i=n(6848),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("BackToTopButton"),e("ChatbotButton"),t._v(" "),t._m(0)],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("p",[e("a",{attrs:{href:"mailto:jacksonzjh2023@gmail.com"}},[t._v("Email")]),t._v(" • "),e("a",{attrs:{href:"https://github.com/jacksonzjh",target:"_blank"}},[t._v("Github")]),t._v(" • "),e("a",{attrs:{href:"https://huggingface.co/Qwen/Qwen2-7B-Instruct",target:"_blank"}},[t._v("AI")])]),e("p",[t._v("© 2024 • Jinhong | Made By AI")])])}],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"navbar-container"},[e("div",{staticClass:"navbar-left"},[e("router-link",{staticClass:"navbar-title",attrs:{to:"/"}},[t._v("惊鸿")])],1),e("div",{staticClass:"navbar-right"},[e("router-link",{staticClass:"navbar-link",class:{active:"/ai-techs"===t.$route.path},attrs:{to:"/ai-techs"}},[t._v("AI前沿技术")]),e("router-link",{staticClass:"navbar-link",class:{active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v("关于")])],1)])])},r=[],l=n(1656),c={},u=(0,l.A)(c,a,r,!1,null,"73d0310e",null),d=u.exports,h=function(){var t=this,e=t._self._c;return t.isVisible?e("div",{staticClass:"back-to-top",on:{click:t.scrollToTop}},[e("svg",{attrs:{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{id:"Back-top",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("path",{attrs:{d:"M8.71335931,15.2865297 C8.61179683,16.2090609 7.32293758,16.1267953 7.27304695,15.2865297 C7.27175008,14.6475142 7.27175008,5.26479636 7.27175008,5.26479636 L2.83675052,9.54548344 C2.14185995,10.1440615 1.3143288,9.18731159 1.83135998,8.55773353 C3.79557855,6.65310872 7.3202657,3.24515592 7.40179694,3.16632781 C7.72696878,2.81306222 8.23887498,2.79476534 8.58495308,3.16632781 C9.23193739,3.7919215 14.0334057,8.42146792 14.1791557,8.58804603 C14.66614,9.19338972 13.8787807,10.0892021 13.2066089,9.58451469 C13.0329683,9.43717095 8.71468744,5.26462448 8.71468744,5.26462448 L8.71335931,15.2865297 Z M1.81868811,-8.54871729e-14 L14.1075619,-8.54871729e-14 L14.1075619,1.39509361 L1.81868811,1.39509361 L1.81868811,-8.54871729e-14 Z",fill:"#FFFFFF","fill-rule":"nonzero"}})])])]):t._e()},f=[],p={name:"BackToTopButton",data(){return{isVisible:!1}},mounted(){window.addEventListener("scroll",this.toggleVisibility)},beforeDestroy(){window.removeEventListener("scroll",this.toggleVisibility)},methods:{toggleVisibility(){this.isVisible=window.pageYOffset>300},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},g=p,v=(0,l.A)(g,h,f,!1,null,"3075c32a",null),m=v.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"chatbot-button",on:{click:t.toggleSidebar}},[e("img",{attrs:{src:n(855),alt:"Chatbot Button"}})]),t.isSidebarVisible?e("div",{ref:"chatbotSidebar",staticClass:"chatbot-sidebar",on:{mousedown:t.startDrag}},[e("div",{staticClass:"header"},[t._m(0),e("button",{staticClass:"close-button",on:{click:t.toggleSidebar}},[t._v("✕")])]),e("div",{staticClass:"sidebar-content"},[e("h2",[t._v("AI & 知识库应用开发中...")]),e("div",{staticClass:"chat-box"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"limited-textarea",attrs:{placeholder:"请输入您的问题..."},domProps:{value:t.message},on:{focus:t.onTextareaFocus,blur:t.onTextareaBlur,input:function(e){e.target.composing||(t.message=e.target.value)}}}),e("el-button",{staticClass:"expand-icon",attrs:{icon:"el-icon-edit"},on:{click:t.expandTextarea}}),e("div",{staticClass:"button-group"},[e("button",{staticClass:"clear-button",on:{click:t.clearMessage}},[t._v("清空对话")]),e("button",{staticClass:"send-button",on:{click:t.sendMessage}},[t._v("发送")])])],1)])]):t._e()])},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-content"},[e("img",{staticClass:"header-logo",attrs:{src:n(855),alt:"Chatbot Logo"}}),e("span",{staticClass:"title"},[t._v("小鸿AI问答助手")])])}],_=n(9143),C=n.n(_),w={data(){return{isExpanded:!1,initialHeight:"80px",expandedHeight:"450px",isSidebarVisible:!1,message:"",isDragging:!1,offset:{x:0,y:0},initialPosition:{top:"10%",left:"70%"},isTextareaFocused:!1}},components:{"el-button":_.Button},mounted(){if("SiteDetail"===this.$route.name||"AboutMe"===this.$route.name){const t=document.querySelectorAll(".fwrite");t.forEach((t=>{t.style.padding="0"}))}},methods:{toggleSidebar(){this.isSidebarVisible=!this.isSidebarVisible,this.$nextTick((()=>{const t=this.$refs.chatbotSidebar;t.style.top="50px",t.style.right="70px"}))},clearMessage(){this.message=""},sendMessage(){alert("发送的消息: "+this.message),this.clearMessage()},expandTextarea(){const t=document.querySelector(".limited-textarea");this.isExpanded?t.style.height=this.initialHeight:t.style.height=this.expandedHeight,this.isExpanded=!this.isExpanded},startDrag(t){if(this.isTextareaFocused)return;const e=this.$refs.chatbotSidebar;this.isDragging=!0,this.offset.x=t.clientX-e.offsetLeft,this.offset.y=t.clientY-e.offsetTop,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.stopDrag)},drag(t){if(!this.isDragging)return;const e=this.$refs.chatbotSidebar,n=t.clientX-this.offset.x,i=t.clientY-this.offset.y,o=window.innerWidth-e.offsetWidth,s=window.innerHeight-e.offsetHeight;e.style.left=`${Math.min(Math.max(n,0),o)}px`,e.style.top=`${Math.min(Math.max(i,0),s)}px`},stopDrag(){this.isDragging=!1,document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.stopDrag)},onTextareaFocus(){this.isTextareaFocused=!0},onTextareaBlur(){this.isTextareaFocused=!1}}},y=w,k=(0,l.A)(y,b,x,!1,null,"26324870",null),T=k.exports,A={name:"App",components:{NavBar:d,BackToTopButton:m,ChatbotButton:T}},S=A,M=(0,l.A)(S,o,s,!1,null,"60db1364",null),j=M.exports,E=n(6178),L=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-container"},[e("div",{staticClass:"content-container"},[e("h1",[t._v("主页开发中...")])])])}],B={name:"HomeComponent"},O=B,H=(0,l.A)(O,L,P,!1,null,"989fd544",null),R=H.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-list-container"},[e("div",{staticClass:"centered-content"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.posts}},[e("el-table-column",{attrs:{prop:"index",label:"序号",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.$index+1))])]}}])}),e("el-table-column",{attrs:{label:"封面",width:"200"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticStyle:{"text-align":"left","padding-left":"75px"}},[t._v(" 封面 ")])]},proxy:!0},{key:"default",fn:function(t){return[e("img",{staticStyle:{width:"110px",height:"100px","border-radius":"8px","object-fit":"cover","margin-left":"75px"},attrs:{src:t.row.cover,alt:"文章封面图"}})]}}])}),e("el-table-column",{attrs:{prop:"title",label:"文章标题"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticStyle:{"text-align":"left","padding-left":"135px"}},[t._v(" 文章标题 ")])]},proxy:!0},{key:"default",fn:function(n){return[e("router-link",{staticClass:"router-link",attrs:{to:"/ai-techs/"+n.row.id}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.row.title))])])]}}])})],1)],1)])},D=[],F={name:"SiteList",data(){return{posts:[{id:1,title:"从零到精通提示工程(Prompt Engineering)",cover:"/ai-tech/Ai-TechArticles/PromptEngineeringGuide/images/封面图.png"},{id:2,title:"检索增强生成（RAG）技术详解与LangChain实践",cover:"/ai-tech/Ai-TechArticles/RetrievalAugmentedGeneration/images/封面图.png"}]}}},G=F,V=(0,l.A)(G,$,D,!1,null,"7f75c184",null),I=V.exports,z=function(){var t=this,e=t._self._c;return e("div",[e("div",{domProps:{innerHTML:t._s(t.post.content)}})])},N=[],Y={name:"SiteDetail",data(){return{post:{title:"",content:""}}},mounted(){const t=this.$route.params.id;"1"===t?this.fetchHtmlContent("Ai-TechArticles/PromptEngineeringGuide/PromptEngineeringGuide.html","从零到精通提示工程(Prompt Engineering)"):"2"===t?this.fetchHtmlContent("Ai-TechArticles/RetrievalAugmentedGeneration/RetrievalAugmentedGeneration.html","检索增强生成（RAG）技术详解与LangChain实践"):this.fetchPost(t)},methods:{fetchPost(t){const e=[{id:1,title:"从零到精通提示工程(Prompt Engineering)",content:"Content of the first post."},{id:2,title:"检索增强生成（RAG）技术详解与LangChain实践",content:"Content of the second post."}];this.post=e.find((e=>e.id===parseInt(t)))},fetchHtmlContent(t,e){fetch(`/ai-tech/${t}`).then((t=>{if(!t.ok)throw new Error("网络响应不正常");return t.text()})).then((t=>{this.post={title:e,content:t}})).catch((t=>console.error("加载HTML内容时出错:",t)))}}},q=Y,Q=(0,l.A)(q,z,N,!1,null,null,null),W=Q.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-container"},[e("div",{staticClass:"content-container"},[e("div",{domProps:{innerHTML:t._s(t.projectReadMeContent)}})])])},Z=[],J={name:"AboutMe",data(){return{projectReadMeContent:""}},mounted(){this.fetchProjectReadMe()},methods:{fetchProjectReadMe(){fetch("/ai-tech/ProjectReadMe.html").then((t=>{if(!t.ok)throw new Error("加载 ProjectReadMe 失败");return t.text()})).then((t=>{this.projectReadMeContent=t})).catch((t=>console.error("加载 ProjectReadMe 时出错:",t)))}}},K=J,U=(0,l.A)(K,X,Z,!1,null,"03c20216",null),tt=U.exports;i["default"].use(E.Ay);const et=[{path:"/",name:"Home",component:R},{path:"/ai-techs",name:"AiTechs",component:I},{path:"/ai-techs/:id",name:"SiteDetail",component:W},{path:"/about",name:"AboutMe",component:tt}],nt=new E.Ay({mode:"history",base:"/ai-tech/",routes:et});var it=nt;i["default"].use(C()),i["default"].config.productionTip=!1,new i["default"]({router:it,render:t=>t(j)}).$mount("#app")},855:function(t,e,n){t.exports=n.p+"img/chatbot.270dae2d.png"}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,i,o,s){if(!i){var a=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],s=t[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(r=!1,s<a&&(a=s));if(r){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/ai-tech/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,a=i[0],r=i[1],l=i[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var u=l(n)}for(e&&e(i);c<a.length;c++)s=a[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},i=self["webpackChunkai_tech"]=self["webpackChunkai_tech"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(3870)}));i=n.O(i)})();
//# sourceMappingURL=app.0ec93cdc.js.map