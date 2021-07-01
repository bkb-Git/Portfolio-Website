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
        className="div-1"
        onClick={clickHandler}
        onKeyUp={clickHandler}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon page={2} />
        <div className="transition-icon-1" />
      </div>
    </div>
  );
}
