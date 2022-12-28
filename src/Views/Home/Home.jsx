import { Col, Row, Grid } from 'antd';
// import { useContext } from 'react';
// import { useHistory } from 'react-router-dom';

// import { AppContext } from 'context/AppContext';

import './Home.scss';

const { useBreakpoint } = Grid;

const Home = () => {
  // const history = useHistory();
  // const appContext = useContext(AppContext);

  const { xs, sm, lg } = useBreakpoint();
  // eslint-disable-next-line no-unused-vars
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Col span={24} style={{ height: '100vh' }}>
      <Row className="Home" />
    </Col>
  );
};

export default Home;
