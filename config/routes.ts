export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      { path: '/', redirect: '/xc-login', },
      { path: '/xc-login', component: '@/pages/login', exact: true },
      { path: '/xc-home', component: '@/pages/home', exact: true },
    ],
  }
];