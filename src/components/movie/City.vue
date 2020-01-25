<template>
    <div id="city">
        
        <div class="hotTitle">热门城市</div>
        <div class="hotList">
            <div class="hotCity" v-for="item in hotList" :key="item.id">
               {{item.nm}}  
            </div>
        </div>
        <div class="cityIndex"  >
            <ul>
                <li v-for="(item,index1) in cityList" :key="item.id" @touchstart="handerToIndex(index1)">{{item.index}}</li>
            </ul>
        </div>   
        <div class="title" ref="citySort">
            <div v-for="item in cityList" :key="item.index" >
                <div class="index">{{item.index}}</div>
                <ul>
                    <li v-for="itemlist in item.list" :key="itemlist.index" >{{itemlist.nm}}</li>
                </ul>
            </div>
        </div>
        <div class="backTop" @click="backTop">back</div>
        
    </div>
</template>

<script>
export default {
    name: 'City',
    data(){
        return{
               cityList : [],
              hotList : []
        }
    },
    mounted(){
        this.axios.get('/api/cityList').then(res => {
            // console.log(res);
            var msg = res.data.msg;
            if(msg === "ok"){
                var cities = res.data.data.cities;
                var {cityList , hotList} = this.formatCityList(cities);
                this.cityList = cityList;
                this.hotList = hotList

            }
        })
    },
    methods: {
        formatCityList(cities){
            var cityList = [];
            var hotList = [];
            //{index:A, list: [{nm:阿里, id:123}, {nm:阿城, id:124} ],}

            //判断是否为热门城市
            for(var k=0; k<cities.length; k++){
                if(cities[k].isHot === 1) {
                    hotList.push(cities[k]); //推送至热门城市
                }
            }

            for(var i=0; i<cities.length; i++){
                //获取首字母
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){ //添加新的城市列表
                    cityList.push({index:firstLetter, list: [{nm:cities[i].nm, id:cities[i].id}]})
                    
                } else{                //累加到已有的index中
                    for(var j=0; j<cityList.length; j++) {
                        if(cityList[j].index === firstLetter) { //累加到相同的首字母列表中
                            cityList[j].list.push({nm: cities[i].nm, id:cities[i].id})
                        }
                    }
                } 
            }
            //对城市列表排序
            cityList.sort((n1,n2) => {
                if(n1.index > n2.index) {
                    return 1
                } else if(n1.index < n2.index) {
                    return -1
                } else{
                    return 0
                }
            });
            
            function toCom(firstLetter){
                for(var i=0; i<cityList.length; i++) {
                    if(cityList[i].index === firstLetter){
                        return false; //首字母已存在
                    }
                }
                return true;          //不存在则添加新的城市列表
            }
            // console.log(hotList)
            return {
                cityList,
                hotList
            }
        },
        handerToIndex(index1){
            var index = this.$refs.citySort.getElementsByClassName('index');
            // this.$refs.citySort.parentNode.scrollTop=index[index1].offsetTop;
              console.log(index[index1].offsetTop)
             window.scrollTo(0,index[index1].offsetTop +49);
            
        },
        backTop(){
            window.scrollTo(0,0)
        }
   }
}
</script>

<style scoped>
#city .hotTitle{padding: 5px; background-color:gray;  margin-right: 25px;}
#city .hotList {height: 126px;  margin-right: 25px;background-color:turquoise}
#city .hotCity { width:28%;margin: 4px 9px; float: left; background-color:burlywood; text-align: center;height: 33px;line-height: 33px;}

#city .title>div{ background-color: turquoise; margin-right: 25px;}
#city .title .index{padding : 5px 0 5px 5px; background-color: gray;}
#city .title>div li{padding : 4px;}

#city .cityIndex{ position: fixed; right: 2px; top: 100px;}
#city .backTop{ height: 40px; width: 40px; border-radius: 50%; position: fixed;bottom: 50px;right: 20px;text-align: center;line-height: 40px;background-color: white;}
</style>