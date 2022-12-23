import { Col, Row, Grid } from 'antd';

import ProjectCard from 'components/ProjectCard';

import PortfolioWebsiteImg from 'assets/images/portfolio-cover.jpg';
import GraphAppImg from 'assets/images/WB-graph-app-cover.png';
import TravelLamuCover from 'assets/images/Travel-Lamu-Cover.jpg';
import LLLCover from 'assets/images/LLLSection2.png';

import './Projects.scss';

const { useBreakpoint } = Grid;

const TILES__PROJECTS = [
  {
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
  {
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
    rightSide: true,
    no: 2,
  },
  {
    name: 'World Bank Graph App',
    languages: ['React', 'Javascript', 'Bootstrap', 'HTML5', 'D3.js', 'SCSS'],
    description:
      'Graphical representation of economic data using World Bank APIs.',
    backgroundImg: GraphAppImg,
    gitLink: 'https://github.com/bkb-Git/Graph-Application',
    liveLink: 'https://wb-graph-app.netlify.app/',
    no: 3,
  },
  {
    name: 'Portfolio Website',
    languages: ['React', 'Javascript', 'SCSS', 'HTML5'],
    description: 'This is my portfolio website',
    backgroundImg: PortfolioWebsiteImg,
    gitLink: 'https://github.com/bkb-Git/Portfolio-Website',
    liveLink: null,
    rightSide: true,
    no: 4,
  },
];

const Projects = () => {
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Col span={24} className="projects">
      <Row
        justify={isMobileOrTablet && 'center'}
        align={isMobileOrTablet && 'middle'}
        gutter={[0, 20]}
      >
        <Col lg={24} className="projects__header">
          Latest Projects
        </Col>
        <Col lg={24} sm={23} xs={22} className="projects__works">
          <Row
            justify="center"
            align="middle"
            gutter={[0, 150]}
            style={{ height: 'auto' }}
          >
            {TILES__PROJECTS.map((work) => (
              <ProjectCard key={work.id} data={work} right={work.rightSide} />
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Projects;
