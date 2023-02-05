import { Layout } from 'antd';
import HeaderMenu from '../HeaderMenu';

import './MainLayout.scss';

const { Content } = Layout;
// const { useBreakpoint } = Grid;

const MainLayout = (props) => {
  const { children } = props;

  // const { xs, sm, lg } = useBreakpoint()
  // const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Layout style={{ background: 'white' }}>
      <HeaderMenu />
      <Content className="content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
