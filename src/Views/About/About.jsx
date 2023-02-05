/* eslint-disable no-alert */
import { Col, Row } from 'antd';

import './About.scss';

// const { useBreakpoint } = Grid;

const About = () => {
  return (
    <Col span={24} style={{ height: '100vh' }}>
      <Row justify="center" align="middle" className="about-page" />
    </Col>
  );
};

export default About;
