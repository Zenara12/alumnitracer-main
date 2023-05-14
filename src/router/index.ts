// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Alumnihomepage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/AlumniHomepageview.vue'),
      },
      {
        path:'/signup',
        name:'Signup',
        component: () => import('@/views/Signupview.vue'),
      },
      {
        path:'/signin',
        name:'Signin',
        component: () => import('@/views/Signinview.vue'),
      },
      {
        path:'/alumniannouncement',
        name:'Alumniannouncement',
        component: () => import('@/views/AlumniAnnouncementview.vue'),
      },
      {
        path:'/alumniforum',
        name:'Alumniforum',
        component: () => import('@/views/AlumniForumview.vue'),
      },
      {
        path:'/alumnijoboffer',
        name:'Alumnijoboffer',
        component: () => import('@/views/AlumniJobofferview.vue'),
      },
      {
        path:'/alumniprofile',
        name:'Alumniprofile',
        component: () => import('@/views/AlumniProfileview.vue'),
      },
      {
        path:'/deandashboard',
        name:'Deandashboard',
        component: () => import('@/views/DeanDashboardview.vue'),
      },
      {
        path:'/deanalumniusers',
        name:'Deanalumniusers',
        component: () => import('@/views/DeanAlumniUsersview.vue'),
      },
      {
        path:'/deanreports',
        name:'Deanreports',
        component: () => import('@/views/DeanReportsview.vue'),
      },
      {
        path:'/deandegree',
        name:'Deandegree',
        component: () => import('@/views/DeanDegreeview.vue'),
      },
      
    ],
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach(async(to,from,next)=>{

// });

export default router
