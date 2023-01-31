import { Col, Row } from 'antd';

import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Projects from './views/Projects';
// import About from './views/About';

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
        <Col span={24} style={{ height: '100vh', background: '#1c3879' }} />
        <Col
          span={24}
          style={{
            height: '100vh',
          }}
        />
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
