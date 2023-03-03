import { Col, Row, Grid } from 'antd';

import ProjectCardLeftPt from './ProjectCardLeftPt';
import ProjectCardRightPt from './ProjectCardRightPt';

import './ProjectCard.scss';
import MobileCardView from './MobileCardView';

const responsiveWidths = {
  xs: 22,
  sm: 23,
  lg: 22,
  xl: 22,
  xxl: 21,
};

const { useBreakpoint } = Grid;

const ProjectCard = (props) => {
  const { data = null, right } = props;
  const {
    name = 'TITLE',
    description = 'This is an example for where a description will be placed',
    screenshots,
    languages,
    gitLink,
    liveLink,
  } = data;

  // Breakpoints
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

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
          screenshots={screenshots}
          links={{ gitLink, liveLink }}
        />
      </Col>
    );
  };

  // View to be rendered
  const renderView = () => {
    if (isMobileOrTablet) {
      return <MobileCardView data={data} />;
    }

    return right ? (
      <>
        {renderRightPart()}
        {renderLeftPart()}
      </>
    ) : (
      <>
        {renderLeftPart()}
        {renderRightPart()}
      </>
    );
  };

  return (
    <Col {...responsiveWidths} className="project">
      <Row
        justify={isMobileOrTablet ? 'center' : 'space-between'}
        align="center"
      >
        {renderView()}
      </Row>
    </Col>
  );
};

export default ProjectCard;
