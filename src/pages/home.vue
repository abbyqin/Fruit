<template>
  <div class="index">
    <img src="static/img/index.png" alt="首页图片">
    <div class="coupon-ul">
     <coupon></coupon>
   </div>
   <div class="nav-ul">     
     <navmenu></navmenu>
   </div>
   <div class="ban-title">
    <img src="static/img/title1.png" alt="店内爆款">
  </div>
  <div class="explosion-ul">
    <theexplosion></theexplosion>
  </div>
  <div class="ban-title">
    <img src="static/img/title2.png" alt="店内爆款">
  </div>
  <div class="new-ul">
      <newitem></newitem>
  </div>
  <div class="img">
    <img src="static/img/fruit-banner.png" alt="果园直采">
  </div>
  <div class="ban-title">
    <img src="static/img/title3.png" alt="果园直采">
  </div>
  <div class="ul3">
    <pickitem></pickitem>
  </div>
  <toolbar toolActive="1"></toolbar>
</div>
</template>

<script>
import coupon from '../components/Coupon';
import navmenu from '../components/Navmenu';
import theexplosion from '../components/TheExplosion';
import newitem from '../components/newItem'
import pickitem from '../components/PickItem'
import toolbar from '../components/ToolBar'
export default {
  data(){
    return{
      parentMsg:"你的分",
      // couponList:""
    }
  },
  methods:{


  },
  mounted(){
    // this.coupon()
  },
  components:{
    coupon,
    navmenu,
    theexplosion,
    newitem,
    pickitem,
    toolbar
  }  
}
</script>

<style scoped>
img{
  width: 100%;
}
ul{
  overflow: hidden;    
}
.coupon-ul, .nav-ul{
  width: 90%;
  margin: 0 auto;
}
.ban-title {
 margin: 2em auto 1em;
 width: 90%;
}
.explosion-ul{
  margin:1em auto;
}
/* .explosion-ul li{
  margin-bottom: 1em;
  } */
  /* .new-ul li{
    width: 50%;
    float: left;
  } */
  .img {
    margin: 1em 0;
  }
  .img img{
    width: 100%
  }
  </style>