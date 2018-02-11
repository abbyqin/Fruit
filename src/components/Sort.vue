<template>
	<ul class="sort">
		<li>综合</li>
		<li>销量</li>
		<li>上新</li>
		<li>价格</li>
	</ul>
</template>
<style scoped>
.sort {
	position: fixed;
	left: 0;
	width: 100%;
	top: 0;
	z-index: 1;
	background-color: #fff;
}
.sort li{
	width: 25%;
	height: 3em;
	border-bottom: 1px solid #b76a1f;
	text-align: center;
	float: left;
	line-height: 3em;
}
</style>