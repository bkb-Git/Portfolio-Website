import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';

import './Tile.scss';

const Tile = (props) => {
  const { data, tileNo } = props;
  const {
    name = 'TITLE',
    description = 'This is an example for where a description will be placed',
    languages = ['Item One', 'Item Two', 'Item Three', 'Item Four'],
    gitLink = '',
    liveLink = '',
    backgroundImg,
    id,
  } = data;

  const live = 'live';
  const code = 'code';

  const handleRoute = (e) => {
    e.preventDefault();
    const liveId = `${id}-${live}`;
    let link;

    if (e.target.id === liveId) {
      link = liveLink;
    }
    link = gitLink;

    window.open(link, '_blank');
  };

  const renderCardFrontTop = () => {
    return (
      <div className="card__top_front">
        <button
          onClick={(e) => handleRoute(e)}
          type="button"
          id={`${id}-${live}`}
          className="card-button seeLive"
        >
          <FontAwesomeIcon icon={faDesktop} />
          <span id="card-bt-text">Live</span>
        </button>
        <button
          onClick={(e) => handleRoute(e)}
          type="button"
          id={`${id}-${code}`}
          className="card-button viewCode"
        >
          <FontAwesomeIcon icon={faCode} />
          <span id="card-bt-text">Code</span>
        </button>
      </div>
    );
  };

  const renderCardFrontBottom = () => {
    return (
      <div className="card__bottom_front">
        <h2 className="title">{name}</h2>
        <p className="description">{description}</p>
        <ul>
          {languages.map((elem) => (
            <li key={`PW-${elem}`}>{elem}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderEmptyButton = () => {
    if (backgroundImg) {
      return null;
    }
    return (
      <div className="card__button">
        <span>Empty</span>
      </div>
    );
  };

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${backgroundImg})` }}
      key={data.no}
      id={tileNo}
    >
      {renderEmptyButton()}
      {renderCardFrontTop()}
      {renderCardFrontBottom()}
    </div>
  );
};

export default Tile;
