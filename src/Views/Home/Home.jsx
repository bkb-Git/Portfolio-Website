import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import sns from '../../sns';
import Navbar from '../../components/Navbar';
import ArrowIcon from '../../components/ArrowIcon';
import Intro from './Intro';
import { AppContext } from '../../context/AppContext';

function Home() {
  const history = useHistory();
  const appContext = useContext(AppContext);

  function handleClick(e) {
    const link = e.currentTarget.attributes.route.value;
    appContext.updateNextRoute(link);
    history.push(link);
  }

  return (
    <div className="home-container">
      <Navbar buttons={sns} page={1} />
      <div className="right-side-background">
        <div
          className="div"
          route="/projects"
          onClick={handleClick}
          onKeyUp={handleClick}
          role="link"
          tabIndex={0}
        >
          <ArrowIcon page={1} />
          <div className="transition-icon" />
        </div>
      </div>
      <div className="left-side-background" />
      <Intro clickHandler={handleClick} />
    </div>
  );
}

export default Home;