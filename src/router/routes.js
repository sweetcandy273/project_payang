const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: { requiresAuth: true },
        component: () => import("pages/Home.vue")
      },
      {
        path: "login",
        name: "login",
        component: () => import("pages/Login.vue")
      },
      {
        path: "register",
        name: "register",
        component: () => import("pages/Register.vue")
      },
      {
        path: "add_information",
        name: "add_information",
        meta: { requiresAuth: true },
        component: () => import("pages/Add_information.vue")
      },
      {
        path: "forgot_password",
        name: "forgot_password",
        component: () => import("pages/Forgot_password.vue")
      },
      {
        path: "myfarm",
        name: "myfarm",
        meta: { requiresAuth: true },
        component: () => import("pages/Myfarm.vue")
      },
      {
        path: "add_detail_farm",
        name: "add_detail_farm",
        meta: { requiresAuth: true },
        component: () => import("pages/Add_detail_farm.vue")
      },
      {
        path: "edit_detail_farm",
        name: "edit_detail_farm",
        meta: { requiresAuth: true },
        component: () => import("pages/Edit_detail_farm.vue")
      },
      {
        path: "detail_farm",
        name: "detail_farm",
        meta: { requiresAuth: true },
        component: () => import("pages/detail_farm.vue")
      },
      {
        path: "calender_farm",
        name: "calender_farm",
        meta: { requiresAuth: true },
        component: () => import("pages/Calendar_farm.vue")
      },
      {
        path: "add_calender_farm",
        name: "add_calender_farm",
        meta: { requiresAuth: true },
        component: () => import("pages/Add_Calendar_farm.vue")
      },

      {
        path: "starter_intro1",
        name: "starter_intro1",

        component: () => import("pages/Starter_intro1.vue")
      },
      {
        path: "starter_intro2",
        name: "starter_intro2",

        component: () => import("pages/Starter_intro2.vue")
      },
      {
        path: "starter",
        name: "starter",
        component: () => import("pages/Starter.vue")
      },
      {
        path: "add_income",
        name: "add_income",
        meta: { requiresAuth: true },
        component: () => import("pages/Add_income.vue")
      },
      {
        path: "add_expenditure",
        name: "add_expenditure",
        meta: { requiresAuth: true },
        component: () => import("pages/Add_expenditure.vue")
      },
      {
        path: "edit_income",
        name: "edit_income",
        meta: { requiresAuth: true },
        component: () => import("pages/Edit_income.vue")
      },
      {
        path: "edit_activity",
        name: "edit_activity",
        meta: { requiresAuth: true },
        component: () => import("pages/Edit_activity.vue")
      },

      {
        path: "edit_expenditure",
        name: "edit_expenditure",
        meta: { requiresAuth: true },
        component: () => import("pages/Edit_expenditure.vue")
      },
      {
        path: "edit_userinformation",
        name: "edit_userinformation",
        meta: { requiresAuth: true },
        component: () => import("pages/Edit_userinformation.vue")
      },
      {
        path: "detail_income",
        name: "detail_income",
        meta: { requiresAuth: true },
        component: () => import("pages/Detail_income.vue")
      },
      {
        path: "detail_expenditure",
        name: "detail_expenditure",
        meta: { requiresAuth: true },
        component: () => import("pages/Detail_expenditure.vue")
      },
      {
        path: "account_calendar",
        name: "account_calendar",
        meta: { requiresAuth: true },
        component: () => import("pages/Account_calendar.vue")
      },
      {
        path: "check_income",
        name: "check_income",
        meta: { requiresAuth: true },
        component: () => import("pages/Check_income.vue")
      },
      {
        path: "check_expenditure",
        name: "check_expenditure",
        meta: { requiresAuth: true },
        component: () => import("pages/Check_expenditure.vue")
      },

      {
        path: "all_account_calendar",
        name: "all_account_calendar",
        meta: { requiresAuth: true },
        component: () => import("pages/All_account_calendar.vue")
      },
      {
        path: "change_password",
        name: "change_password",
        component: () => import("pages/change_password.vue")
      }
    ]
  },

  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
