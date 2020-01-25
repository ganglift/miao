import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/movie',
        name: 'movie',
        component: () =>
            import ('../views/Movie/Movie'),
        children: [{
                path: 'city',
                name: 'city',
                component: () =>
                    import ('../components/movie/City')
            },
            {
                path: 'nowPlaying',
                name: 'nowPlaying',
                component: () =>
                    import ('../components/movie/NowPlaying')
            },
            {
                path: 'comingSoon',
                name: 'comingsoon',
                component: () =>
                    import ('../components/movie/ComingSoon')
            },
            {
                path: 'search',
                name: 'search',
                component: () =>
                    import ('../components/movie/Search')
            },
            {
                path: '/movie',
                redirect: '/movie/nowPlaying',
            }
        ]
    },
    {
        path: '/cinema',
        name: 'cinema',
        component: () =>
            import ('../views/Cinema/Cinema')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () =>
            import ('../views/Mine/Mine')
    },
    {
        path: '/',
        redirect: '/movie'
    },
]

const router = new VueRouter({
    mode: 'history',

    base: process.env.BASE_URL,
    routes
})

export default router