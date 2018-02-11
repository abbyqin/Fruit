<template>
	<ul class="toolbar fixedTool">
		<li :class="toolActive=='1'? 'active' : ''"><router-link to="/">首页</router-link></li>
		<li :class="toolActive=='2'? 'active' : ''">
			<router-link to="/list">分类</router-link>
		</li>
		<li :class="toolActive=='3'? 'active' : ''">
			<router-link to="/cart">购物车</router-link>
		</li>
		<li :class="toolActive=='4'? 'active' : ''">
			<router-link to="/me">我的</router-link>
		</li>
	</ul>
</template>
<script>
export default {
	props:["toolActive"],
	methods:{
		
	}
}
</script>
<style scoped>
.toolbar li{
	width: 25%;
	float: left;
	text-align: center;
	line-height: 3em;
	border-top: 1px solid #b76a1f;
}
a,a:hover,a:focus,a:visited{
	text-decoration: none;
	color: #585858;
}
li.active a{
	color:#b76a1f;
}
</style>