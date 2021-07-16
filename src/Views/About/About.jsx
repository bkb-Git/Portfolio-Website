/* eslint-disable no-alert */
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import ArrowIcon from '../../components/ArrowIcon';
import { AppContext } from '../../context/AppContext';

const DISPLAY_STATE = {
  ABOUT: 'about',
  CONTACT: 'contact',
};

function About() {
  const [displayState, setDisplayState] = useState('');
  const history = useHistory();
  const appContext = useContext(AppContext);

  function handleLeave() {
    setDisplayState('');
  }

  function handleRoute(e) {
    const link = e.currentTarget.attributes.route.value;
    appContext.updateNextRoute(link);
    history.push(link);
  }

  function handleClick(e) {
    const cb = navigator.clipboard;
    const text = e.currentTarget;
    cb.writeText(text.innerText).then(() =>
      alert(`Copied ${text.innerText} to Clipboard`)
    );
  }

  return (
    <div className="about-page">
      <div className="about-page__content">
        <div
          className="aboutMe"
          onMouseOver={() => setDisplayState(DISPLAY_STATE.ABOUT)}
          onMouseLeave={handleLeave}
          onFocus={() => setDisplayState(DISPLAY_STATE.ABOUT)}
          onBlur={handleLeave}
        >
          <AboutMe display={displayState} handler={handleClick} />
        </div>
        <div
          className="contactMe"
          onMouseOver={() => setDisplayState(DISPLAY_STATE.CONTACT)}
          onMouseLeave={handleLeave}
          onFocus={() => setDisplayState(DISPLAY_STATE.CONTACT)}
          onBlur={handleLeave}
        >
          <ContactMe display={displayState} />
        </div>
      </div>
      <Footer />
      <div
        className="page-nav-toHome"
        route="/"
        onClick={handleRoute}
        onKeyUp={handleRoute}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon backToHome />
        <div className="page-nav-toHome__icon" />
      </div>
      <div
        className="page-nav-backToProjects"
        route="/projects"
        onClick={handleRoute}
        onKeyUp={handleRoute}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon backToHome={false} />
        <div className="page-nav-backToProjects__icon" />
      </div>
    </div>
  );
}

export default About;
