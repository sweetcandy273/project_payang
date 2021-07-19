
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Home.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
      { path: 'add_information', name: 'add_information', component: () => import('pages/Add_information.vue') },
      { path: 'forgot_password', name: 'forgot_password',component: () => import('pages/Forgot_password.vue') },
      { path: 'myfarm',name: 'myfarm', component: () => import('pages/Myfarm.vue') },
      { path: 'Add_detail_farm',name: 'Add_detail_farm', component: () => import('pages/Add_detail_farm.vue') },
      { path: 'starter_intro1',name: 'starter_intro1', component: () => import('pages/Starter_intro1.vue') },
      { path: 'starter',name: 'starter', component: () => import('pages/Starter.vue') },
      { path: 'edit_userinformation',name: 'edit_userinformation', component: () => import('pages/Edit_userinformation.vue') },
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
