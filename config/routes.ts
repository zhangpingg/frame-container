const Layouts = '@/layouts';
const Home = '@/pages/home'

export default [
  {
    path: '/',
    component: Layouts,
    routes: [
      { path: '/', redirect: '/home', },
      { path: '/home', component: Home, exact: true },
    ],
  }
];