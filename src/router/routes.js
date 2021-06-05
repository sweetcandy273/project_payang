
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'add_information', component: () => import('pages/Add_information.vue') },
      { path: 'forgot_password', component: () => import('pages/Forgot_password.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'myfarm', component: () => import('pages/Myfarm.vue') },
      { path: 'weather', component: () => import('pages/Weather.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
