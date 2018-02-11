<template>
    <ul class="new-ul">
        <li v-for="item in newList">
            <router-link to="/detail">
            <div class="newItem">
                <div class="pic">
                    <img :src="item.pic" :alt="item.proName">
                </div>
                <div class="pro-descript">
                    <div class="proName">{{item.proName}}</div>
                    <div class="price-wrap">
                        <span>尝鲜价</span>￥<b>{{item.price}}</b><span>.9</span>
                    </div>
                    <button>立即购买</button>
                </div>
            </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
import newdata from "@/mock/newItem.js";
export default {
    data(){
        return{
            newList:""
        }
    },
    methods:{
        explosion:function(){
            let promise = new Promise((resolve, reject) => {
                this.newList = newdata.data.explosion;
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
.new-ul li{
    width: 50%;
    float: left;
}
.newItem {
    position: relative;
    border: 1px solid #b5651b;
    margin: 10px;
}
.pic img {
    width: 100%;
}
.pro-descript {
    margin: 10px;
    background-color: #ca8e41;
    padding: 3px;
    border-radius: 5px
}
.proName {
    text-align: center;
    word-spacing: normal;
    text-overflow: ellipsis;
    color: #fff;
}
.price-wrap {
    color: #fff;
    text-align: center;
}
.price-wrap b{
   font-size: 1.5em;
}
button{
    background: #5a3013;
    border: none;
    color: #fff;
    padding: 3px;
    width: 80%;
    display: block;
    margin: 3px auto;
}
</style>
