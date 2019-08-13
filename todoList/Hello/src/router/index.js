import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import todoList from '@/components/todoList'
// import element from '@/components/element'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'todoList',
      component: todoList
    }
    // {
    //   path: '/',
    //   name: 'element',
    //   component: element
    // }
  ]
})
