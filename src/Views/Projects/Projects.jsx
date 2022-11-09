import { Col, Row, Grid } from 'antd';

import ProjectSlider from './ProjectSlider';

import PortfolioWebsiteImg from '../../assets/portfolio-cover.jpg';
import GraphAppImg from '../../assets/WB-graph-app-cover.png';
import TravelLamuCover from '../../assets/Travel-Lamu-Cover.jpg';
import LLLCover from '../../assets/LLL Section 2.png';

import './Projects.scss';

const { useBreakpoint } = Grid;

const TILES__PROJECTS = {
  loglinkLogs: {
    name: 'Loglink Logistics Limited',
    languages: [
      'NextJS',
      'Javascript',
      'AntDesign',
      'HTML5',
      'SCSS',
      'Mailgun API',
    ],
    description: 'Main company website to attract new customers.',
    backgroundImg: LLLCover,
    gitLink: 'https://github.com/bkb-Git/Brasi-Web',
    liveLink: 'https://loglinklogistics.com',
    no: 1,
  },
  travelLamu: {
    name: 'Travel Lamu',
    languages: [
      'NextJS',
      'Javascript',
      'AntDesign',
      'FirebaseAuth',
      'HTML5',
      'SCSS',
    ],
    description:
      'Offers a hassle-free vacation experience for those that desire to travel to Lamu.',
    backgroundImg: TravelLamuCover,
    gitLink: 'https://github.com/bkb-Git/travel-lamu',
    liveLink: 'https://travel-lamu.vercel.app/',
    no: 2,
  },
  WBGraphApp: {
    name: 'World Bank Graph App',
    languages: ['React', 'Javascript', 'Bootstrap', 'HTML5', 'D3.js', 'SCSS'],
    description:
      'Graphical representation of economic data using World Bank APIs.',
    backgroundImg: GraphAppImg,
    gitLink: 'https://github.com/bkb-Git/Graph-Application',
    liveLink: 'https://wb-graph-app.netlify.app/',
    no: 3,
  },
  PortfolioWeb: {
    name: 'Portfolio Website',
    languages: ['React', 'Javascript', 'SCSS', 'HTML5'],
    description: 'This is my portfolio website',
    backgroundImg: PortfolioWebsiteImg,
    gitLink: 'https://github.com/bkb-Git/Portfolio-Website',
    liveLink: null,
    no: 4,
  },
};

const Projects = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Col span={24} style={{ background: '#0047ab' }}>
      <Row
        justify={isMobileOrTablet && 'center'}
        align={isMobileOrTablet && 'middle'}
        style={{ height: 'auto' }}
        className="projects"
      >
        <Col lg={24} className="projects__header">
          PORTFOLIO | PROJECTS
        </Col>
        <Col lg={24} sm={23} xs={22} className="projects__slider">
          <ProjectSlider projects={TILES__PROJECTS} />
        </Col>
      </Row>
    </Col>
  );
};

export default Projects;
