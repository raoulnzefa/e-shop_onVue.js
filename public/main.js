import main_page from "./componentsJS/main_page.js";
import ProductLaptop from "./componentsJS/ProductLaptop.js";
import imac from "./componentsJS/imac.js";
import phones from "./componentsJS/phones.js";
import watches from "./componentsJS/watches.js";
import accessoires from "./componentsJS/accessoires.js";
import user_cart from "./componentsJS/user_cart.js";
import product_page from "./componentsJS/product_page.js";
import search_page from "./componentsJS/search_page.js";
import order from "./componentsJS/order.js";

const routes = [
    { path: '/', component: main_page },
    { path: '/laptops', component: ProductLaptop },
    { path: '/computers', component: imac },
    { path: '/phones', component: phones },
    { path: '/watches', component: watches },
    { path: '/accessoires', component: accessoires },
    { path: '/user_cart', name: 'user_cart', component: user_cart },
    { path: '/product_page/:id', name: 'product_page', component: product_page },
    { path: '/search_page', name: 'search_page', component: search_page },
    { path: '/order', name: 'order', component: order },
]


const router = new VueRouter({
    mode: 'history',
    routes: routes,
    base: '/'
})



new Vue({
    router,
    store: new Vuex.Store({
        state: {
            userCart: [],
            keyword: ''
        },
        getters: {
            getUserCart(state) {
                return state.userCart
            },
            getUserSearch(state) {
                return state.keyword
            }
        },
        mutations: {
            FETCH_CART(state, data) {
                state.userCart = data
            },
            USER_SEARCH(state, keyword) {
                state.keyword = keyword
            }
        }
    }),
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
    }
}).$mount('#app')