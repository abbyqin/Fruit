<template>
	<ul class="couponWrap">
		<li v-for="coupon in couponList">
			<div class="coupon">
				<el-row>
					<el-col :span="9">
						<div class="grid-content cprice">
							<b class="m-value">{{coupon.price}}</b>
						</div>
					</el-col>
					<el-col :span="15">
						<div class="grid-content">		
							<span class="rmb">RMB</span>
							<div class="getBtn">立即领取</div>
						</div>
					</el-col>
				</el-row>
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
.coupon-ul li{
	float: left;
	width: 33.33%
}
.couponWrap{
	width: 100%;
	margin: 0 auto 1em auto;
}
.couponWrap li{
	float: left;
	width: 33.33%
}
.coupon {
	width: 96%;
	background-color: #90ba81;
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
	font-size: 2em;
	text-align: right;
}
.rmb {
	color: #fff;
	font-size: 0.7em;
}
.text {
	font-size: 0.3em;
	font-weight: bold;
}
.getBtn {
	   /*  width: 5em;
	       background-color: #fff; */
    font-size: 0.5em;
    border-radius: 5px;
    margin-top: 5px;
    /*text-align: center;*/
}
.shadow {
	width: 100%;
	height: 2em;
	background-color: #fff;
	position: absolute;
	bottom: 0;
	left: 0;
	border-top: 1px solid #e4e4e4;
}
.cprice{
	text-align: center;
}
</style>