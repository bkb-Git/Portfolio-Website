import { Button, Col, Layout, Row } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import PersonalLogo from 'assets/svg/PersonalLogo';

import Navbar from '../Navbar';

import './HeaderMenu.scss';

const { Header } = Layout;

const HeaderMenu = () => {
  const renderButtons = () => {
    return (
      <Button
        icon={
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ marginRight: '10px' }}
          />
        }
        ghost
        size="middle"
        className="headerMenu__buttons__contactMe"
      >
        Let&apos;s Talk
      </Button>
    );
  };

  return (
    <Header className="headerMenu">
      <Row justify="space-around" align="middle" style={{ height: '100%' }}>
        <Col span={4} className="headerMenu__logo">
          <PersonalLogo />
        </Col>
        <Col span={13} className="headerMenu__navbar">
          <Navbar />
        </Col>
        <Col span={4} className="headerMenu__buttons">
          {renderButtons()}
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderMenu;
