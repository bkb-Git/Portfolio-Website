/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row, Grid } from 'antd';

import ProjectCard from 'components/ProjectCard';

import GraphAppImg from 'assets/images/WB-graph-app-cover.png';
import TravelLamuCover from 'assets/images/Travel-Lamu-Cover.jpg';
import LLLCover from 'assets/images/LLLSection2.png';
import RadicalX from 'assets/images/radicalx-internships.png';

import Languages from 'lib/constants/languages';

import './Projects.scss';

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
    name: 'RadicalX Internships',
    languages: [
      Languages.React,
      Languages.Javascript,
      Languages.AntDesign,
      Languages.HTML5,
      Languages.SCSS,
      Languages.Firebase,
    ],
    description:
      'This is a web-based CRUD (Create, Read, Update, Delete) application that streamlines the process of intern hiring for recruiters and companies. The app is designed to provide a platform for companies to post internships and apprenticeships, as well as for individuals to search and apply for opportunities that match their skills and interests. Built using React and Ant Design, the app offers a user-friendly and intuitive interface that makes it easy for recruiters to manage their intern hiring process. For individuals, the app provides a centralized and organized way to search for internships and apprenticeships, eliminating the need to spend countless hours browsing multiple websites.',
    backgroundImg: RadicalX,
    rightSide: true,
    gitLink: 'https://github.com/bkb-Git/RadicalX-Internships-Tab',
    liveLink: 'https://radicalx-internships-bkb.netlify.app/',
    no: 2,
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
    no: 3,
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
      'This is an app that offers a way to visualize world economic data. The app is powered by JSON APIs provided by the World Bank and organizes data from nations by their respective regions. I utilized D3.js to create interactive and visually appealing graphs and used the latest developer technologies to ensure their performance and reliability. I believe that this app is not just a tool for understanding economic data, but also a demonstration of my expertise in data visualization, web development, and the use of APIs. I am confident that this project showcases my ability to bring together multiple technologies to create a seamless user experience.',
    backgroundImg: GraphAppImg,
    rightSide: true,
    gitLink: 'https://github.com/bkb-Git/Graph-Application',
    liveLink: 'https://wb-graph-app.netlify.app/',
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
      <a name="projects" id="#projects" />
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
