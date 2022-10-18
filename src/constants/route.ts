type TRouteNames = 'home' | 'characters' | 'notFound';

interface IRoute {
  path: string;
  route: string;
  name: string;
}

export const ROUTES: Record<TRouteNames, IRoute> = {
  home: {
    path: '/',
    route: '/',
    name: 'Home',
  },
  characters: {
    path: '/characters',
    route: '/characters',
    name: 'Characters',
  },
  notFound: {
    path: '*',
    route: '*',
    name: '404',
  },
};
