import { Col, Row } from 'antd';

import ProjectCardLeftPt from './ProjectCardLeftPt';
import ProjectCardRightPt from './ProjectCardRightPt';

import './ProjectCard.scss';

const responsiveWidths = {
  xs: 22,
  sm: 23,
  lg: 22,
  xl: 22,
  xxl: 21,
};

const ProjectCard = (props) => {
  const { data = null, right } = props;
  const {
    name = 'TITLE',
    description = 'This is an example for where a description will be placed',
    backgroundImg,
    languages,
    gitLink,
    liveLink,
  } = data;

  // Render functions for each part

  const renderRightPart = () => {
    return (
      <Col span={10}>
        <ProjectCardRightPt description={description} stack={languages} />
      </Col>
    );
  };

  const renderLeftPart = () => {
    return (
      <Col span={12}>
        <ProjectCardLeftPt
          name={name}
          image={backgroundImg}
          links={{ gitLink, liveLink }}
        />
      </Col>
    );
  };

  return (
    <Col {...responsiveWidths} className="project">
      <Row justify="space-between" align="top">
        {right ? (
          <>
            {renderRightPart()}
            {renderLeftPart()}
          </>
        ) : (
          <>
            {renderLeftPart()}
            {renderRightPart()}
          </>
        )}
      </Row>
    </Col>
  );
};

export default ProjectCard;
