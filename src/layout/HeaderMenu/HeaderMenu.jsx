/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Col,
  Divider,
  Drawer,
  Grid,
  Layout,
  Row,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import PersonalLogo from 'assets/svg/PersonalLogo';

import Navbar from '../Navbar';

import './HeaderMenu.scss';

const { Header } = Layout;
const { useBreakpoint } = Grid;
const { Title } = Typography;

const HeaderMenu = () => {
  // Breakpoints called destructured here
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  // useState for right menu drawer
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [isMobileOrTablet]);

  // Handler to scroll to contact me
  const handleClick = () => {
    const element = document.getElementById('#contact');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  // component functions for views defined here
  const title = () => {
    return (
      <Row justify="center" align="middle">
        <Col span={24}>
          <Title level={4} className="headerMenu__title">
            BILLY K. BETT <span style={{ color: '#ccac00' }}>||</span> PORTFOLIO
          </Title>
        </Col>
      </Row>
    );
  };

  // Render functions for this component's view
  const renderButtons = () => {
    return (
      <Button
        icon={
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ marginRight: '10px' }}
          />
        }
        onClick={handleClick}
        size="large"
        className="headerMenu__buttons__contactMe"
      >
        Let&apos;s Talk
      </Button>
    );
  };

  const renderDrawerMenu = () => {
    return (
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpen(false)}
        visible={open}
        key="menu_drawer"
      >
        <Row align="middle" gutter={[0, 48]}>
          <Col span={24}>
            <Divider style={{ borderColor: '#ccac00', margin: '10px 0' }} />
            {title()}
            <Divider style={{ borderColor: '#ccac00', margin: '10px 0' }} />
          </Col>
          <Col span={24}>
            <Navbar setOpen={setOpen} />
          </Col>
        </Row>
      </Drawer>
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
        <Col span={4} className="headerMenu__bars">
          <Button
            size="large"
            icon={<FontAwesomeIcon icon={faBars} color="#eae3d2" />}
            onClick={() => setOpen(true)}
          />
        </Col>
      </Row>
    );
  };

  return (
    <Header className="headerMenu">
      <a name="home" id="#home" />
      {isMobileOrTablet ? renderMobileView() : renderWebView()}
      {isMobileOrTablet && renderDrawerMenu()}
    </Header>
  );
};

export default HeaderMenu;
