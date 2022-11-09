import { Affix, Layout } from 'antd';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
// import HeaderMenu from '../HeaderMenu';

import './MainLayout.scss';

const { Content } = Layout;
// const { useBreakpoint } = Grid;

const MainLayout = (props) => {
  const { children } = props;

  // const { xs, sm, lg } = useBreakpoint()
  // const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Layout>
      <Affix style={{ position: 'absolute', width: '100%', zIndex: 15 }}>
        <HeaderMenu />
      </Affix>
      <Content className="content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
