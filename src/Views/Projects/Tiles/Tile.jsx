import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';

import './Tile.scss';

const Tile = (props) => {
  const { data, tileNo } = props;
  const {
    name = 'TITLE',
    description = 'This is an example for where a description will be placed',
    languages = ['Item One', 'Item Two', 'Item Three', 'Item Four'],
    link: WebsiteLink = '',
    backgroundImg,
  } = data;

  const handleRoute = (e) => {
    e.preventDefault();
    window.open(WebsiteLink, '_blank');
  };

  const renderCardFrontTop = () => {
    return (
      <div className="card__top_front">
        <button type="button" className="card-button seeLive">
          <FontAwesomeIcon icon={faDesktop} />
          <span id="card-bt-text">Live</span>
        </button>
        <button
          onClick={(e) => handleRoute(e)}
          type="button"
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
