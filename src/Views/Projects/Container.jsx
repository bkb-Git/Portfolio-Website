import ArrowIcon from '../../components/ArrowIcon';
import Tile from './Tiles';

export default function Container(props) {
  const { clickHandler } = props;
  return (
    <div>
      <div className="Container-1">
        <div className="container-drop-shadow" />
        <Tile />
      </div>
      <div
        className="page-nav-toAbout"
        onClick={clickHandler}
        onKeyUp={clickHandler}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon page={2} />
        <div className="page-nav-toAbout__icon" />
      </div>
    </div>
  );
}
