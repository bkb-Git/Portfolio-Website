import { Col, Row, Grid } from 'antd';

import ProjectSlider from './ProjectSlider';

import PortfolioWebsiteImg from '../../assets/PortfolioWebsiteImg-min.png';
import GraphAppImg from '../../assets/WB-graph-app-cover.png';
import TravelLamuCover from '../../assets/Travel-Lamu-Cover.jpg';

import PageNavigator from '../../components/PageNavigator/PageNavigator';
import { APP_ROUTES } from '../../lib/constants/global-vars';

import './Projects.scss';

const { useBreakpoint } = Grid;

const TILES__PROJECTS = {
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
    no: 1,
  },
  WBGraphApp: {
    name: 'World Bank Graph App',
    languages: ['React', 'Javascript', 'Bootstrap', 'HTML5', 'D3.js', 'SCSS'],
    description:
      'Graphical representation of economic data using World Bank APIs.',
    backgroundImg: GraphAppImg,
    gitLink: 'https://github.com/bkb-Git/Graph-Application',
    liveLink: 'https://wb-graph-app.netlify.app/',
    no: 2,
  },
  PortfolioWeb: {
    name: 'Portfolio Website',
    languages: ['React', 'Javascript', 'SCSS', 'HTML5'],
    description: 'This is my portfolio website',
    backgroundImg: PortfolioWebsiteImg,
    gitLink: 'https://github.com/bkb-Git/Portfolio-Website',
    liveLink: null,
    no: 3,
  },
  empty1: {},
  empty2: {},
};

const Projects = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const renderHeader = () => {
    return (
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <p className="projects__header__text">PORTFOLIO</p>
      </Row>
    );
  };

  const renderContent = () => {
    return (
      <Row
        justify={isMobileOrTablet && 'center'}
        align={isMobileOrTablet && 'middle'}
        style={{ height: '100%' }}
      >
        <Col lg={24} className="projects__header">
          {renderHeader()}
        </Col>
        <Col lg={24} sm={23} xs={22} className="projects__slider">
          <ProjectSlider projects={TILES__PROJECTS} />
        </Col>
      </Row>
    );
  };

  return (
    <Row className="projects">
      <Col lg={24} style={{ height: '85%' }}>
        {renderContent()}
      </Col>
      <Col lg={24} sm={24} xs={24} style={{ height: '15%' }}>
        <PageNavigator navTo={APP_ROUTES.ABOUT} />
      </Col>
    </Row>
  );
};

export default Projects;
