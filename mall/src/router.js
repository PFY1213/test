import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import AliPay from './pages/alipay.vue'


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            conponent: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'List',
                    name: 'orderList',
                    component: OrderList,
                },
                {
                    path: 'Pay',
                    name: 'orderPay',
                    component: OrderPay,
                },
                {
                    path: 'Confirm',
                    name: 'orderConfirm',
                    component: OrderConfirm,
                },
                {
                    path: 'aliPay',
                    name: 'aliPay',
                    component: AliPay,
                }
            ]
        }
    ]
})