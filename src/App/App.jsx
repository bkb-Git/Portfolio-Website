import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, useLocation } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import { AppContext } from '../context/AppContext';
import { routes } from '../lib/constants/routes';

import MainLayout from '../Views/Layout/MainLayout';

import './app.scss';

const App = () => {
  const [appState, setAppState] = useState({ router: {} });
  const location = useLocation();

  const updateNextRoute = (nextRoute) => {
    setAppState({
      ...appState,
      router: {
        ...appState.router,
        current: location.pathname,
        next: nextRoute,
      },
    });
  };

  const renderTransitionGroup = () => {
    return (
      <TransitionGroup>
        {routes.map(({ name, path, pageName, onEnter, onExit, Component }) => (
          <Route key={name} exact path={path}>
            {({ match }) => (
              <Transition
                in={match !== null}
                classNames="page"
                timeout={{ exit: 650, enter: 850 }}
                unmountOnExit
                onEntering={(Node) => onEnter(appState, Node)}
                onExiting={() => onExit(appState)}
              >
                <>
                  <Helmet>
                    <title>{`${pageName} | Portfolio`}</title>
                  </Helmet>
                  <Component />
                </>
              </Transition>
            )}
          </Route>
        ))}
      </TransitionGroup>
    );
  };

  return (
    <AppContext.Provider
      value={{
        ...appState,
        updateNextRoute,
      }}
    >
      <MainLayout>
        <div className="loading-screen" />
        {renderTransitionGroup()}
      </MainLayout>
    </AppContext.Provider>
  );
};

export default App;
