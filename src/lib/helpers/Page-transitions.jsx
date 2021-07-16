import gsap from 'gsap';
import { APP_ROUTES } from '../constants/global-vars';

export const HomeTransitions = (stage, appState, node) => {
  if (stage === 'Exit') {
    const tl = gsap.timeline();
    const toProjectsStyle = {
      right: '0%',
      bottom: '0%',
      width: '0%',
      height: '100%',
    };
    const toAboutStyle = {
      right: '0%',
      bottom: '0%',
      width: '100%',
      height: '0%',
      background: 'rgb(65, 59, 59)',
    };

    switch (appState.router.next) {
      // Exit Transitions

      case APP_ROUTES.PROJECTS: {
        tl.set('.loading-screen', toProjectsStyle);
        tl.to('.loading-screen', { duration: 0.6, width: '100%' });
        break;
      }
      case APP_ROUTES.ABOUT: {
        tl.set('.loading-screen', toAboutStyle);
        tl.to('.loading-screen', { duration: 0.6, height: '100%' });
        break;
      }
      default:
        break;
    }
  } else {
    const tl = gsap.timeline();

    switch (appState.router.current) {
      // Enter Transitions
      case APP_ROUTES.PROJECTS: {
        tl.to('.loading-screen', { duration: 0.8, width: '0%', delay: 0.8 });
        tl.from(node, { duration: 0.8, xPercent: -100 }, '<');
        break;
      }
      case APP_ROUTES.ABOUT: {
        tl.to('.loading-screen', {
          duration: 0.8,
          height: '0%',
          delay: 0.8,
          background: '#413b3b',
        });
        tl.from(node, { duration: 0.8, yPercent: -100 }, '<');
        break;
      }
      default:
        break;
    }
  }
};

export const ProjectTransitions = (stage, appState, node) => {
  if (stage === 'Exit') {
    const tl = gsap.timeline();
    const toAboutStyle = {
      right: '0%',
      bottom: '0%',
      width: '100%',
      height: '0%',
    };

    switch (appState.router.next) {
      // Exiting Projects Page

      case APP_ROUTES.HOME: {
        tl.to('.loading-screen', { right: '0%', width: '100%', duration: 0.6 });
        break;
      }
      case APP_ROUTES.ABOUT: {
        tl.set('.loading-screen', toAboutStyle);
        tl.to('.loading-screen', { duration: 0.6, height: '100%' });
        break;
      }
      default:
        break;
    }
  } else {
    const tl = gsap.timeline();

    switch (appState.router.current) {
      // Enter from Home page
      case APP_ROUTES.HOME: {
        tl.to('.loading-screen', {
          duration: 0.8,
          right: '100%',
          width: '0%',
          delay: 0.8,
        });
        tl.from(node, { duration: 0.8, xPercent: 100 }, '<');
        break;
      }
      case APP_ROUTES.ABOUT: {
        tl.to('.loading-screen', {
          duration: 0.8,
          height: '0%',
          delay: 0.8,
          background: '#413b3b',
        });
        tl.from(node, { duration: 0.8, yPercent: -100 }, '<');
        tl.set('.loading-screen', {
          right: '100%',
          width: '0%',
          height: '100%',
        });
        break;
      }
      default:
        break;
    }
  }
};

export const AboutTransitions = (stage, appState, node) => {
  if (stage === 'Exit') {
    const toHomeStyle = {
      right: '100%',
      width: '0%',
      height: '100%',
      bottom: '0%',
    };
    const tl = gsap.timeline();

    switch (appState.router.next) {
      case APP_ROUTES.PROJECTS: {
        tl.set('.loading-screen', {
          bottom: '100%',
          height: '0%',
          right: '0%',
          width: '100%',
        });
        tl.to('.loading-screen', {
          duration: 0.6,
          height: '100%',
          bottom: '0%',
        });
        break;
      }
      case APP_ROUTES.HOME: {
        tl.set('.loading-screen', toHomeStyle);
        tl.to('.loading-screen', {
          duration: 0.6,
          right: '0%',
          width: '100%',
        });
        break;
      }
      default:
        break;
    }
  } else {
    const tl = gsap.timeline();

    switch (appState.router.current) {
      case APP_ROUTES.PROJECTS: {
        tl.to('.loading-screen', {
          duration: 0.8,
          bottom: '100%',
          height: '0%',
          delay: 0.8,
          background: '#c6c4c4',
        });
        tl.from(node, { duration: 0.8, yPercent: 100 }, '<');
        break;
      }
      case APP_ROUTES.HOME: {
        tl.to('.loading-screen', {
          duration: 0.8,
          right: '100%',
          width: '0%',
          delay: 0.8,
          background: '#c6c4c4',
        });
        tl.from(node, { duration: 0.8, xPercent: 100 }, '<');
        break;
      }
      default:
        break;
    }
  }
};
