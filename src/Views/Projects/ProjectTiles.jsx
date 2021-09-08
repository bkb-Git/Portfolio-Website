import Tile from './Tiles';
import PortfolioWebsiteImg from '../../assets/PortfolioWebsiteImg-min.png';

function ProjectTiles() {
  const exampleTiles = [
    {
      name: 'Portfolio Website',
      languages: ['React', 'Javascript', 'SCSS', 'HTML5'],
      description: 'This is my portfolio website',
      backgroundImg: PortfolioWebsiteImg,
      link: 'https://github.com/bkb-Git/Portfolio-Website',
      no: 1,
    },
    { no: 2 },
    { no: 3 },
    { no: 4 },
  ];

  const Tiles = exampleTiles.map((tileData, index) => {
    return <Tile data={tileData} tileNo={index} />;
  });

  return <div className="container-for-cards">{Tiles}</div>;
}

export default ProjectTiles;
