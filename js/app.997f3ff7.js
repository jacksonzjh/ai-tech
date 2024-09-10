(function(){"use strict";var t={9464:function(t,e,n){var o=n(6848),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("BackToTopButton"),e("ChatbotButton"),t._v(" "),t._m(0)],1)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("p",[e("a",{attrs:{href:"mailto:jacksonzjh2023@gmail.com"}},[t._v("Email")]),t._v(" • "),e("a",{attrs:{href:"https://github.com/jacksonzjh",target:"_blank"}},[t._v("Github")]),t._v(" • "),e("a",{attrs:{href:"https://huggingface.co/Qwen/Qwen2-7B-Instruct",target:"_blank"}},[t._v("AI")])]),e("p",[t._v("© 2024-2024 • Jinhong | Made By AI")])])}],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"navbar-container"},[e("div",{staticClass:"navbar-left"},[e("router-link",{staticClass:"navbar-title",attrs:{to:"/"}},[t._v("惊鸿")])],1),e("div",{staticClass:"navbar-right"},[e("router-link",{staticClass:"navbar-link",class:{active:"/ai-techs"===t.$route.path},attrs:{to:"/ai-techs"}},[t._v("AI前沿技术")]),e("router-link",{staticClass:"navbar-link",class:{active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v("关于")])],1)])])},s=[],c=n(1656),l={},u=(0,c.A)(l,a,s,!1,null,"73d0310e",null),d=u.exports,h=function(){var t=this,e=t._self._c;return t.isVisible?e("div",{staticClass:"back-to-top",on:{click:t.scrollToTop,mouseover:function(e){t.isHovered=!0},mouseleave:function(e){t.isHovered=!1}}},[e("img",{staticClass:"back-to-top-icon",attrs:{src:n(6937),alt:"Back to Top"}})]):t._e()},f=[],p={name:"BackToTopButton",data(){return{isVisible:!1}},mounted(){window.addEventListener("scroll",this.toggleVisibility)},beforeDestroy(){window.removeEventListener("scroll",this.toggleVisibility)},methods:{toggleVisibility(){this.isVisible=window.pageYOffset>300},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},v=p,m=(0,c.A)(v,h,f,!1,null,"02ecc35e",null),g=m.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"chatbot-button",on:{mouseover:function(e){t.isHovered=!0},mouseleave:function(e){t.isHovered=!1}}},[e("img",{attrs:{src:t.isHovered?t.hoverImage:t.normalImage,alt:"Chatbot Button"}})])},_=[],w={data(){return{isHovered:!1,normalImage:n(2267),hoverImage:n(855)}}},A=w,C=(0,c.A)(A,b,_,!1,null,"6f8111cc",null),y=C.exports,k={name:"App",components:{NavBar:d,BackToTopButton:g,ChatbotButton:y}},T=k,x=(0,c.A)(T,i,r,!1,null,"111feed3",null),M=x.exports,j=n(6178),P=function(){var t=this;t._self._c;return t._m(0)},H=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-container"},[e("div",{staticClass:"content-container"},[e("h1",[t._v("主页开发中...")])])])}],O={name:"HomeComponent"},B=O,S=(0,c.A)(B,P,H,!1,null,"989fd544",null),E=S.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"site-list-container"},[e("div",{staticClass:"centered-content"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.posts}},[e("el-table-column",{attrs:{prop:"index",label:"序号",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.$index+1))])]}}])}),e("el-table-column",{attrs:{label:"封面",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{width:"100px",height:"100px","border-radius":"8px"},attrs:{src:t.row.cover,alt:"文章封面图"}})]}}])}),e("el-table-column",{attrs:{prop:"title",label:"文章标题"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("router-link",{staticClass:"router-link",attrs:{to:"/ai-techs/"+n.row.id}},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.row.title))])])]}}])})],1)],1)])},G=[],I={name:"SiteList",data(){return{posts:[{id:1,title:"Typra - Markdown编辑器指南",cover:"/ai-tech/Ai-TechArticles/typra.png"},{id:2,title:"从零到精通提示工程(Prompt Engineering)",cover:"/ai-tech/Ai-TechArticles/PromptEngineeringGuide/images/封面图.png"},{id:3,title:"检索增强生成（RAG）技术详解与LangChain实践",cover:"/ai-tech/Ai-TechArticles/RetrievalAugmentedGeneration/images/封面图.png"}]}}},L=I,V=(0,c.A)(L,R,G,!1,null,"fe57ae64",null),$=V.exports,D=function(){var t=this,e=t._self._c;return e("div",[e("div",{domProps:{innerHTML:t._s(t.post.content)}})])},z=[],N={name:"SiteDetail",data(){return{post:{title:"",content:""}}},mounted(){const t=this.$route.params.id;"1"===t?this.fetchHtmlContent("Ai-TechArticles/TypraMdEditorGuide.html","Typra - Markdown编辑器指南"):"2"===t?this.fetchHtmlContent("Ai-TechArticles/PromptEngineeringGuide/PromptEngineeringGuide.html","从零到精通提示工程(Prompt Engineering)"):"3"===t?this.fetchHtmlContent("Ai-TechArticles/RetrievalAugmentedGeneration/RetrievalAugmentedGeneration.html","检索增强生成（RAG）技术详解与LangChain实践"):this.fetchPost(t)},methods:{fetchPost(t){const e=[{id:1,title:"Typra - Markdown编辑器指南",content:"Content of the first post."},{id:2,title:"AI必学：从零到精通提示工程(Prompt Engineering)",content:"Content of the second post."}];this.post=e.find((e=>e.id===parseInt(t)))},fetchHtmlContent(t,e){fetch(`/ai-tech/${t}`).then((t=>{if(!t.ok)throw new Error("网络响应不正常");return t.text()})).then((t=>{this.post={title:e,content:t}})).catch((t=>console.error("加载HTML内容时出错:",t)))}}},Q=N,F=(0,c.A)(Q,D,z,!1,null,null,null),J=F.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-container"},[e("div",{staticClass:"content-container"},[e("div",{domProps:{innerHTML:t._s(t.projectReadMeContent)}})])])},q=[],K={name:"AboutMe",data(){return{projectReadMeContent:""}},mounted(){this.fetchProjectReadMe()},methods:{fetchProjectReadMe(){fetch("/ai-tech/ProjectReadMe.html").then((t=>{if(!t.ok)throw new Error("加载 ProjectReadMe 失败");return t.text()})).then((t=>{this.projectReadMeContent=t})).catch((t=>console.error("加载 ProjectReadMe 时出错:",t)))}}},U=K,W=(0,c.A)(U,Y,q,!1,null,"03c20216",null),X=W.exports;o["default"].use(j.Ay);const Z=[{path:"/",name:"Home",component:E},{path:"/ai-techs",name:"AiTechs",component:$},{path:"/ai-techs/:id",name:"SiteDetail",component:J},{path:"/about",name:"AboutMe",component:X}],tt=new j.Ay({mode:"history",base:"/ai-tech/",routes:Z});var et=tt,nt=n(9143),ot=n.n(nt);o["default"].use(ot()),o["default"].config.productionTip=!1,new o["default"]({router:et,render:t=>t(M)}).$mount("#app")},6937:function(t,e,n){t.exports=n.p+"img/back-to-top.36a9d0fb.svg"},855:function(t,e,n){t.exports=n.p+"img/chatbot.c0570c78.png"},2267:function(t,e,n){t.exports=n.p+"img/chatbot_alt.4c4ece5b.png"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,i,r){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,r<a&&(a=r));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/ai-tech/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(o);l<a.length;l++)r=a[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkai_tech"]=self["webpackChunkai_tech"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9464)}));o=n.O(o)})();
//# sourceMappingURL=app.997f3ff7.js.map