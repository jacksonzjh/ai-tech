import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'



export default [{
    path: "/",
    component: ShowBlog
  },
  {
    path: "/add",
    component: AddBlog
  },
  {
  	path:"/blog/:id",component:SingleBlog
  },
  {
  	path:"/edit/:id",component:EditBlog
  }





]
/*
安装路由步骤

1.安装vue-router  => 使用命令行工具安装
2.引入vue-router >    import VueRouter from 'vue-router'
3.使用vue-router      Vue.use(VueRouter)
4.实例化vue-router     var router = new VueRouter({
	routes:routers   //如果要将配置的路由放在一个js文件中，则先要引入js文件。
})
5.在router.js 中配置相应得路由
6.在vue实例中使用路由





*/


/*
过滤器 filter

1.全局过滤器 filter

Vue.filter("to-uppercase",function(value){
	return value.toUpperCase();
})

2.局部过滤器 filters

const vm = new Vue({
	el:"#app",
	filters:{
		"to-uppercase":function(value){
			return value.toUpperCase();
		}
	}
})


*/

/*
vue 局部组件的结构

<template></template>    => 模板，必须要有一个根标签
<script>     => 脚本，  如果这个组件要使用其他组件，那么也要事先引入
	export default {
		name:'component-name',
		date:function(){
			reuturn {
	
			}
		}
	}


</script>
<style>    => 样式，如果是局部的样式，那么必须要添加scoped 关键字




</style>




*/
