import { useEffect, useState } from 'react';
import { Menu, Grid } from 'antd';

import './Navbar.scss';

const PAGES = [
  {
    id: 1,
    name: 'Home',
    link: '#home',
  },
  {
    id: 2,
    name: 'Projects',
    link: '#projects',
  },
  {
    id: 3,
    name: 'Skills',
    link: '#skills',
  },
  {
    id: 4,
    name: 'About',
    link: '#about',
  },
];

const { useBreakpoint } = Grid;

const Navbar = ({ setOpen }) => {
  const [page, setPage] = useState('');

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [isMobileOrTablet]);

  const handleClick = (props) => {
    const { key } = props;
    const element = document.getElementById(key);
    setPage(key);
    element.scrollIntoView({ behavior: 'smooth' });

    setOpen(false);
  };

  const getItem = (label, key) => {
    return {
      label,
      key,
    };
  };

  const items = PAGES.map((item) => {
    const { name, link } = item;

    return getItem(name, link);
  });

  return (
    <Menu
      className="navbar"
      theme={isMobileOrTablet ? 'light' : 'dark'}
      defaultSelectedKeys={[1]}
      selectedKeys={page}
      onClick={handleClick}
      mode={isMobileOrTablet ? 'vertical' : 'horizontal'}
      items={items}
    />
  );
};

export default Navbar;
