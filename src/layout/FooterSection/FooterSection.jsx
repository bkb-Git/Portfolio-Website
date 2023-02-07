import { Col, Layout, Row } from 'antd';

import { ReactComponent as GitIcon } from 'assets/svg/Git.svg';
import { ReactComponent as LinkedInIcon } from 'assets/svg/LinkedIn.svg';
import { ReactComponent as InstagramIcon } from 'assets/svg/Instagram.svg';

import './FooterSection.scss';
import Navbar from 'layout/Navbar';

const { Footer } = Layout;

const FooterSection = () => {
  // Handler click
  const handleClick = (e) => {
    const {
      currentTarget: { id },
    } = e;

    return id === 'gitHub'
      ? window.open('https://github.com/bkb-Git/')
      : window.open('https://www.linkedin.com/in/billykbett/');
  };

  // Render functions for views
  const renderLinks = () => {
    return (
      <Col span={4}>
        <Row justify="space-around" align="middle">
          <Col>
            <Col
              className="footerSection__links"
              id="gitHub"
              onClick={handleClick}
            >
              <GitIcon width={26} height={26} />
            </Col>
          </Col>
          <Col>
            <Col
              className="footerSection__links"
              id="linkedIn"
              onClick={handleClick}
            >
              <LinkedInIcon width={26} height={26} />
            </Col>
          </Col>
          <Col>
            <Col className="footerSection__links">
              <InstagramIcon width={26} height={26} />
            </Col>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderMenu = () => {
    return (
      <Col span={24}>
        <Row justify="center" align="middle">
          <Col span={10}>
            <Navbar />
          </Col>
        </Row>
      </Col>
    );
  };

  const renderCopyright = () => {
    return (
      <Col span={24}>
        <Row justify="center" align="bottom">
          <Col span={8} className="footerSection__copyright">
            <p>
              &copy;{' '}
              <span className="footerSection__copyright__year">
                {new Date().getFullYear()}{' '}
              </span>{' '}
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Footer className="footerSection">
      <Row
        justify="center"
        align="bottom"
        gutter={[0, 32]}
        style={{ height: '100%' }}
      >
        {renderLinks()}
        {renderMenu()}
        {renderCopyright()}
      </Row>
    </Footer>
  );
};

export default FooterSection;
