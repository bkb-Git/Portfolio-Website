import { Layout, Grid } from 'antd';
import HeaderMenu from '../HeaderMenu';

import SideMenu from '../SideMenu';

import './MainLayout.scss';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const MainLayout = (props) => {
  const { children } = props;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Layout style={{ height: '100vh' }}>
      {isMobileOrTablet ? <HeaderMenu /> : <SideMenu />}
      <Content className="content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
