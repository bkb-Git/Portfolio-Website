import { useEffect } from 'react';
import { Grid, Layout } from 'antd';

import FooterSection from 'layout/FooterSection';
import HeaderMenu from '../HeaderMenu';

import './MainLayout.scss';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const MainLayout = (props) => {
  const { children } = props;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [isMobileOrTablet]);

  return (
    <Layout style={{ background: 'white' }}>
      <HeaderMenu />
      <Content className="content">{children}</Content>
      <FooterSection />
    </Layout>
  );
};

export default MainLayout;
