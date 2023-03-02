import { Button, Col, Divider, Row, Typography } from 'antd';

import { ReactComponent as MobileProfileImg } from 'assets/images/MobileProfileImg.svg';
import { ReactComponent as GitIcon } from 'assets/svg/Git.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/LinkedIn.svg';
import { ReactComponent as InstagramIcon } from 'assets/svg/Instagram.svg';
import { ReactComponent as Arrow } from 'assets/svg/Arrow.svg';

import './MobileView.scss';

const { Title, Paragraph } = Typography;

const MobileView = () => {
  // Hnadlers defined here
  const handleClick = (e) => {
    const {
      currentTarget: { id },
    } = e;

    return id === 'gitHub'
      ? window.open('https://github.com/bkb-Git/')
      : window.open('https://www.linkedin.com/in/billykbett/');
  };

  // Handler for scrolling to contact form
  const handleScroll = () => {
    const element = document.getElementById('#contact');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  // Render functions for this component's views
  const renderProfileImg = () => {
    return (
      <Col span={24} className="mobileView__profile">
        <Row justify="center" align="middle">
          <MobileProfileImg />
        </Row>
      </Col>
    );
  };

  const renderTitle = () => {
    return (
      <Col span={24} className="mobileView__headline">
        <Row justify="center" align="middle">
          <Col span={24}>
            <Title level={3} className="mobileView__headline__title">
              BILLY KIPKORIR BETT
            </Title>
          </Col>
          <Col span={12}>
            <Divider
              style={{
                borderColor: '#ccac00',
                borderWidth: '2px',
                margin: '8px 0',
              }}
            />
          </Col>
          <Col span={24}>
            <Title level={5} className="mobileView__headline__subtitle">
              Software Engineer
            </Title>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderMottos = () => {
    return (
      <Col span={24} className="mobileView__briefBio">
        <Paragraph>
          <Row justify="center" align="middle">
            <Col>Self-Starter </Col>
            <Divider
              type="vertical"
              className="mobileView__briefBio__divider"
            />
            <Col>Growth Minded</Col>
            <Divider
              type="vertical"
              className="mobileView__briefBio__divider"
            />
            <Col>Reliable</Col>
          </Row>
        </Paragraph>
      </Col>
    );
  };

  const renderSocialLinks = () => {
    return (
      <Col
        span={18}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Row justify="center" align="middle" style={{ width: '100%' }}>
          <Col span={8} className="mobileView__socialLinks">
            <Col
              className="mobileView__socialLinks__icon"
              id="linkedIn"
              onClick={handleClick}
            >
              <LinkedInIcon />
            </Col>
          </Col>
          <Col span={8} className="mobileView__socialLinks">
            <Col
              className="mobileView__socialLinks__icon"
              id="gitHub"
              onClick={handleClick}
            >
              <GitIcon />
            </Col>
          </Col>
          <Col span={8} className="mobileView__socialLinks">
            <Col className="mobileView__socialLinks__icon">
              <InstagramIcon />
            </Col>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderArrow = () => {
    return (
      <Col span={16} className="mobileView__arrow">
        <Arrow />
      </Col>
    );
  };

  const renderButton = () => {
    return (
      <Col span={10} className="mobileView__button">
        <Button
          size="large"
          className="mobileView__button__hireMe"
          onClick={handleScroll}
        >
          Hire me
        </Button>
      </Col>
    );
  };

  return (
    <Col span={22} className="mobileView">
      <Row justify="center" align="center" style={{ height: '100%' }}>
        {renderProfileImg()}
        {renderTitle()}
        {renderMottos()}
        {renderSocialLinks()}
        {renderButton()}
        {renderArrow()}
      </Row>
    </Col>
  );
};

export default MobileView;
