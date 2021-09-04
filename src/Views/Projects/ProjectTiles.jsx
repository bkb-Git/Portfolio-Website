import Tile from './Tiles';

function ProjectTiles() {
  const exampleTiles = [{ no: 1 }, { no: 2 }, { no: 3 }, { no: 4 }];

  const Tiles = exampleTiles.map((tileData, index) => {
    return <Tile data={tileData} tileNo={index} />;
  });

  return <div className="container-for-cards">{Tiles}</div>;
}

export default ProjectTiles;
