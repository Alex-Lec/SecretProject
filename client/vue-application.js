const Home = window.httpVueLoader('./components/Home.vue')

const routes = [
    { path: '/', component: Home }
]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    data: {

    },
    methods: {

    }
})