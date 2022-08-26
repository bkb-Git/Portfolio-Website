/* eslint-disable no-nested-ternary */
import {
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Typography, Grid } from 'antd';
import { useEffect } from 'react';
import { APP_ROUTES } from '../../lib/constants/global-vars';

const { Text } = Typography;
const { useBreakpoint } = Grid;

const ArrowIcon = (props) => {
  const { page, backHome } = props;
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const arrowDistance = isMobileOrTablet ? '.5rem' : '3rem';

  const ARROW__STYLES = {
    '/': {
      NavPageTag: 'Projects',
      icon: faAngleDoubleRight,
      iconStyle: {
        right: arrowDistance,
        top: '50%',
        color: 'white',
        opacity: 0.3,
      },
      tagStyle: {
        color: 'white',
        top: '25%',
        left: '-200%',
        marginLeft: '0.625rem',
      },
    },
    '/projects': {
      NavPageTag: 'About',
      icon: faAngleDoubleDown,
      iconStyle: {
        bottom: arrowDistance,
        left: '50%',
        transform: 'translate(-50%,0)',
        color: '#696867',
        opacity: 0.3,
      },
      tagStyle: {
        color: '#696867',
        left: '-25%',
        top: '-50%',
        textAlign: 'center',
      },
    },
    '/about': {
      toProjects: {
        NavPageTag: 'Projects',
        icon: faAngleDoubleUp,
        iconStyle: {
          top: arrowDistance,
          left: '50%',
          color: 'white',
          opacity: 0.3,
        },
        tagStyle: {
          color: 'white',
          left: '150%',
          top: '25%',
        },
      },
      backHome: {
        NavPageTag: 'Back Home',
        icon: faAngleDoubleLeft,
        iconStyle: {
          left: arrowDistance,
          top: '50%',
          color: 'white',
          opacity: 0.3,
        },
        tagStyle: {
          color: 'white',
          top: '100%',
          left: 0,
          textAlign: 'center',
        },
      },
    },
  };

  useEffect(() => {}, [page]);

  const selectStyle = () => {
    if (backHome) return ARROW__STYLES['/about'].backHome;
    if (page === APP_ROUTES.ABOUT) return ARROW__STYLES[page].toProjects;
    return ARROW__STYLES[page];
  };

  const selectArrowClassName = () => {
    if (page === APP_ROUTES.HOME) return 'navigator__arrowToRight';
    if (page === APP_ROUTES.PROJECTS) return 'navigator__arrowToBottom';
    if (page === APP_ROUTES.ABOUT && !backHome) return 'navigator__arrowToTop';
    return 'navigator__arrowToLeft';
  };

  const arrowStyle = selectStyle();

  return (
    <Col className={selectArrowClassName()} style={arrowStyle.iconStyle}>
      <FontAwesomeIcon
        icon={arrowStyle.icon}
        size={isMobileOrTablet ? '3x' : '5x'}
      />
      <Text
        className={`${selectArrowClassName()}__navTag`}
        style={arrowStyle.tagStyle}
      >
        {arrowStyle.NavPageTag}
      </Text>
    </Col>
  );
};

export default ArrowIcon;
