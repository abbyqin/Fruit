<template>
	<div class="detail pb1em">
		<img src="../assets/img/detail/01/1.png" alt="商品详情">
		<img src="../assets/img/detail/01/2.png" alt="商品详情">
		<img src="../assets/img/detail/01/3.png" alt="商品详情">
		<img src="../assets/img/detail/01/4.png" alt="商品详情">
		<img src="../assets/img/detail/01/5.png" alt="商品详情">		
		<ul class="detail-tab fixedTool">
			<li>购物车</li>
			<li><div class="btn addCart" v-on:click="openPan">加入购物车</div></li>
			<li><div class="btn buy">立即购买</div></li>
		</ul>
		<div class="addCartPanel">
			<div class="p-content">
				<div class="close" v-on:click="closePan">×</div>
				<div class="p-header">
					<div class="proImg">
						<img src="../assets/img/detail/01/1.png" alt="商品图片">
					</div>
					<div class="proDisc">
						<div class="price">￥49.9</div>
						<div class="stock">库存 <span class="stockNum">999</span>件</div>
						<span>请选择商品</span>
					</div>					
				</div>
				<div class="p-body">
					<dl class="proList-dl">
						<dt>清选择商品</dt>
						<dd><div v-on:click="selectPro">樱桃500g</div></dd>
						<dd><div v-on:click="selectPro">樱桃500g</div></dd>
						<dd><div v-on:click="selectPro">樱桃500g</div></dd>
					</dl>
					<div class="buyNum">
						<div>购买数量</div>
						<div class="num-rgt">
							<div class="count reduce pull-left">-</div>
							<div class="number pull-left">
								<input type="text" value="1">
							</div>
							<div class="count add pull-left">+</div>
						</div>
					</div>
				</div>				
			</div>
			<div class="p-footer">
				<div class="btn okBtn">确定</div>
			</div>
		</div>
	</div>	
</template>

<script>
import sortlist from '../components/Sort';
import pickitem from '../components/PickItem';
export default{
	components:{
		sortlist,
		pickitem
	},
	methods:{
		closePan:function(){
			$(".addCartPanel").hide();
			console.log("guanbi");
		},
		openPan:function(){
			$(".addCartPanel").show();
		},
		selectPro:function(){
			$(".proList-dl").find('dd div').removeClass('cur');
			$(event.currentTarget).addClass('cur');
			console.log(event.currentTarget);
		}
	}
}
</script>
<style scoped>
.detail-tab li{
	width: 33.33%;
	text-align: center;
	line-height: 3em;
	height: 3em;
	float: left;		
	border-top: 1px solid #b76a1f;
}
.btn{
	width: 100%;
	height: 100%;
	text-align:center;
	color: #fff;
}
.buy{
	background-color: #9a0000;
}
.addCart {
	background-color: #b76a1f;
}
.addCartPanel {
	position: fixed;
	bottom: 0;
	background-color: #fff;
	height: 70%;
	width: 100%;
	display: none;
}
.p-content{
	padding: 10px;
}
.close{
	position: absolute;
	right: 10px;
	top: 0;
	z-index: 2;
}
.p-header {
	position: relative;
}
.proImg {
	width: 7em;
	height: 7em;
	overflow: hidden;
	position: absolute;
	top: -3em;
	padding: 5px;
	background-color: #fff;
}
.proDisc{
	margin-left: 8em;
}
.price {
	font-size: 1.5em;
	color: #9a0000;
}
.okBtn{
	height: 3em;
	background-color: #9a0000;
	line-height: 3em;
	position: absolute;
	bottom: 0;
	width: 100%;
}
.proList-dl{
	overflow: hidden;
	margin: 1em 0;
}
.proList-dl dt{
	margin: 0.5em 0;
}
.proList-dl dd{
	width: 50%;
	text-align: center;
	height: 2em;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	line-height: 1.5em;
	float: left;
}
.proList-dl dd div{
	border: 1px solid #fff;
	border-radius: 3px;
}
.buyNum {
	position: relative;
}
.num-rgt{
	position: absolute;right: 0;
	top: 0;
}
.count{
	width: 1.5em;
	height: 1.5em;
	background-color: #5a5a5a;
	color: #fff;
	text-align: center;
	line-height: 1.5em;
	border:1px solid #5a5a5a;
}
.number{
	width: 4em;
	height: 1.5em;
	border: 1px solid #a9a9a9;
	margin: 0 3px;
}
.number input{
	width: 100%;
	height: 100%;
	display: block;
	border:none;
	text-align: center;
}
.cur{
	color: #9a0000;
	border: 1px solid #9a0000 !important;
}
</style>