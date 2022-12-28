import { Col, Grid } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from 'context/AppContext';
import { APP_ROUTES } from 'lib/constants/global-vars';

import ArrowIcon from '../ArrowIcon';

import './PageNavigator.scss';

const { useBreakpoint } = Grid;

const PageNavigator = (props) => {
  const { navTo, backHome } = props;
  const [currentLocation, setCurrentLocation] = useState(APP_ROUTES.HOME);

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const PageNavSize = isMobileOrTablet ? '3rem' : '7rem';

  const NAV__STYLE = {
    navigator: {
      right: {
        right: 0,
        height: '100%',
        width: PageNavSize,
      },
      left: {
        left: 0,
        height: '100%',
        width: PageNavSize,
      },
      top: {
        top: 0,
        height: PageNavSize,
        width: '100%',
      },
      bottom: {
        bottom: 0,
        height: isMobileOrTablet ? '10%' : PageNavSize,
        width: '100%',
      },
    },
    blinker: {
      right: {
        right: 0,
        height: '100%',
        width: '0%',
        borderTopLeftRadius: '99%',
        borderBottomLeftRadius: '99%',
        boxShadow: '-5px 0px 50px 20px #ffffff',
      },
      left: {
        left: 0,
        height: '100%',
        width: '0%',
        borderTopRightRadius: '99%',
        borderBottomRightRadius: '99%',
        boxShadow: '25px 0px 50px 10px #ffffff',
      },
      top: {
        top: 0,
        height: '0%',
        width: '100%',
        borderBottomLeftRadius: '99%',
        borderBottomRightRadius: '99%',
        boxShadow: '0px 30px 50px 20px #ffffff',
      },
      bottom: {
        bottom: 0,
        height: '0%',
        width: '100%',
        borderTopLeftRadius: '99%',
        borderTopRightRadius: '99%',
        boxShadow: '0px -30px 50px 20px #696867',
      },
    },
  };

  const appContext = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    setCurrentLocation(history.location.pathname);
  }, [history]);

  const handleClick = () => {
    appContext.updateNextRoute(navTo);
    history.push(navTo);
  };

  const renderNavStyle = () => {
    if (navTo === APP_ROUTES.HOME) return NAV__STYLE.navigator.left;

    if (navTo === APP_ROUTES.ABOUT) return NAV__STYLE.navigator.bottom;

    if (navTo === APP_ROUTES.PROJECTS && currentLocation === APP_ROUTES.ABOUT)
      return NAV__STYLE.navigator.top;

    if (navTo === APP_ROUTES.PROJECTS && isMobileOrTablet)
      return NAV__STYLE.navigator.bottom;

    return NAV__STYLE.navigator.right;
  };

  const renderBlinkerStyle = () => {
    if (navTo === APP_ROUTES.HOME) return NAV__STYLE.blinker.left;

    if (navTo === APP_ROUTES.ABOUT) return NAV__STYLE.blinker.bottom;

    if (navTo === APP_ROUTES.PROJECTS && currentLocation === APP_ROUTES.ABOUT)
      return NAV__STYLE.blinker.top;

    if (navTo === APP_ROUTES.PROJECTS && isMobileOrTablet)
      return NAV__STYLE.blinker.bottom;

    return NAV__STYLE.blinker.right;
  };

  return (
    <Col
      onClick={handleClick}
      onKeyUp={handleClick}
      role="link"
      tabIndex={0}
      style={renderNavStyle()}
      className="navigator"
    >
      <ArrowIcon page={currentLocation} backHome={backHome} />
      <div style={renderBlinkerStyle()} className="navigator__blinker" />
    </Col>
  );
};

export default PageNavigator;
