import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//导入组件
import index from "../view/index"
import food from '../components/food'
import seller from  '../components/seller'
import rating from '../components/rating'
// 定义路由
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect:'/food',
    children:[
      {
        path: 'food',
        name: 'food',
        component: food
      },
      {
        path: 'seller',
        name: 'seller',
        component: seller
      },
      {
        path: 'rating',
        name: 'rating',
        component: rating
      }
    ]
  },
];

// 创建router实例
const router  = new VueRouter({
    mode:'history',
    routes
 });

export default router;
