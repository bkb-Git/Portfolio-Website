import { Row } from 'antd';

import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from 'src/layout/MainLayout';

import Home from 'src/views/Home';
import Projects from 'src/views/Projects';
import Skills from 'src/views/Skills';
import About from 'src/views/About';
import ContactMe from 'src/views/ContactMe';

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
