import { Button, Col, Divider, Row, Typography, Grid } from 'antd';

import { ReactComponent as GitIcon } from 'assets/svg/Git.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/LinkedIn.svg';
import { ReactComponent as InstagramIcon } from 'assets/svg/Instagram.svg';
import { ReactComponent as FigmaIcon } from 'assets/svg/Figma.svg';

import './IntroductionSide.scss';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const IntroductionSide = () => {
  // Breakpoints destructured here
  const { xl, xxl } = useBreakpoint();

  // Breakpoint test for hd screen or hdPlus screen
  const isHDScreen = xl && !xxl;
  const isHDPlusScreen = xxl;

  const determineColumnGap = () => (isHDScreen ? 16 : isHDPlusScreen && 48);

  // Handler for scrolling to contact form
  const handleClick = () => {
    const element = document.getElementById('#contact');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  // Render functions defined here
  const renderLine = () => {
    return (
      <Col className="introductionSide__line">
        <Divider style={{ borderColor: '#eae3d2' }} />
      </Col>
    );
  };

  const renderProfessionalTitle = () => {
    return (
      <Col span={24} className="introductionSide__title">
        <Title level={5} className="introductionSide__title__first">
          Software Developer
        </Title>
        <Title level={5} className="introductionSide__title__second">
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
                    Reliable
                    <Divider
                      type="vertical"
                      className="introductionSide__briefBio__divider"
                    />
                    Self-Starter
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
          <Button
            size="large"
            className="introductionSide__hireMeButton"
            onClick={handleClick}
          >
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
      <Row justify="start" align="middle" gutter={[0, determineColumnGap()]}>
        {renderLine()}
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
