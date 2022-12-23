import { useState } from 'react';
import { Col, Row } from 'antd';

import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { useLocation, BrowserRouter as Router } from 'react-router-dom';
// import { Transition, TransitionGroup } from 'react-transition-group';

import { AppContext } from './context/AppContext';
// import { routes } from './lib/constants/routes';

import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Projects from './views/Projects';
// import About from './views/About';

import './styles/index.scss';

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

  return (
    <AppContext.Provider
      value={{
        ...appState,
        updateNextRoute,
      }}
    >
      <MainLayout>
        <Helmet>
          <title>Billy K. Bett | Portfolio</title>
        </Helmet>
        <Row justify="center" align="middle">
          <Home />
          <Projects />
          <Col span={24} style={{ height: '100vh' }} />
          <Col
            span={24}
            style={{
              background: '#1c3879',
              height: '100vh',
            }}
          />
        </Row>
      </MainLayout>
    </AppContext.Provider>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
