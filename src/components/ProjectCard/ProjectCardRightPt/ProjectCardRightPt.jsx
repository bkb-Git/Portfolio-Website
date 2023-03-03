import { Col, Row, Typography, Grid } from 'antd';

import { ReactComponent as AboutIcon } from 'assets/svg/About-Icon.svg';
import { ReactComponent as GearsIcon } from 'assets/svg/Gears-Icon.svg';
import TechTag from 'components/TechTag';

import './ProjectCardRightPt.scss';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const ProjectCardRightPt = (props) => {
  const { description, stack } = props;

  // Breakpoints
  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  // Header function
  const header = (name, HeaderIcon) => {
    return (
      <Row
        justify="start"
        align="middle"
        gutter={[isMobileOrTablet ? 8 : 16, 0]}
      >
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HeaderIcon
            style={{
              width: isMobileOrTablet && 24,
              height: isMobileOrTablet && 24,
            }}
          />
        </Col>
        <Col>
          <Title
            level={isMobileOrTablet ? 5 : 4}
            className="projectCardRight__title"
          >
            {name}
          </Title>
        </Col>
      </Row>
    );
  };

  // Project about
  const renderAbout = () => {
    return (
      <Col span={24} className="projectCardRight__about">
        <Row justify="center" align="middle" gutter={[0, 24]}>
          <Col span={24}>{header('About', AboutIcon)}</Col>
          <Col span={24}>
            <Paragraph className="projectCardRight__about__text">
              {description}
            </Paragraph>
          </Col>
        </Row>
      </Col>
    );
  };

  // Project tech stack
  const renderStack = () => {
    return (
      <Col span={24} className="projectCardRight__stack">
        <Row justify="center" align="middle" gutter={[0, 24]}>
          <Col span={24}>{header('Technology Stack', GearsIcon)}</Col>
          <Col span={24}>
            <Row
              justify={isMobileOrTablet ? 'center' : 'start'}
              align="middle"
              gutter={[24, 24]}
            >
              {stack.map((tech) => (
                <TechTag
                  key={`${tech.displayText}-${Date.now()}`}
                  name={tech.displayText}
                  icon={tech.icon}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    );
  };

  return (
    <Row
      justify="space-between"
      align="top"
      gutter={[0, 32]}
      className="projectCardRight"
    >
      {renderAbout()}
      {renderStack()}
    </Row>
  );
};

export default ProjectCardRightPt;
