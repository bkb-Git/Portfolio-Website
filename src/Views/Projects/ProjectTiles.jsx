import Tile from './Tiles';
import PortfolioWebsiteImg from '../../assets/PortfolioWebsiteImg-min.png';
import GraphAppImg from '../../assets/WB-graph-app-cover.png';

function ProjectTiles() {
  const exampleTiles = [
    {
      name: 'World Bank Graph App',
      languages: ['React', 'Javascript', 'Bootstrap', 'HTML5', 'D3.js'],
      description:
        'Graphical representation of economic data using World Bank APIs',
      backgroundImg: GraphAppImg,
      gitLink: 'https://github.com/bkb-Git/Graph-Application',
      liveLink: '',
      no: 1,
    },
    {
      name: 'Portfolio Website',
      languages: ['React', 'Javascript', 'SCSS', 'HTML5'],
      description: 'This is my portfolio website',
      backgroundImg: PortfolioWebsiteImg,
      gitLink: 'https://github.com/bkb-Git/Portfolio-Website',
      liveLink: 'https://wb-graph-app.netlify.app/',
      no: 2,
    },
    { no: 3 },
    { no: 4 },
  ];

  const Tiles = exampleTiles.map((tileData, index) => {
    return <Tile data={tileData} tileNo={index} />;
  });

  return <div className="container-for-cards">{Tiles}</div>;
}

export default ProjectTiles;
