/* eslint-disable no-alert */
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import ArrowIcon from '../../components/ArrowIcon';
import { AppContext } from '../../context/AppContext';

import './About.scss';

const DISPLAY_STATE = {
  ABOUT: 'about',
  CONTACT: 'contact',
};

const About = () => {
  const [displayState, setDisplayState] = useState('');
  const history = useHistory();
  const appContext = useContext(AppContext);

  const handleLeave = () => {
    setDisplayState('');
  };

  const handleRoute = (e) => {
    const link = e.currentTarget.attributes.route.value;
    appContext.updateNextRoute(link);
    history.push(link);
  };

  const handleClick = (e) => {
    const cb = navigator.clipboard;
    const text = e.currentTarget;
    cb.writeText(text.innerText).then(() =>
      alert(`Copied ${text.innerText} to Clipboard`)
    );
  };

  const renderAboutPageContent = () => {
    return (
      <div className="about-page__content">
        <AboutMe
          displaystate={displayState}
          handler={handleClick}
          display={{
            setDisplayState,
            about: DISPLAY_STATE.ABOUT,
            leave: handleLeave,
          }}
        />
        <ContactMe
          displaystate={displayState}
          display={{
            setDisplayState,
            contact: DISPLAY_STATE.CONTACT,
            leave: handleLeave,
          }}
        />
      </div>
    );
  };

  const renderPageNavToHome = () => {
    return (
      <div
        className="about-page__page-nav-to-home"
        route="/"
        onClick={handleRoute}
        onKeyUp={handleRoute}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon backToHome />
        <div className="about-page__page-nav-to-home__icon" />
      </div>
    );
  };

  const renderPageNavBackToProjects = () => {
    return (
      <div
        className="about-page__page-nav-back-to-projects"
        route="/projects"
        onClick={handleRoute}
        onKeyUp={handleRoute}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon backToHome={false} />
        <div className="about-page__page-nav-back-to-projects__icon" />
      </div>
    );
  };

  return (
    <div className="about-page">
      {renderAboutPageContent()}
      <Footer />
      {renderPageNavToHome()}
      {renderPageNavBackToProjects()}
    </div>
  );
};

export default About;
