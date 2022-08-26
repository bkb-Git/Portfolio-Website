import { Layout, Row } from 'antd';
import Navbar from '../../../components/Navbar';

import './HeaderMenu.scss';

const { Header } = Layout;

const HeaderMenu = () => {
  return (
    <Header className="headerMenu">
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Navbar />
      </Row>
    </Header>
  );
};

export default HeaderMenu;
