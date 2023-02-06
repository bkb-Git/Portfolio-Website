import { Row } from 'antd';

import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './layout/MainLayout';

import Home from './Views/Home';
import Projects from './Views/Projects';
import Skills from './Views/Skills';
import About from './Views/About';
import ContactMe from './Views/ContactMe';

import './styles/index.scss';

const App = () => {
  // Render functions defined here
  const renderHelmet = () => {
    return (
      <Helmet>
        <title>Billy K. Bett | Portfolio</title>
      </Helmet>
    );
  };

  return (
    <MainLayout>
      {renderHelmet()}
      <Row justify="center" align="middle">
        <Home />
        <Projects />
        <Skills />
        <About />
        <ContactMe />
      </Row>
    </MainLayout>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
