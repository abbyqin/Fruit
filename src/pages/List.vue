<template>
	<div class="list">
		<sortlist></sortlist>
		<ul class="ul3">
			<li> <listItem></listItem> </li>
			<li> <listItem></listItem> </li>
			<li> <listItem></listItem> </li>
			<li> <listItem></listItem> </li>
			<li> <listItem></listItem> </li>			
		</ul>
		<toolbar toolActive="2"></toolbar>
	</div>
</template>

<script>
import sortlist from '@/components/Sort';
import listItem from '@/components/new';
import toolbar from '@/components/ToolBar'
export default{
	components:{
		sortlist,
		listItem,
		toolbar
	}  
}
</script>
<style scoped>
	.ul3{
		/*margin-top: 1em;*/
		padding-top: 4em
	}
</style>