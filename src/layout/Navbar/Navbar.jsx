// import { useContext } from 'react';
import { useEffect } from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useHistory } from 'react-router-dom';

import sns from './sns';

import './Navbar.scss';

// const { useBreakpoint } = Grid;

const Navbar = () => {
  const history = useHistory();

  // const { xs, sm, lg } = useBreakpoint();
  // const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [history]);

  // const handleRoute = (e) => {
  //   const { key } = e;

  //   if (key === '/' || key === '/about') {
  //     // context.updateNextRoute(key);
  //     return history.push(key);
  //   }

  //   return null;
  // };

  const getItem = (label, key) => {
    return {
      label,
      key,
    };
  };

  const items = sns.map((item) => {
    const { name, route, icon } = item;

    return getItem(name, route, <FontAwesomeIcon icon={icon} />);
  });

  return (
    <Menu
      className="navbar"
      theme="dark"
      defaultSelectedKeys={[1]}
      selectedKeys={[history.location.pathname]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
