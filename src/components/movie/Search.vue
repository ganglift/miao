<template>
    <div id="search">
        <div class="input">
            <span class="iconfont icon-sousuo"></span>
            <input type="text" v-model="message">
        </div>
        <div class="content">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                
                <li v-for="item in movieList" :key="item.id">
                    <div class="image"><img :src="item.img | setWH('140.188')" alt=""></div>
                    <!-- <div class="buy">购票</div> -->
                    <div class="info">
                        <h3>{{item.nm}} <span v-show="item.version">{{item.version}}</span></h3>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return {
            message:'',
            movieList:[]
        }
    },
    watch : {
        message(newVal) {
            // console.log(newVal);
            this.axios.get('/api/searchList?cityId=10&kw=' + newVal).then(res => {
                var msg = res.data.msg;
                var movie = res.data.data.movies;
                if(msg && movie){  
                    this.movieList=res.data.data.movies.list;
                   

                }
            });
        }
    }
}
</script>

<style scoped>
#search{margin-left: 8px;}
#search .input{margin-top: 10px ; height: 30px;}
#search .input input{width: 80%; height: 20px;}
#search .input span{float: right; margin: 5px 18px}
#search .content h3{padding-top:5px; }
#content ul{margin: 0 8px}
#content ul li{border-bottom: 1px gray solid; height:105px; padding: 10px 0; }
#content .image{float: left;}
#content .image img{height: 94px; width: 70px;}
#content .info{margin-left: 75px;}
#content .info h3 span{margin-left: 30px;color: blue;}
#content .info p{margin-top: 3px ;font-size: 14px; overflow: hidden;}
#content .info p span{color: yellow;}
#content .buy{background-color:red;float: right; height: 25px;line-height: 25px;text-align: center;color: white; width: 50px; margin: 42px 10px 0 0;}
</style>