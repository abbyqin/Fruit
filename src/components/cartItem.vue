<template>
	<div class="cartItem">
		<div class="cart" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" :style="deleteSlider">
			<el-row>
				<el-col :span="6">
					<div class="cart-img grid-content">
						<img src="static/img/fruit-orange.png" alt="商品图片">
					</div>
				</el-col>
				<el-col :span="16">
					<div class="grid-content">
						<font>production name</font> <br>
						<span>price</span>
					</div>
				</el-col>
				<el-col :span="2">
					<div class="grid-content">
						<el-checkbox v-model="checked"></el-checkbox>
					</div>					
				</el-col>
			</el-row>
			<div class="cart-delete remove" ref="remove">删除</div>
		</div>
		
	</div>
</template>
<script>
export default{
	data () {
		return {
			checked: true,
			startX:0,
			moveX:0,
			endX:0,
			distanceX:0,
			deleteSlider:""
		};
	},
	methods:{
		touchstart:function(e){
			console.log("start");
			e = e || event;
			// console.log(e.touches);
			if(e.touches.length==1){
				this.startX = e.touches[0].clientX;
				console.log(this.startX);
			}
		},
		touchmove:function(e){
			console.log("move");
			e = e||event;
			let wd = this.$refs.remove.offsetWidth;
			// console.log(wd);
			if(e.touches.length == 1){
				this.moveX = e.touches[0].clientX;
				//手指实时偏移的距离
				this.distanceX = this.startX-this.moveX;
				// console.log(this.distanceX);
				if(this.distanceX <0 || this.distanceX == 0){
					this.deleteSlider = "transform:translateX(0px)";
				}else{
					this.deleteSlider = "transform:translateX(-"+this.distanceX+"px)";
					if(this.distanceX>wd){
						this.deleteSlider = "transform:translateX(-"+wd+"px)";
					}
				}
			}
		},
		touchend:function(e){
			console.log("end");
			e = e || event;
			let wd = this.$refs.remove.offsetWidth;
			// console.log(e.changedTouches);
			if(e.changedTouches.length == 1){
				let endX = e.changedTouches[0].clientX;
				this.distanceX = this.startX-endX;
				console.log("startX : "+this.startX);
				console.log("endX : "+endX);
				console.log(this.distanceX);
				if(this.distanceX<(wd/2)){
					this.deleteSlider = "transform:translateX(0px)";
				}else{
					this.deleteSlider = "transform:translateX(-"+wd+"px)";
				}
			}
		}

	},
	mounted(){

	},
	components:{
	}
}
</script>
<style scoped>
.cartItem{
	position: relative;
	overflow-x: hidden;
}
.cart-delete{
	position: absolute;
	right: -80px;
	top: 0;
	width: 80px;
	background-color: #ff0000;
	height: 100%;
	line-height: 6em;
	text-align: center;
	color: #fff;
}
.cart{
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	transition: 0.3s;
}
</style>