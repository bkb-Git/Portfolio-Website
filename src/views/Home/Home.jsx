import { useEffect } from 'react';
import { Col, Row, Grid } from 'antd';

import { ReactComponent as Arrow } from 'assets/svg/Arrow.svg';

import IntroductionSide from './IntroductionSide';
import PictureSide from './PictureSide';

import MobileView from './MobileView';

import './Home.scss';

const { useBreakpoint } = Grid;

const Home = () => {
  const { xs, sm, lg } = useBreakpoint();
  // eslint-disable-next-line no-unused-vars
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [isMobileOrTablet]);

  const renderWebView = () => {
    return (
      <>
        <IntroductionSide />
        <PictureSide />
        <Arrow className="arrow" />
      </>
    );
  };

  return (
    <Col span={24} style={{ height: 'calc(100vh - 100px)' }}>
      <Row justify="center" align="middle" className="Home">
        {isMobileOrTablet ? <MobileView /> : renderWebView()}
      </Row>
    </Col>
  );
};

export default Home;
