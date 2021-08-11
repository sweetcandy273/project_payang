
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name: 'home', component: () => import('src/pages/home/Home.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', name: 'register', component: () => import('src/pages/starter/Register.vue') },
      { path: 'add_information', name: 'add_information', component: () => import('pages/Add_information.vue') },
      { path: 'forgot_password', name: 'forgot_password', component: () => import('src/pages/starter/Forgot_password.vue') },
      { path: 'myfarm', name: 'myfarm', component: () => import('pages/Myfarm.vue') },
      { path: 'starter_intro1', name: 'starter_intro1', component: () => import('src/pages/starter/Starter_intro1.vue') },
      { path: 'starter_intro2', name: 'starter_intro2', component: () => import('src/pages/starter/Starter_intro2.vue') },
      { path: 'starter', name: 'starter', component: () => import('src/pages/starter/Starter.vue') },
      { path: 'add_income', name: 'add_income', component: () => import('src/pages/accout/Add_income.vue') },
      { path: 'add_expenditure', name: 'add_expenditure', component: () => import('src/pages/accout/Add_expenditure.vue') },
      { path: 'edit_income', name: 'edit_income', component: () => import('src/pages/accout/Edit_income.vue') },
      { path: 'edit_expenditure', name: 'edit_expenditure', component: () => import('src/pages/accout/Edit_expenditure.vue') },
      { path: 'detail_income', name: 'detail_income', component: () => import('src/pages/accout/Detail_income.vue') },
      { path: 'edit_userinformation', name: 'edit_userinformation', component: () => import('src/pages/home/Edit_userinformation.vue') },
      { path: 'detail_expenditure', name: 'detail_expenditure', component: () => import('src/pages/accout/Detail_expenditure.vue') },
      { path: 'account_calendar', name: 'account_calendar', component: () => import('src/pages/accout/Account_calendar.vue') },
      { path: 'check_income', name: 'check_income', component: () => import('src/pages/accout/Check_income.vue') },
      { path: 'check_expenditure', name: 'check_expenditure', component: () => import('src/pages/accout/Check_expenditure.vue') },
      { path: 'complete_account', name: 'complete_account', component: () => import('pages/Complete_account.vue') },
      { path: 'otp', name: 'otp', component: () => import('src/pages/starter/otp.vue') },
      { path: 'change_password', name: 'change_password', component: () => import('src/pages/starter/Change_password.vue') },
      { path: 'new_password', name: 'new_password', component: () => import('src/pages/starter/New_password.vue') },
      { path: 'all_account_calendar', name: 'all_account_calendar', component: () => import('src/pages/home/All_account_calendar.vue') },
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
