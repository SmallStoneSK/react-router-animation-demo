import {HomePage, AboutPage, ListPage, DetailPage} from '../Pages/index';

export const RouterConfig = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom'
    }
  },
  {
    path: '/list',
    component: ListPage,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  },
  {
    path: '/detail',
    component: DetailPage,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right'
    }
  }
];