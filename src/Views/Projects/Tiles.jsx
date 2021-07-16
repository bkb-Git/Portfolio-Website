import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';

function Tile() {
  const exampleTiles = [{ no: 1 }, { no: 2 }, { no: 3 }, { no: 4 }];

  const Tiles = exampleTiles.map((elem, index) => {
    return (
      <div key={elem.no} id={index} className="card">
        <div className="card__button">
          <span>Empty</span>
        </div>
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
      </div>
    );
  });

  return <div className="container-for-cards">{Tiles}</div>;
}

export default Tile;
