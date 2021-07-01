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
    <div className="about-background">
      <div className="container-flex">
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
        className="div-2"
        route="/"
        onClick={handleRoute}
        onKeyUp={handleRoute}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon backToHome />
        <div className="transition-icon-2" />
      </div>
      <div
        className="div-3"
        route="/projects"
        onClick={handleRoute}
        onKeyUp={handleRoute}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon backToHome={false} />
        <div className="transition-icon-3" />
      </div>
    </div>
  );
}

export default About;
