// import { useContext } from 'react';
import { useContext, useEffect } from 'react';
import { Menu, Grid } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import sns from './sns';

import './Navbar.scss';

const { useBreakpoint } = Grid;

const Navbar = () => {
  const history = useHistory();
  const context = useContext(AppContext);

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [history]);

  const handleRoute = (e) => {
    const { key } = e;

    if (key === '/' || key === '/about') {
      context.updateNextRoute(key);
      return history.push(key);
    }

    return null;
  };

  const getItem = (label, key, icon, social) => {
    const getLabel = () => {
      if (social) {
        return (
          <a href={key} rel="noreferrer" target="_blank">
            {label}
          </a>
        );
      }
      return label;
    };

    return {
      key,
      icon,
      label: getLabel(),
    };
  };

  const items = sns.map((item) => {
    const { name, route, icon, social } = item;

    return getItem(name, route, <FontAwesomeIcon icon={icon} />, social);
  });

  return (
    <Menu
      theme="dark"
      className="navbar"
      onClick={handleRoute}
      defaultSelectedKeys={[1]}
      selectedKeys={[history.location.pathname]}
      mode={isMobileOrTablet ? 'horizontal' : 'inline'}
      items={items}
      style={{ justifyContent: isMobileOrTablet && 'space-around' }}
    />
  );
};

export default Navbar;
