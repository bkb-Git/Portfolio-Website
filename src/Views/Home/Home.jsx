import { Col, Row, Grid } from 'antd';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import Intro from './Intro';

import './Home.scss';

const { useBreakpoint } = Grid;

const Home = () => {
  const history = useHistory();
  const appContext = useContext(AppContext);

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const handleClick = (e) => {
    const link = e.currentTarget.attributes.route.value;
    appContext.updateNextRoute(link);
    history.push(link);
  };

  const renderIntroductionSection = () => {
    return (
      <Row
        justify="start"
        align="center"
        style={{
          position: 'absolute',
          width: '100%',
          height: '60%',
          top: '20%',
        }}
      >
        {!isMobileOrTablet && (
          <Col span={23}>
            <Intro clickHandler={handleClick} />
          </Col>
        )}
      </Row>
    );
  };

  const renderImageSection = () =>
    isMobileOrTablet && <Intro clickHandler={handleClick} />;

  return (
    <Col span={24} style={{ height: '100vh' }}>
      <Row className="Home">
        <Col lg={12} xs={0} sm={0} className="Home__intro">
          {renderIntroductionSection()}
        </Col>
        <Col lg={12} xs={24} sm={24} className="Home__image">
          {renderImageSection()}
        </Col>
      </Row>
    </Col>
  );
};

export default Home;
