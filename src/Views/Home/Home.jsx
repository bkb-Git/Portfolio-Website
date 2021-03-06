import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import sns from '../../sns';
import Navbar from '../../components/Navbar';
import ArrowIcon from '../../components/ArrowIcon';
import Intro from './Intro';
import { AppContext } from '../../context/AppContext';

import './Home.scss';

function Home() {
  const history = useHistory();
  const appContext = useContext(AppContext);

  function handleClick(e) {
    const link = e.currentTarget.attributes.route.value;
    appContext.updateNextRoute(link);
    history.push(link);
  }

  const mobileOrDesktop = useMediaPredicate('(min-width: 700px)');

  const renderPageNavToProjects = () => {
    return (
      <div
        className="page-nav-to-projects"
        route="/projects"
        onClick={handleClick}
        onKeyUp={handleClick}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon page={1} />
        <div className="page-nav-to-projects__icon" />
      </div>
    );
  };

  const renderLeftSideView = () => {
    return (
      <>
        <div className="left-side-background" />
        <Intro clickHandler={handleClick} />
      </>
    );
  };

  const renderRightSideView = () => {
    return (
      <div className="right-side-background">
        {!mobileOrDesktop && (
          <div className="bar-menu">
            <Navbar buttons={sns} page={1} />
          </div>
        )}
        {renderPageNavToProjects()}
      </div>
    );
  };

  return (
    <div className="home-container">
      {mobileOrDesktop && <Navbar buttons={sns} page={1} />}
      {renderRightSideView()}
      {renderLeftSideView()}
    </div>
  );
}

export default Home;
