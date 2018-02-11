<template>
    <ul>
        <li v-for="item in pickList">
            <div class="pickItem">
                <div class="pic">
                    <img :src="item.pic" :alt="item.proName">
                </div>
                <div class="proTitle">{{item.proName}}</div>
                <div class="proName">{{item.secondTitle}}</div>
                <div class="price-wrap">
                    <span>尝鲜价</span><span class="price">￥<b>{{item.price}}</b><span>.9</span></span>
                </div>
                <button>购买</button>
            </div>
        </li>
    </ul>	
</template>
<script>
import newdata from "@/mock/newItem.js";
export default {
    data(){
        return{
            pickList:""
        }
    },
    methods:{
        explosion:function(){
            let promise = new Promise((resolve, reject) => {
                this.pickList = newdata.data.explosion;
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
.pickItem {
    border: 1px solid #cf9a64;
    padding: 3px;
    margin:0 2px;
}
.pic img{
	width: 100%;
}
.proTitle {
    text-align: center;
    font-size: 1.2em;
    border-bottom: 2px solid #cf9a64;
    padding: 10px 0 0;
    margin: 0 10px;
    color: #cf9a64;
    font-weight: bold;
}
.proName {
    text-align: center;
    margin: 0 10px 0 10px;
    font-size: 1.1em;
    color: #585858;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price-wrap {
    width: 96%;
    margin: 0 auto;
    text-align: center;
}
.price {
    color: #b76a1f;
}
.price b{
    font-size: 1.5em;
}
button {
    background: #b76a1f;
    border: none;
    color: #fff;
    padding: 5px 20px;
    border-radius: 8px;
    width: 80%;
    margin: 10px auto;
    display: block;
}
</style>