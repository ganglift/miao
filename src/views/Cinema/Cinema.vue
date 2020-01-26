<template>
    <div id="cinema">
        <ul>
            <li v-for="item in cinemaList" :key="item.id" >
                <div class="content">
                    <span class="name">{{item.nm}} </span>
                    <span class="price">{{item.sellPrice}}元起</span>
                    <p class="addr">{{item.addr}}</p>
                    <p>{{item.distance}}</p>
                    <div class="card">
                        <span v-for="(num, key) in item" v-if="num===1" :key="key" :class="key | cardClass">{{key | showCard}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Cinema',
    data(){
        return {
            cinemaList: []
        }
    },
    mounted(){
        this.axios.get('/api/searchList?cityId=10&kw=a').then(res => {
            var msg = res.data.msg;
            var cinemas = res.data.data.cinemas;
            if(cinema && msg) {
                this.cinemaList = cinemas.list
            }
        })
    },
    filters: {
        showCard(key){
            var card = [
            {key:'allowRefund', value: '改签' },
            {key:'endorse', value: '退票' },
            {key:'snack', value: '小吃' },
            {key:'sell', value: '折扣优惠' }
            ];
            for(var i=0; i<card.length; i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
        },
        cardClass(key){
            var card = [
                {key:'allowRefund', value: 'bl' },
                {key:'endorse', value: 'bl' },
                {key:'snack', value: 'ye' },
                {key:'sell', value: 'ye' }
            ];
            for(var j =0; j<card.length; j++){
                if(card[j].key === key){
                    return card[j].value
                }
            }
        }
    }
}
</script>

<style scoped>
#cinema ul{padding-bottom: 49px;}
#cinema .content {border-bottom: 1px gray solid; padding: 10px 5px; }
#cinema .content .name {font-weight: 600; font-size: 18px;}
#cinema .content .price {color:red}
#cinema .content .addr {padding: 6px 0;}
#cinema .content .card span{margin-right: 5px; padding: 0 3px;}
#cinema .content .card .bl{border: 0.5px blue solid; color: blue;}
#cinema .content .card .ye{border: 0.5px yellow solid; color: yellow;}
</style>