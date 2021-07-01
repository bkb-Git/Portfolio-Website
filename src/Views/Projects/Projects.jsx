import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import sns from '../../sns';
import Container from './Container';
import Header from './Header';
import Navbar from '../../components/Navbar';

function Projects() {
  const history = useHistory();
  const appContext = useContext(AppContext);

  function handleClick() {
    appContext.updateNextRoute('/about');
    history.push('/about');
  }
  return (
    <div className="projects-p-background">
      <Header />
      <Navbar buttons={sns} page={2} />
      <Container clickHandler={handleClick} />
    </div>
  );
}

export default Projects;
