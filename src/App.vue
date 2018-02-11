<template>
  <div id="app">
    <router-view/>    
</div>
</template>

<script>
import toolbar from './components/ToolBar'
export default {
  name: 'app', 
  components:{
    toolbar
  }  
}
</script>

<style>
#app{
  width: 100%;
  padding-bottom: 3em;
}
</style>