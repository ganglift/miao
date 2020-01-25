<template>
<div id="tabbar">
    <ul class="foot" >
        <router-link tag='li' to='/movie'>
            
            <i class="iconfont icon-dianying"></i>
             <span>电影</span>
        </router-link>
        <router-link tag='li' to='/cinema'>
            <i class="iconfont icon-yingyuan"></i>
            
            <span>影院</span>
        </router-link>
        <router-link tag='li' to='/mine'>
            <i class="iconfont icon-wode"></i>
            
            <span>我的</span>
       </router-link>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Tabbar',
    data() {
        return{
            
        }
    },
    methods:{
       
    }
}
</script>

<style scoped>
#tabbar{position: fixed; left: 0; bottom: 0; right: 0;height: 50px;background-color: white;
border-top: 1px solid #ebe8e3}
#tabbar ul{display: flex; text-align: center;align-items: center}
#tabbar ul li{flex: 1; }
#tabbar ul li i{font-size: 24px; display: block; }
#tabbar ul li span{font-size: 16px;}
#tabbar ul li.active{color: red}
#tabbar ul li.router-link-active{color: red}
#tabbar ul li img{ height: 25px; width: 25px;margin: 2px auto;display: block;}
</style>