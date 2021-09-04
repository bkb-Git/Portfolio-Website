import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import { AppContext } from '../../context/AppContext';
import sns from '../../sns';
import Container from './Container';
import Header from './Header';
import Navbar from '../../components/Navbar';

import './Projects.scss';

const Projects = () => {
  const history = useHistory();
  const appContext = useContext(AppContext);

  function handleClick() {
    appContext.updateNextRoute('/about');
    history.push('/about');
  }

  const mobileOrDesktop = useMediaPredicate('(min-width: 700px)');

  return (
    <div className="projects-p-background">
      <Header />
      {mobileOrDesktop && <Navbar buttons={sns} page={2} />}
      {!mobileOrDesktop && (
        <div className="bar-menu">
          <Navbar buttons={sns} page={2} />
        </div>
      )}
      <Container clickHandler={handleClick} />
    </div>
  );
};

export default Projects;
