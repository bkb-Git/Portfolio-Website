import { Button, Col, Layout, Row } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
        type="primary"
        size="large"
        style={{
          borderRadius: 20,
          padding: '10px 25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Let&apos;s Talk
      </Button>
    );
  };

  return (
    <Header className="headerMenu">
      <Row justify="center" align="middle">
        <Col span={6} />
        <Col span={10} className="headerMenu__navbar">
          <Navbar />
        </Col>
        <Col span={6} className="headerMenu__buttons">
          {renderButtons()}
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderMenu;
