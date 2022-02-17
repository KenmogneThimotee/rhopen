import { createWebHistory, createRouter } from "vue-router";


const routes =  [
  {
    path: "/",
    alias: "/products",
    name: "products",
    component: () => import("./components/ProductsList")
  },
  {
    path: "/product/:id",
    name: "product-details",
    component: () => import("./components/Product")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddProducts")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("./components/Login")
  },
  {
    path: '/register',
    name: 'register',
    component:  () => import("./components/Register")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/products', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // try to access a restricted page + not logged in
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});


export default router;