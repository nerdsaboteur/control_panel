import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import EventImages from './views/EventImages.vue'
import NotFoundComponent from './views/NotFound.vue'
import Home from './views/Home.vue'
import Task from './views/Task.vue'
import Finances from './views/Finances.vue'
import Summary from './components/Summary.vue'
import Budget from './views/Budget.vue'
import Income from './components/Income.vue'
import Expense from './components/Expense.vue'
import ExpenseCategory from './components/ExpenseCategory.vue'
import Credit from './views/Credit.vue'
import CreditDetail from './components/CreditDetail.vue'
import Retirement from './components/Retirement.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/images',
      name: 'event-images',
      component: EventImages
    },
    {
      path: '*',
      component: NotFoundComponent
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/finances',
      name: 'finances',
      component: Finances
    },
    {
      path: '/income/edit/:id',
      component: Income
    },
    {
      path: '/income/add',
      component: Income
    },
    {
      path: '/expense/edit/:id',
      component: Expense
    },
    {
      path: '/expense/add',
      component: Expense
    },
    {
      path: '/expense/category/edit/:id',
      component: ExpenseCategory
    },
    {
      path: '/expense/category/delete/:id',
      component: ExpenseCategory
    },
    {
      path: '/credit/edit/:id',
      component: CreditDetail
    },
    {
      path: '/credit/add',
      component: CreditDetail
    }
  ]
})
