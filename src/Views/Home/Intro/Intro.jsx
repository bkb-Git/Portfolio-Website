/* eslint-disable react/no-unescaped-entities */
import { Row, Col, Typography, Button, Grid } from 'antd';

import './Intro.scss';

const { useBreakpoint } = Grid;

const { Text } = Typography;

const Intro = (props) => {
  const { clickHandler } = props;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderText1 = () => {
    return (
      <>
        <Text id="sub-text1">Hi, I'm</Text>
        <Text id="sub-text2">
          <Text>Billy</Text>
          <Text id="single-letter">K.</Text>
          <Text id="last-name">Bett</Text>
        </Text>
      </>
    );
  };

  const renderText2 = () => {
    return (
      <>
        <Text id="sub-text1">I am a</Text>
        <Text id="sub-text2">Software Developer.</Text>
      </>
    );
  };

  const renderText3 = () => {
    return (
      <>
        <Text id="sub-text1">Check out my</Text>
        <Text id="sub-text2">Projects</Text>
      </>
    );
  };

  const renderText4 = () => (
    <Text id="sub-text1"> If you like what you see </Text>
  );

  const renderText5 = () => {
    return (
      <>
        <Text id="sub-text1">Please</Text>
        <Button
          type="ghost"
          className="introduction__text5__button"
          route="/about"
          onClick={clickHandler}
          onKeyUp={clickHandler}
          role="link"
          tabIndex={0}
        >
          Contact me
        </Button>
      </>
    );
  };

  return (
    <Row
      justify={isMobileOrTablet ? 'center' : 'space-between'}
      align={isMobileOrTablet && 'center'}
      className="introduction"
    >
      <Col lg={24} sm={22} xs={22} className="introduction__text1">
        {renderText1()}
      </Col>
      <Col lg={24} sm={22} xs={22} className="introduction__text2">
        {renderText2()}
      </Col>
      <Col lg={24} sm={22} xs={22} className="introduction__text3">
        {renderText3()}
      </Col>
      <Col lg={24} sm={22} xs={22} className="introduction__text4">
        {renderText4()}
      </Col>
      <Col lg={24} sm={22} xs={22} className="introduction__text5">
        {renderText5()}
      </Col>
    </Row>
  );
};

export default Intro;
