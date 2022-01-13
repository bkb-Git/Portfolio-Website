import {
  AboutTransitions,
  HomeTransitions,
  ProjectTransitions,
} from '../helpers/Page-transitions';
import { APP_ROUTES } from './global-vars';

import Home from '../../Views/Home';
import Projects from '../../Views/Projects';
import About from '../../Views/About';

// eslint-disable-next-line import/prefer-default-export
export const routes = [
  {
    path: '/',
    name: APP_ROUTES.HOME,
    pageName: 'Home',
    Component: Home,
    onExit: (appState) => HomeTransitions('Exit', appState),
    onEnter: (appState, node) => HomeTransitions('Enter', appState, node),
  },
  {
    path: '/projects',
    name: APP_ROUTES.PROJECTS,
    pageName: 'Projects',
    Component: Projects,
    onExit: (appState) => ProjectTransitions('Exit', appState),
    onEnter: (appState, node) => ProjectTransitions('Enter', appState, node),
  },
  {
    path: '/about',
    name: APP_ROUTES.ABOUT,
    pageName: 'About',
    Component: About,
    onExit: (appState) => AboutTransitions('Exit', appState),
    onEnter: (appState, node) => AboutTransitions('Enter', appState, node),
  },
];
