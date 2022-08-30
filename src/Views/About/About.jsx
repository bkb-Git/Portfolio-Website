/* eslint-disable no-alert */
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';

import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

import PageNavigator from '../../components/PageNavigator/PageNavigator';
import { APP_ROUTES } from '../../lib/constants/global-vars';

import './About.scss';

// const { useBreakpoint } = Grid;

const DISPLAY_STATE = {
  ABOUT: 'about',
  CONTACT: 'contact',
};

const About = () => {
  const [displayState, setDisplayState] = useState('');

  // const { xs, sm, lg } = useBreakpoint();
  // const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [displayState]);

  const handleLeave = () => setDisplayState('');

  const handleCopyToClipboard = (e) => {
    const cb = navigator.clipboard;
    const text = e.currentTarget;
    cb.writeText(text.innerText).then(() =>
      alert(`Copied ${text.innerText} to Clipboard`)
    );
  };

  const renderAboutPageContent = () => {
    return (
      <Row
        justify="center"
        align="middle"
        className="about-page__container__content"
      >
        <AboutMe
          handler={handleCopyToClipboard}
          display={{
            displayState,
            setDisplayState,
            about: DISPLAY_STATE.ABOUT,
            leave: handleLeave,
          }}
        />
        <ContactMe
          display={{
            displayState,
            setDisplayState,
            contact: DISPLAY_STATE.CONTACT,
            leave: handleLeave,
          }}
        />
      </Row>
    );
  };

  return (
    <Row justify="center" align="middle" className="about-page">
      <PageNavigator navTo={APP_ROUTES.HOME} backHome />
      <PageNavigator navTo={APP_ROUTES.PROJECTS} />
      <Col className="about-page__container">{renderAboutPageContent()}</Col>
    </Row>
  );
};

export default About;
