<template>
	<ul class="nav-menu" >
		<li class="menuLi" v-for="menuItem in menuList">
			<div class="menu-wrap">
				<div class="border">
					<div class="menu-text">{{menuItem.name}}</div>
				</div>				
			</div>
		</li>
	</ul>
</template>

<script>
import menudata from "@/mock/menu.js";
export default{	
	data(){
		return{
			menuList:""
		}
	},
	// props:["menuTxt"],
	methods:{
		sendMsgToParent:function(){
			this.$emit("listenToChildEvent","this message is from child");
		},
		getMenuList:function(){
			let promise = new Promise((resolve, reject) => {
				this.menuList = menudata.data.menu;
				console.log(this.menuList);
			}).catch(err=>{
				console.log(err)
			})

		}
	},
	mounted(){
		this.getMenuList();
	},
}
</script>

<style scoped>
.nav-menu {
	  width: 100%;
  margin: 0 auto;
}
.menuLi{
	float: left;
  width: 20%; 
}
.menu-wrap {	
 	margin: 0 3px; 
/*padding: 5px 0; */
	background: -webkit-linear-gradient(#192713, #334122);
	background: -moz-linear-gradient(#192713, #334122);
	background: -ms-linear-gradient( #192713, #334122);
	background: -o-linear-gradient(#192713, #334122);
	background: linear-gradient(#192713, #334122);
	/*background-image: url('../assets/img/c.png');*/
}
.border {
    padding: 5px;
}
.menu-text {
    text-align: center;
    color: #fff;
    padding: 10px;
    width: 1em;
    margin: 0 auto;
    border: 1px solid #ddd;
}
</style>