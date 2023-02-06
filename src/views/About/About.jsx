/* eslint-disable no-alert */
import { Button, Col, Divider, Image, Row, Typography } from 'antd';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Portrait from 'assets/images/potrait.jpg';

import './About.scss';

const { Title, Paragraph } = Typography;

// const { useBreakpoint } = Grid;

const About = () => {
  const aboutMe = () => {
    return (
      <>
        <span> Hello! I’m Billy, a Software Engineer from Nairobi.</span>
        <br />
        <br /> Since 2020 I chose to pivot into the tech industry as a
        self-taught engineer, with a strong focus on front-end development and
        some experience in back-end development having the desire to go
        Full-Stack in the near future.
        <br /> <br /> I educated myself through great online resources such as
        FreeCodeCamp courses and continuously learned from excellent YouTube
        developer channels. With about 1 year of experience in the industry, I
        spent a significant amount of time honing my skills building personal
        projects, and filling any knowledge gaps through continuous learning
        practices.
        <br />
        <br /> I also have an ardent interest in web3 development and artificial
        intelligence which is an area I see myself venturing into as it drives
        me to improve my skills and expand my knowledge.
        <br />
        <br /> Overall, I am determined to constantly elevate my understanding
        as an engineer and individual in order to impact my environment and
        society as a whole, providing solutions to complex problems and
        essentially having fun along the way.
      </>
    );
  };

  const renderAboutText = () => {
    return (
      <Col span={12}>
        <Row justify="start" align="bottom" style={{ height: '100%' }}>
          <Col span={20}>
            <Title className="aboutPage__title">
              About <span className="aboutPage__title__me">Me</span>
            </Title>
            <Divider style={{ borderColor: '#eae3d2' }} />
          </Col>
          <Col span={24}>
            <Paragraph className="aboutPage__text">{aboutMe()}</Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderPotrait = () => {
    return (
      <Col span={12}>
        <Row justify="center" align="middle" gutter={[0, 64]}>
          <Col span={20}>
            <Image className="aboutPage__image" src={Portrait} />
          </Col>
          <Col span={20}>
            <Row justify="center" align="middle">
              <Button
                type="primary"
                size="large"
                icon={
                  <FontAwesomeIcon
                    icon={faDownload}
                    color="#ccac00"
                    style={{ marginRight: '1rem' }}
                  />
                }
                className="aboutPage__resume"
              >
                Resume
              </Button>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Col span={20}>
      <Row justify="center" align="middle" className="aboutPage">
        {renderAboutText()}
        {renderPotrait()}
      </Row>
    </Col>
  );
};

export default About;
