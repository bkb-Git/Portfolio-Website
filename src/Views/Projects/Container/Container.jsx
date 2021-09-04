import ArrowIcon from '../../../components/ArrowIcon';
import ProjectTiles from '../ProjectTiles';

import './Container.scss';

const Container = (props) => {
  const { clickHandler } = props;

  const renderProjectTiles = () => {
    return (
      <div className="Container-1">
        <div className="container-drop-shadow" />
        <ProjectTiles />
      </div>
    );
  };

  const renderPageNav = () => {
    return (
      <div
        className="page-nav-to-about"
        onClick={clickHandler}
        onKeyUp={clickHandler}
        role="link"
        tabIndex={0}
      >
        <ArrowIcon page={2} />
        <div className="page-nav-to-about__icon" />
      </div>
    );
  };

  return (
    <div>
      {renderProjectTiles()}
      {renderPageNav()}
    </div>
  );
};

export default Container;
