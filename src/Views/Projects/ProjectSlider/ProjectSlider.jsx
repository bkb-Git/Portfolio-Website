import { Carousel, Col, Row, Grid } from 'antd';

import ProjectCard from '../ProjectCard';

import './ProjectSlider.scss';

const { useBreakpoint } = Grid;

const ProjectSlider = (props) => {
  const { projects } = props;
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  return (
    <Row justify="center" align="middle" className="projectSlider">
      <Col lg={22}>
        <Carousel
          slidesToShow={isMobileOrTablet ? 1 : 3}
          slidesToScroll={1}
          dots={{ className: 'customDots' }}
          dotPosition="top"
          draggable
        >
          <ProjectCard data={projects.loglinkLogs} />
          <ProjectCard data={projects.travelLamu} />
          <ProjectCard data={projects.WBGraphApp} />
          <ProjectCard data={projects.PortfolioWeb} />
        </Carousel>
      </Col>
    </Row>
  );
};

export default ProjectSlider;
