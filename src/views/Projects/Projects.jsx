/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Row, Grid } from 'antd';

import ProjectCard from 'components/ProjectCard';

// First project image imports
import LLLSection1 from 'assets/images/Project Screenshots/Loglink Logistics/LLL Section 1.png';
import LLLSection2 from 'assets/images/Project Screenshots/Loglink Logistics/LLL Section 2.png';
import LLLSection3 from 'assets/images/Project Screenshots/Loglink Logistics/LLL Section 3.png';
import LLLSection4 from 'assets/images/Project Screenshots/Loglink Logistics/LLL Section 4.png';
import LLLSection5 from 'assets/images/Project Screenshots/Loglink Logistics/LLL Section 5.png';

// Second project image imports
import RadicalXCover from 'assets/images/Project Screenshots/RadicalX/radicalx-internships.png';
import RadicalXFirstView from 'assets/images/Project Screenshots/RadicalX/FirstView.jpg';
import RadicalXSecondView from 'assets/images/Project Screenshots/RadicalX/SecondView.jpg';
import RadicalXThirdView from 'assets/images/Project Screenshots/RadicalX/ThirdView.jpg';
import RadicalXFourthView from 'assets/images/Project Screenshots/RadicalX/FourthView.jpg';
import RadicalXFifthView from 'assets/images/Project Screenshots/RadicalX/FifthView.jpg';

// Third project image imports
import TravelLamuCover from 'assets/images/Project Screenshots/Travel Lamu/Travel-Lamu-Cover.jpg';
import TravelLamuSecondView from 'assets/images/Project Screenshots/Travel Lamu/SecondView.jpg';
import TravelLamuThirdView from 'assets/images/Project Screenshots/Travel Lamu/ThirdView.jpg';
import TravelLamuFourthView from 'assets/images/Project Screenshots/Travel Lamu/FourthView.jpg';
import TravelLamuFifthView from 'assets/images/Project Screenshots/Travel Lamu/FifthView.jpg';
import TravelLamuSixthView from 'assets/images/Project Screenshots/Travel Lamu/SixthView.jpg';

// Fourth project image imports
import GraphAppImg from 'assets/images/Project Screenshots/WBGraphPic/WB-graph-app-cover.png';
import GraphAppFirstView from 'assets/images/Project Screenshots/WBGraphPic/First View.jpg';
import GraphAppSecondView from 'assets/images/Project Screenshots/WBGraphPic/Second View.jpg';
import GraphAppThirdView from 'assets/images/Project Screenshots/WBGraphPic/Third View.jpg';

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
    screenshots: [
      LLLSection2,
      LLLSection1,
      LLLSection3,
      LLLSection4,
      LLLSection5,
    ],
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
    screenshots: [
      RadicalXCover,
      RadicalXFirstView,
      RadicalXSecondView,
      RadicalXThirdView,
      RadicalXFourthView,
      RadicalXFifthView,
    ],
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
    screenshots: [
      TravelLamuCover,
      TravelLamuSecondView,
      TravelLamuThirdView,
      TravelLamuFourthView,
      TravelLamuFifthView,
      TravelLamuSixthView,
    ],
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
    screenshots: [
      GraphAppImg,
      GraphAppFirstView,
      GraphAppSecondView,
      GraphAppThirdView,
    ],
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
