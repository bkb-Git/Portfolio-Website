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
    ) : (
      <i className={`button-icons fa-4x icon${index}`} data={elem.name}>
        <FontAwesomeIcon icon={elem.icon} />
      </i>
    );
  });

  return <div className={`side-navbar${page}`}>{NavBarOptions}</div>;
}

export default Navbar;
