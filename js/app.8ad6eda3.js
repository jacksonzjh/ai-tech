(function(){"use strict";var t={8717:function(t,n,e){var r=e(6848),o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},i=[],u=function(){var t=this,n=t._self._c;return n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/ai-techs"}},[t._v("AI Techs")])],1)},s=[],a={name:"NavBar"},c=a,l=e(1656),f=(0,l.A)(c,u,s,!1,null,"4149da0e",null),p=f.exports,h={name:"App",components:{NavBar:p}},v=h,d=(0,l.A)(v,o,i,!1,null,null,null),_=d.exports,m=e(6178),y=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("欢迎来到我的AI技术网站")])])}],A={name:"HomeComponent"},w=A,O=(0,l.A)(w,y,b,!1,null,null,null),x=O.exports,g=function(){var t=this,n=t._self._c;return n("div",[n("h2",[t._v("Site Posts")]),n("ul",t._l(t.posts,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/ai-techs/"+e.id}},[t._v(t._s(e.title))])],1)})),0)])},k=[],P={name:"SiteList",data(){return{posts:[{id:1,title:"First Post"},{id:2,title:"Second Post"}]}}},j=P,C=(0,l.A)(j,g,k,!1,null,null,null),S=C.exports,T=function(){var t=this,n=t._self._c;return n("div",[n("h2",[t._v(t._s(t.post.title))]),n("p",[t._v(t._s(t.post.content))])])},B=[],F={name:"SiteDetail",data(){return{post:{title:"",content:""}}},mounted(){const t=this.$route.params.id;this.fetchPost(t)},methods:{fetchPost(t){const n=[{id:1,title:"First Post",content:"Content of the first post."},{id:2,title:"Second Post",content:"Content of the second post."}];this.post=n.find((n=>n.id===parseInt(t)))}}},I=F,N=(0,l.A)(I,T,B,!1,null,null,null),D=N.exports;r.Ay.use(m.Ay);var H=new m.Ay({routes:[{path:"/",name:"home",component:x},{path:"/ai-techs",name:"siteList",component:S},{path:"/ai-techs/:id",name:"siteDetail",component:D}]});r.Ay.config.productionTip=!1,new r.Ay({router:H,render:t=>t(_)}).$mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var s=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(s=!1,i<u&&(u=i));if(s){t.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,u=r[0],s=r[1],a=r[2],c=0;if(u.some((function(n){return 0!==t[n]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(a)var l=a(e)}for(n&&n(r);c<u.length;c++)i=u[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},r=self["webpackChunkai_tech"]=self["webpackChunkai_tech"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(8717)}));r=e.O(r)})();
//# sourceMappingURL=app.8ad6eda3.js.map