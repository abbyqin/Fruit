<template>
	<ul class="couponWrap">
		<li v-for="coupon in couponList">
			<div class="coupon">		
				<div class="c-top">
					<div class="ct-4 pull-left">
						<b class="m-value">{{coupon.price}}</b><span class="rmb">RMB</span>
					</div>
				</div>
				<div class="getBtn">立即领取</div>
				<div class="shadow"></div>
			</div>
		</li>
	</ul>
</template>
<script>
import mockdata from "@/mock/coupon.js";
export default{
	// props:["price"],
	data(){
		return{
			couponList:""
		}
	},
	methods:{
		coupon:function(){
			let promise = new Promise((resolve, reject) => {
				this.couponList = mockdata.data.coupon;
			}).catch(err=>{
				console.log(err)
			})
		},		
	},
	mounted(){
		this.coupon()
	},
}
</script>
<style scoped>
.couponWrap{
	width: 100%;
	margin: 0 auto
}
.couponWrap li{
	float: left;
	width: 33.33%
}
.coupon {
	width: 5em;
	height: 5em;
	background-color: #90ba81;
	border-radius: 2.5em;
	position: relative;
	margin: 0 auto;
}
.c-top {
	clear: both;
	overflow: hidden;
	margin: 0 auto;
}
.ct-4 {
	width: 100%;
	text-align: center;
}
.ct-6 {
	width: 40%;
}
.m-value {
	color: #fff;
	font-size: 1.5em;
	text-align: right;
}
.rmb {
	color: #fff;
	font-size: 0.7em;
	line-height: 5em;
}
.text {
	font-size: 0.3em;
	font-weight: bold;
}
.getBtn {
	width: 5em;
	background-color: #fff;
	font-size: 0.6em;
	border-radius: 5px;
	margin: 0 auto;
	text-align: center;
	position: absolute;
	bottom: 20px;
	left: 50%;
	margin-left: -2.5em;
}
.shadow {
	width: 100%;
	height: 15px;
	background-color: #fff;
	position: absolute;
	bottom: 0;
	left: 0;
	border-top: 1px solid #e4e4e4;
}
</style>