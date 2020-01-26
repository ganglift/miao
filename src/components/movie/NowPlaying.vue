<template>
    <div id="movieBody">
        <ul>
            <!-- <li>
                <div class="image"><img src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg" alt=""></div>
                <div class="buy">购票</div>
                <div class="info">
                    <h2>误杀</h2>
                    <p>评分</p>
                    <p>演员</p>
                    <p>上映影院</p>
                </div>
            </li> -->
            <li v-for="item in movieList" :key="item.id">
                <div class="image"><img :src="item.img | setWH('140.188')" alt=""></div>
                <div class="buy">购票</div>
                <div class="info">
                    <h3>{{item.nm}} <span v-show="item.version">3D</span></h3>
                    <p>评分<span>{{item.sc}}</span></p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NowPlaying',
    data(){
        return{
            movieList: []
        }
    },
    mounted(){
        this.axios.get('/api/movieOnInfoList?citvId=10').then(res => {
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.movieList = res.data.data.movieList;
            }
        })
    }
}
</script>

<style scoped>
#movieBody ul{margin: 0 8px}
#movieBody ul li{border-bottom: 1px gray solid; height:105px; padding: 10px 0; }
#movieBody .image{float: left;}
#movieBody .image img{height: 94px; width: 70px;}
#movieBody .info{margin-left: 75px;}
#movieBody .info h3 span{margin-left: 75px;color: blue;}
#movieBody .info p{margin-top: 3px ;font-size: 14px; overflow: hidden;}
#movieBody .info p span{color: yellow;}
#movieBody .buy{background-color:red;float: right; height: 25px;line-height: 25px;text-align: center;color: white; width: 50px; margin: 42px 10px 0 0;}
</style>