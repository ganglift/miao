<template>
    <div id="comingSoon">
        <ul>
            <li v-for="item in movieList" :key="item.id">
                <div class="image"><img :src="item.img | setWH('140.188')" alt=""></div>
                <div class="buy">购票</div>
                <div class="info">
                    <h3>{{item.nm}} <span v-show="item.version">{{item.version}}</span></h3>
                    <p><span>{{item.wish}}</span>人想看</p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.pubDesc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ComingSoon',
    data(){
        return {
             movieList: []
        }
    },
    mounted(){
        this.axios.get('/api/searchList?cityId=10&kw=a').then(res => {
            
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.movieList = res.data.data.movies.list;
                
            }
        })
    }
}
</script>

<style scoped>
#comingSoon ul{margin: 0 8px}
#comingSoon ul li{border-bottom: 1px gray solid;  padding: 10px 0; }
#comingSoon .image{float: left;}
#comingSoon .image img{height: 94px; width: 70px;}
#comingSoon .info{margin-left: 75px;}
#comingSoon .info h3 span{margin-right: 40px; color: blue; float:right;}
#comingSoon .info p{margin-top: 3px ;font-size: 14px; overflow: hidden;}
#comingSoon .info p span{color: yellow;}
#comingSoon .buy{background-color:red;float: right; height: 25px;line-height: 25px;text-align: center;color: white; width: 50px; margin: 42px 10px 0 0;}
</style>