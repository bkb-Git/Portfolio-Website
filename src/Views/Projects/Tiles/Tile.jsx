import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';

import './Tile.scss';

const Tile = (props) => {
  const { data, tileNo } = props;

  const renderCardFrontTop = () => {
    return (
      <div className="card__top_front">
        <button type="button" className="card-button seeLive">
          <FontAwesomeIcon icon={faDesktop} />
          <span id="card-bt-text">Live</span>
        </button>
        <button type="button" className="card-button viewCode">
          <FontAwesomeIcon icon={faCode} />
          <span id="card-bt-text">Code</span>
        </button>
      </div>
    );
  };

  const renderCardFrontBottom = () => {
    return (
      <div className="card__bottom_front">
        <h2 className="title">TITLE</h2>
        <p className="description">
          This is an example for where a description will be placed
        </p>
        <ul>
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
      </div>
    );
  };

  const renderEmptyButton = () => {
    return (
      <div className="card__button">
        <span>Empty</span>
      </div>
    );
  };

  return (
    <div key={data.no} id={tileNo} className="card">
      {renderEmptyButton()}
      {renderCardFrontTop()}
      {renderCardFrontBottom()}
    </div>
  );
};

export default Tile;
