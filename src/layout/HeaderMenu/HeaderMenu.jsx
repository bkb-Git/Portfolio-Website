/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Col, Grid, Layout, Row } from 'antd';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import PersonalLogo from 'assets/svg/PersonalLogo';

import Navbar from '../Navbar';

import './HeaderMenu.scss';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const HeaderMenu = () => {
  // Breakpoints called destructured here
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [isMobileOrTablet]);

  // Handler to scroll to contact me
  const handleClick = () => {
    const element = document.getElementById('#contact');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  // Render functions for this component's view
  const renderButtons = () => {
    return (
      <Button
        icon={
          !isMobileOrTablet && (
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ marginRight: '10px' }}
            />
          )
        }
        onClick={handleClick}
        size="large"
        className="headerMenu__buttons__contactMe"
      >
        {isMobileOrTablet ? (
          <FontAwesomeIcon icon={faPaperPlane} />
        ) : (
          <>Let&apos;s Talk</>
        )}
      </Button>
    );
  };

  const renderWebView = () => {
    return (
      <Row justify="space-around" align="middle" style={{ height: '100%' }}>
        <Col span={4} className="headerMenu__logo">
          <PersonalLogo />
        </Col>
        <Col span={10} className="headerMenu__navbar">
          <Navbar />
        </Col>
        <Col span={4} className="headerMenu__buttons">
          {renderButtons()}
        </Col>
      </Row>
    );
  };

  const renderMobileView = () => {
    return (
      <Row
        justify="space-between"
        align="middle"
        style={{ height: '100%', padding: '0px 25px' }}
      >
        <Col span={10} className="headerMenu__logo">
          <PersonalLogo width="76" height="76" />
        </Col>
        <Col span={4} className="headerMenu__buttons">
          {renderButtons()}
        </Col>
      </Row>
    );
  };

  return (
    <Header className="headerMenu">
      <a name="home" id="#home" />
      {isMobileOrTablet ? renderMobileView() : renderWebView()}
    </Header>
  );
};

export default HeaderMenu;
