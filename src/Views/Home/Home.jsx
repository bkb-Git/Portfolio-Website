import { Col, Row, Grid } from 'antd';

import './Home.scss';

const { useBreakpoint } = Grid;

const Home = () => {
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
