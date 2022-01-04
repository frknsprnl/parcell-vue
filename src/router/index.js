import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import("../views/HomePage.vue")
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import("../views/RegisterPage.vue")
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: () => import("../views/ContactPage.vue")
  },
  {
    path: '/faq',
    name: 'FaqPage',
    component: () => import("../views/FaqPage.vue")
  },
  {
    path: '/customer-service',
    name: 'CustomerServicePage',
    component: () => import("../views/CustomerServicePage.vue")
  },
  {
    path: '/shop',
    name: 'ShopPage',
    component: () => import("../views/ShopPage.vue")
  },
  {
    path: '/promotions',
    name: 'PromotionsPage',
    component: () => import("../views/PromotionsPage.vue")
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import("../views/ProfilePage.vue")
  },

  {
    path: '/password-forgot',
    name: 'PasswordForgot',
    component: () => import("../views/PasswordForgot.vue")
  },
  {
    path: '/plans',
    name: 'PlansPage',
    component: () => import("../views/PlansPage.vue")
  },
  {
    path: '/request-form',
    name: 'RequestFormPage',
    component: () => import("../views/RequestFormPage.vue")
  },
  {
    path: '/number-transfer',
    name: 'NumberTransfer',
    component: () => import("../views/NumberTransfer.vue")
  },
  {
    path: '/faturali-ol',
    name: 'FaturaliOl',
    component: () => import("../views/FaturaliOl.vue")
  },
  {
    path: '/basket',
    name: 'BasketPage',
    component: () => import("../views/BasketPage.vue")
  },
  {
    path: '/payment',
    name: 'PaymentPage',
    component: () => import("../views/PaymentPage.vue")
  },
  {
    path: '/deneme',
    name: 'DenemePage',
    component: () => import("../views/deneme.vue")
  },
]

const routeNames = routes.map(item => item.name)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



router.beforeEach((to, _, next) => {

  const authRequiredRoutes = ["ProfilePage", "BasketPage", "PaymentPage", "PromotionsPage", "FaturaliOl"];
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
    next(false);
  }

  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "LoginPage" });
  } else {
    next();
    // console.log("routeName :" ,routeNames );
    // console.log("authNotRequiredRoutes :" ,authNotRequiredRoutes );
  }


});


export default router
