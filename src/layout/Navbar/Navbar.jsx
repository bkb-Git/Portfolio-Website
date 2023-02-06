// import { useContext } from 'react';
import { useEffect } from 'react';
import { Menu } from 'antd';

import { useHistory } from 'react-router-dom';

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

// const { useBreakpoint } = Grid;

const Navbar = () => {
  const history = useHistory();

  // const { xs, sm, lg } = useBreakpoint();
  // const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [history]);

  const handleClick = (props) => {
    const { key } = props;
    const element = document.getElementById(key);
    element.scrollIntoView({ behavior: 'smooth' });
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
      theme="dark"
      defaultSelectedKeys={[1]}
      selectedKeys={[history.location.pathname]}
      onClick={handleClick}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
