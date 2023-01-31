import { Col, Row, Grid } from 'antd';

import ProjectCard from 'components/ProjectCard';

import PortfolioWebsiteImg from 'assets/images/portfolio-cover.jpg';
import GraphAppImg from 'assets/images/WB-graph-app-cover.png';
import TravelLamuCover from 'assets/images/Travel-Lamu-Cover.jpg';
import LLLCover from 'assets/images/LLLSection2.png';

import './Projects.scss';
import Languages from 'lib/constants/languages';

const { useBreakpoint } = Grid;

const TILES__PROJECTS = [
  {
    name: 'Loglink Logistics Limited',
    languages: [
      Languages.NextJs,
      Languages.Javascript,
      Languages.AntDesign,
      Languages.HTML5,
      Languages.SCSS,
      Languages.MailGun,
    ],
    description:
      'The official website of Loglink Logistics Limited. This website is designed to attract new clients and provide a seamless experience for existing ones. As one of the leading logistics providers in Nairobi, Kenya, our goal was to create a user-friendly platform that showcases our services and allows for easy quotation inquiries. Built with the latest technologies and best practices, the website is optimized for speed and accessibility. The responsive design adapts to any device, allowing clients to access our site from anywhere.',
    backgroundImg: LLLCover,
    gitLink: 'https://github.com/bkb-Git/Brasi-Web',
    liveLink: 'https://loglinklogistics.com',
    no: 1,
  },
  {
    name: 'Travel Lamu',
    languages: [
      Languages.NextJs,
      Languages.Javascript,
      Languages.AntDesign,
      Languages.Firebase,
      Languages.HTML5,
      Languages.SCSS,
    ],
    description:
      "A mock-up website for Travel Lamu, the premier travel destination in Lamu, Kenya. I built this website with the goal of making it easy for visitors to plan and book their dream vacation in Lamu. The site showcases all the popular spots, tour guides and travel essentials, like car rentals and booking for accommodations. I used the latest technologies and best practices in web development to create a responsive design that looks great on any device, and built the site's structure for easy navigation. The booking system is intuitive and fast, it makes the process easy and efficient for visitors.",
    backgroundImg: TravelLamuCover,
    gitLink: 'https://github.com/bkb-Git/travel-lamu',
    liveLink: 'https://travel-lamu.vercel.app/',
    rightSide: true,
    no: 2,
  },
  {
    name: 'World Bank Graph App',
    languages: [
      Languages.React,
      Languages.Javascript,
      Languages.Bootstrap,
      Languages.HTML5,
      Languages.D3js,
      Languages.SCSS,
    ],
    description:
      'Graphical representation of economic data using World Bank APIs.',
    backgroundImg: GraphAppImg,
    gitLink: 'https://github.com/bkb-Git/Graph-Application',
    liveLink: 'https://wb-graph-app.netlify.app/',
    no: 3,
  },
  {
    name: 'Portfolio Website',
    languages: [
      Languages.React,
      Languages.Javascript,
      Languages.SCSS,
      Languages.HTML5,
    ],
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

  // Render functions defined here
  const renderTitle = () => {
    return (
      <Col span={24} className="projects__header">
        Latest Projects
      </Col>
    );
  };

  const renderProjects = () => {
    return (
      <Col span={24} className="projects__works">
        <Row
          justify="center"
          align="middle"
          gutter={[0, 150]}
          style={{ height: 'auto' }}
        >
          {TILES__PROJECTS.map((work) => (
            <ProjectCard key={work.no} data={work} right={work.rightSide} />
          ))}
        </Row>
      </Col>
    );
  };

  return (
    <Col span={24} className="projects">
      <Row
        justify={isMobileOrTablet && 'center'}
        align={isMobileOrTablet && 'middle'}
      >
        {renderTitle()}
        {renderProjects()}
      </Row>
    </Col>
  );
};

export default Projects;
