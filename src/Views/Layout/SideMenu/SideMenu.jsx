import { Avatar, Col, Layout, Row, Typography } from 'antd';
import { useState } from 'react';

import Navbar from '../../../components/Navbar';

import ProfilePhoto from '../../../assets/ProfilePhoto.jpg';

import './SideMenu.scss';

const { Sider } = Layout;
const { Title, Text } = Typography;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const AvatarProfile = () => {
    return (
      <Row justify="center" align="middle">
        <Avatar
          className="menu__avatar"
          size={collapsed ? 56 : 128}
          src={ProfilePhoto}
        />
        <Title level={5} style={{ color: 'white' }}>
          {collapsed ? 'BKB' : 'BILLY KIPKORIR BETT'}
        </Title>
        {!collapsed && (
          <Text
            type="secondary"
            style={{ color: 'whitesmoke', fontStyle: 'italic' }}
          >
            Software Engineer
          </Text>
        )}
      </Row>
    );
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="dark"
      className="menu"
    >
      <Row className="menu__container">
        <Col span={24}>
          <AvatarProfile />
        </Col>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
    </Sider>
  );
};

export default SideMenu;
