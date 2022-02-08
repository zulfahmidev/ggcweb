import * as vr from 'vue-router'
import Store from './views/store/Store.vue'
import Cart from './views/cart/Cart.vue'
import Home from './views/home/Home.vue'


const router = vr.createRouter({
    history: vr.createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/store/:tab',
            name: 'Store',
            props: true,
            component: Store,
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
        },
        {
            path: '/',
            name: 'Blog',
            component: Home,
        },
        {
            path: '/',
            name: 'Info',
            component: Home,
        },
    ]
})

export default router;