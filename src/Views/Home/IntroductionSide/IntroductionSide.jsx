import { Button, Col, Divider, Row, Typography } from 'antd';

import { ReactComponent as GitIcon } from 'assets/svg/Git.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/LinkedIn.svg';
import { ReactComponent as InstagramIcon } from 'assets/svg/Instagram.svg';
import { ReactComponent as FigmaIcon } from 'assets/svg/Figma.svg';

import './IntroductionSide.scss';

const { Title, Paragraph } = Typography;

const IntroductionSide = () => {
  const renderProfessionalTitle = () => {
    return (
      <Col span={24}>
        <Title level={5} style={{ marginBottom: '0.2em', color: '#CCAC00' }}>
          Software Developer
        </Title>
        <Title
          level={5}
          style={{
            marginBottom: '0.5em',
            marginTop: '0',
            position: 'relative',
            left: '10px',
            color: '#CCAC00',
          }}
        >
          Front-End Developer
        </Title>
      </Col>
    );
  };

  const renderIntro = () => {
    return (
      <Col span={24}>
        <Row justify="start" align="middle">
          <Col span={24}>
            <Title className="introductionSide__name">
              Hi, I&apos;m Billy Kipkorir Bett
            </Title>
            <Paragraph className="introductionSide__briefBio">
              <Row justify="start" align="middle">
                <Col span={14}>
                  <Row justify="space-around" align="middle">
                    Growth Minded
                    <Divider
                      type="vertical"
                      className="introductionSide__briefBio__divider"
                    />
                    Self-Starter
                    <Divider
                      type="vertical"
                      className="introductionSide__briefBio__divider"
                    />
                    Introverted
                  </Row>
                </Col>
              </Row>
            </Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderHireMeButton = () => {
    return (
      <Row justify="start" align="middle">
        <Col span={4}>
          <Button size="large" className="introductionSide__hireMeButton">
            Hire me
          </Button>
        </Col>
      </Row>
    );
  };

  const renderSocialLinks = () => {
    return (
      <Col span={24} style={{ marginTop: '3.5rem' }}>
        <Row justify="start" align="middle">
          <Col span={9}>
            <Row justify="start" align="middle">
              <Col span={8}>
                <Col className="introductionSide__socialLinks">
                  <LinkedInIcon />
                </Col>
              </Col>
              <Col span={8}>
                <Col className="introductionSide__socialLinks">
                  <GitIcon />
                </Col>
              </Col>
              <Col span={8}>
                <Col className="introductionSide__socialLinks">
                  <InstagramIcon />
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderFigmaNote = () => {
    return (
      <Col span={8} style={{ position: 'absolute', bottom: '0px' }}>
        <Paragraph className="introductionSide__figmaNote">
          Designed with
          <FigmaIcon style={{ margin: '0px 10px' }} />
          Figma
        </Paragraph>
      </Col>
    );
  };

  return (
    <Col span={12} className="introductionSide">
      <Row justify="start" align="middle" gutter={[0, 48]}>
        <Col
          style={{
            width: '130px',
            position: 'absolute',
            left: 0,
            top: '-12px',
          }}
        >
          <Divider style={{ borderColor: '#eae3d2' }} />
        </Col>
        {renderProfessionalTitle()}
        {renderIntro()}
        {renderHireMeButton()}
        {renderSocialLinks()}
      </Row>
      {renderFigmaNote()}
    </Col>
  );
};

export default IntroductionSide;
