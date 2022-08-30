import { Layout } from 'antd';
import Navbar from '../../../components/Navbar';

import './HeaderMenu.scss';

const { Header } = Layout;

const HeaderMenu = () => {
  return (
    <Header className="headerMenu">
      <Navbar />
    </Header>
  );
};

export default HeaderMenu;
