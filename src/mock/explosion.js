import Mock from 'mockjs';
const data = Mock.mock({
 // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
 'explosion|3': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "price|+10": 5,
            "pic":"static/img/fruit-orange.png",
            "proName":"新进口水果",
            "secondTitle":"新鲜的进口水果（100g）",            
            "discription|1": [{
            "0":"好吃不贵新鲜可口",
            "1":"每日更新送达",
            "2":"补充维生素"
            }]
        }]
    });

export default {
	data
}