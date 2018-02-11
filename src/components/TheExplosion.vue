<template>
	<ul class="exp-ul">
		<li class="exp-li" v-for="(item,index) in explosionList">
			<router-link to="/detail">
				<div class="explosion">		
					<div class="proImg" :class="index%2 != 1 ? 'ex-img-left' :'ex-img-right'">
						<img :src="item.pic" alt="商品图片">
					</div>
					<div class="pro-discript" :class="index%2 != 1 ? 'ex-dsc-right' :'ex-dsc-left'">
						<div class="big-title">{{item.proName}}</div>
						<div class="second-title">{{item.secondTitle}}</div>
						<ul class="discript-ul">
							<li v-for="minItem in item.discription">*{{minItem}}</li>
						</ul>
						<div class="buy-wrap">
							<div class="p-wrap">￥<b class="price">{{item.price}}</b>.2</div>
							<button class="buyNow">立即购买</button>
						</div>
					</div>
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
import explosiondata from "@/mock/explosion.js";
export default {
	data(){
		return{
			explosionList:""
		}
	},
	props:["imgClass","txtClass"],
	methods:{
		explosion:function(){
			let promise = new Promise((resolve, reject) => {
				this.explosionList = explosiondata.data.explosion;
			}).catch(err=>{
				console.log(err)
			})
		}
	},
	created(){
		this.explosion();
	}
}
</script>

<style scoped>
.exp-li{
	margin: 1em 0;
}
.explosion {
	border: 1px solid #c48540;
	margin: 0 6px;
	border-radius: 8px;
	padding: 10px;
	position: relative;
	overflow: hidden;
}
.proImg{
	position: absolute;
	width: 50%;
	height: auto;	
	bottom: 6px;
	z-index: -1;
}
.proImg img{
	width: 100%;
}
.pro-discript {    
	overflow: hidden;
}
.ex-img-left{
	left: 0;
}
.ex-img-right{
	right: 0;
}
.ex-dsc-right{
	float: right;
}
.ex-dsc-left{
	float: left;
}
.big-title {
	font-size: 1.8em;
	font-weight: bold;
	color: #ddb075;
}
.second-title {
	font-weight: bold;
	color: #9f9d9b;
	text-align: center;
	font-size: 1.3em;
}
.discript-ul {
	width: 90%;   
	padding: 0.5em 0;
	border-bottom: 1px solid #c48540;
	border-top: 1px solid #c48540;
}
.ex-dsc-right .discript-ul{
	margin: 1em 0 1em 10%;
}
.ex-dsc-left .discript-ul{
	/*margin: 1em 0;*/
}
.discript-ul li {
	color: #9f9d9b;
	line-height: 1.5em;
	padding-left: 0.8em;
	font-size: 0.8em;
}
.buy-wrap {    
	position: relative;
}
.ex-dsc-left .buy-wrap{
	padding-left: 0;
}
.ex-dsc-right .buy-wrap{
	padding-left: 2em;
}
.p-wrap {
	color: #b7681e;
}
.price {
	font-size: 3em;
	font-weight: bold;
}
.buyNow {
	background-color: #be772c;
	border: 1px solid #be772c;
	color: #fff;
	padding: 3px 5px;
	border-radius: 1em;
	position: absolute;
	bottom: 3px;
}
.ex-dsc-left .buyNow{
	left: 50%;
}
.ex-dsc-right .buyNow{
	left: auto;
	right:0;
}
</style>