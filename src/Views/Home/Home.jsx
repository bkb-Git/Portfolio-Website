import { Col, Row, Grid } from 'antd';

import { ReactComponent as Arrow } from 'assets/svg/Arrow.svg';

import IntroductionSide from './IntroductionSide';
import PictureSide from './PictureSide';

import './Home.scss';

const { useBreakpoint } = Grid;

const Home = () => {
  const { xs, sm, lg } = useBreakpoint();
  // eslint-disable-next-line no-unused-vars
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Col span={24} style={{ height: 'calc(100vh - 100px)' }}>
      <Row justify="center" align="middle" className="Home">
        <IntroductionSide />
        <PictureSide />
        <Arrow className="arrow" />
      </Row>
    </Col>
  );
};

export default Home;
