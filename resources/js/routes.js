import { createRouter, createWebHistory } from 'vue-router'

import login from './components/auth/login.vue'
import register from './components/auth/register.vue'
import forget from './components/auth/forget.vue'
import logout from './components/auth/logout.vue'
//end auth
import home from './components/home.vue'
import create from './components/employee/create.vue'
// let login = require('./components/auth/login.vue')
import index from './components/employee/index.vue'
import editemployee from './components/employee/edit-employee.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            name: '/',
            path: '/',
            component: login
        },
        {
            name: 'register',
            path: '/register',
            component: register
        },
        {
            name: 'forget',
            path: '/forget',
            component: forget
        },
        {
            name: 'logout',
            path: '/logout',
            component: logout
        },
        {
            name: 'home',
            path: '/home',
            component: home
        },
        {
            name: 'create',
            path: '/store-employee',
            component: create
        },
        {
            name: 'employee',
            path: '/employee',
            component: index
        },
        {
            name: 'edit-employee',
            path: '/edit-employee/:id',
            component: editemployee
        }
    ]
})

export default router