
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'add_information', component: () => import('pages/Add_information.vue') },
      { path: 'forgot_password', component: () => import('pages/Forgot_password.vue') },
      
      { path: 'myfarm', component: () => import('pages/Myfarm.vue') },
      { path: 'starter_intro1', component: () => import('pages/Starter_intro1.vue') },
      { path: 'starter', component: () => import('pages/Starter.vue') },
      { path: 'add_income', component: () => import('pages/Add_income.vue') },
      { path: 'add_expenditure', component: () => import('pages/Add_expenditure.vue') },
      { path: 'edit_income', component: () => import('pages/Edit_income.vue') },
      { path: 'edit_expenditure', component: () => import('pages/Edit_expenditure.vue') },
      { path: 'detail_income', component: () => import('pages/Detail_income.vue') },
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
