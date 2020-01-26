<template>

   
    <div id="content">
        <div class="menu">
            <router-link tag='div' to='/movie/city'>
              <span>上海</span>
              <i class="iconfont icon-below-s"></i>
            </router-link>
            <router-link tag='div' to='/movie/nowPlaying' >正在热映</router-link>
            <router-link tag='div' to='/movie/comingSoon'>即将上映</router-link>
            <router-link tag='div' to='/movie/search' class="search"><i class="iconfont icon-sousuo"></i></router-link>  
        </div>
         <router-view/>
    </div>
    
</template>

<script>

export default {
    name: 'Movie',
    components:{
     
    }
}
</script>

<style scoped>
#content .menu{display: flex; height: 48px; text-align: center; line-height: 48px; background-color: white; border-bottom: 1px solid gray;}
#content .menu div{flex: 1;}
#content .menu .search{ font-weight: 600;}
#content .menu div.router-link-active{color: red;border-bottom: red solid 1px;}

</style>