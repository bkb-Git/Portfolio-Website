import {
  AboutTransitions,
  HomeTransitions,
  ProjectTransitions,
} from '../helpers/Page-transitions';
import { APP_ROUTES } from './global-vars';

import Home from '../../views/Home';
import Projects from '../../views/Projects';
import About from '../../views/About';

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
