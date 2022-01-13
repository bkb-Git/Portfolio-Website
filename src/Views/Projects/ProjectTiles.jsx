import Tile from './Tiles';
import PortfolioWebsiteImg from '../../assets/PortfolioWebsiteImg-min.png';
import GraphAppImg from '../../assets/WB-graph-app-cover.png';
import TravelLamuCover from '../../assets/Travel-Lamu-Cover.jpg';

function ProjectTiles() {
  const exampleTiles = [
    {
      name: 'Travel Lamu',
      languages: [
        'NextJS',
        'Javascript',
        'AntDesign',
        'Firebase Auth',
        'HTML5',
        'SCSS',
      ],
      description:
        'Offers a hassle-free vacation experience for those that desire to travel to Lamu',
      backgroundImg: TravelLamuCover,
      gitLink: 'https://github.com/bkb-Git/travel-lamu',
      liveLink: 'https://travel-lamu.vercel.app/',
      no: 1,
    },
    {
      name: 'World Bank Graph App',
      languages: ['React', 'Javascript', 'Bootstrap', 'HTML5', 'D3.js'],
      description:
        'Graphical representation of economic data using World Bank APIs',
      backgroundImg: GraphAppImg,
      gitLink: 'https://github.com/bkb-Git/Graph-Application',
      liveLink: 'https://wb-graph-app.netlify.app/',
      no: 2,
    },
    {
      name: 'Portfolio Website',
      languages: ['React', 'Javascript', 'SCSS', 'HTML5'],
      description: 'This is my portfolio website',
      backgroundImg: PortfolioWebsiteImg,
      gitLink: 'https://github.com/bkb-Git/Portfolio-Website',
      liveLink: null,
      no: 3,
    },
    { no: 4 },
    { no: 5 },
  ];

  const Tiles = exampleTiles.map((tileData, index) => {
    return <Tile data={tileData} tileNo={index} />;
  });

  return <div className="container-for-cards">{Tiles}</div>;
}

export default ProjectTiles;
