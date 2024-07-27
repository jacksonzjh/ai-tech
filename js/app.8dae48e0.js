(function(){"use strict";var t={5620:function(t,n,o){var e=o(6848),r=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("NavBarComponent"),n("router-view")],1)},i=[],l=function(){var t=this,n=t._self._c;return n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/blogs"}},[t._v("Blogs")])],1)},u=[],s={name:"NavBarComponent"},a=s,c=o(1656),f=(0,c.A)(a,l,u,!1,null,"8b867018",null),p=f.exports,v={name:"App",components:{NavBarComponent:p}},d=v,h=(0,c.A)(d,r,i,!1,null,null,null),m=h.exports,g=o(6178),_=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("Welcome to My Blog")])])}],y={name:"HomeComponent"},B=y,w=(0,c.A)(B,_,b,!1,null,null,null),A=w.exports,O=function(){var t=this,n=t._self._c;return n("div",[n("h2",[t._v("Blog Posts")]),n("ul",t._l(t.posts,(function(o){return n("li",{key:o.id},[n("router-link",{attrs:{to:"/blogs/"+o.id}},[t._v(t._s(o.title))])],1)})),0)])},x=[],k={name:"BlogList",data(){return{posts:[{id:1,title:"First Blog Post"},{id:2,title:"Second Blog Post"}]}}},P=k,C=(0,c.A)(P,O,x,!1,null,null,null),j=C.exports,F=function(){var t=this,n=t._self._c;return n("div",[n("h2",[t._v(t._s(t.post.title))]),n("p",[t._v(t._s(t.post.content))])])},N=[],T={name:"BlogDetail",data(){return{post:{title:"",content:""}}},mounted(){const t=this.$route.params.id;this.fetchPost(t)},methods:{fetchPost(t){const n=[{id:1,title:"First Blog Post",content:"Content of the first post."},{id:2,title:"Second Blog Post",content:"Content of the second post."}];this.post=n.find((n=>n.id===parseInt(t)))}}},D=T,H=(0,c.A)(D,F,N,!1,null,null,null),M=H.exports;e.Ay.use(g.Ay);var S=new g.Ay({routes:[{path:"/",name:"home",component:A},{path:"/blogs",name:"blogs",component:j},{path:"/blogs/:id",name:"blogDetail",component:M}]});e.Ay.config.productionTip=!1,new e.Ay({router:S,render:t=>t(m)}).$mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,i){if(!e){var l=1/0;for(c=0;c<t.length;c++){e=t[c][0],r=t[c][1],i=t[c][2];for(var u=!0,s=0;s<e.length;s++)(!1&i||l>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[s])}))?e.splice(s--,1):(u=!1,i<l&&(l=i));if(u){t.splice(c--,1);var a=r();void 0!==a&&(n=a)}}return n}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[e,r,i]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,i,l=e[0],u=e[1],s=e[2],a=0;if(l.some((function(n){return 0!==t[n]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(s)var c=s(o)}for(n&&n(e);a<l.length;a++)i=l[a],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},e=self["webpackChunkblog"]=self["webpackChunkblog"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[504],(function(){return o(5620)}));e=o.O(e)})();
//# sourceMappingURL=app.8dae48e0.js.map