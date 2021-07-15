import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar(props) {
  const { buttons = [], page } = props;
  const history = useHistory();
  const appContext = useContext(AppContext);

  const NavBarOptions = buttons.map((elem, index) => {
    return elem.name === 'Home' || elem.name === 'About' ? (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a>
        <i
          className={`button-icons fa-4x icon${index}`}
          data={elem.name}
          onClick={() => elem.onClick(history, appContext)}
          onKeyUp={() => elem.onClick(history, appContext)}
          role="link"
          onFocus={() => elem.onClick(history, appContext)}
          tabIndex={0}
        >
          <FontAwesomeIcon icon={elem.icon} />
        </i>
      </a>
    ) : (
      <a href={elem.link} target="_blank" rel="noreferrer">
        <i
          className={`button-icons fa-4x icon${index}`}
          data={elem.name}
          role="link"
        >
          <FontAwesomeIcon icon={elem.icon} />
        </i>
      </a>
    );
  });

  return <div className={`side-navbar${page}`}>{NavBarOptions}</div>;
}

export default Navbar;
