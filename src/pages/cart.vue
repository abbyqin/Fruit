<template>
	<div class="list">
		<cartItem></cartItem>
		<toolbar toolActive="3"></toolbar>
	</div>
</template>

<script>
import toolbar from '@/components/ToolBar';
import cartItem from '@/components/cartItem'
export default{
	components:{
		toolbar,
		cartItem
	}  
}
</script>
<style scoped>
	.ul3{
		/*margin-top: 1em;*/
		padding-top: 4em
	}
</style>