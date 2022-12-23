import { Carousel, Col, Row, Typography } from 'antd';

import { ReactComponent as CircleArrowUp } from '../../assets/circle-arrow-up-solid.svg';

import './ProjectCard.scss';

const { Title } = Typography;

const responsiveWidths = {
  lg: 20,
  xl: 20,
  xxl: 18,
};

const ProjectCard = (props) => {
  const { data = null, right } = props;
  const {
    name = 'TITLE',
    description = 'This is an example for where a description will be placed',
  } = data;

  const projectHeader = () => {
    return (
      <Row justify="space-between" align="middle" className="projectHeader">
        <Col span={18}>
          <Title level={3} className="projectHeader__title">
            {name}
          </Title>
        </Col>
        <Col span={6} className="projectHeader__button">
          <CircleArrowUp
            fontSize={20}
            className="projectHeader__button__icon"
          />
        </Col>
      </Row>
    );
  };

  const projectImages = () => {
    return (
      <Row justify="space-between" align="middle" className="projectImages">
        <Col span={16}>
          <Carousel />
        </Col>
        <Col span={8} />
      </Row>
    );
  };

  const renderProjectMain = () => {
    return (
      <Row
        justify="start"
        align="middle"
        gutter={[0, 25]}
        className="project__main"
      >
        <Col span={24}>{projectHeader()}</Col>
        <Col span={24}>{projectImages()}</Col>
      </Row>
    );
  };

  return (
    <Col {...responsiveWidths} className="project">
      <Row justify="space-between" align="middle">
        {right ? (
          <>
            <Col span={8}>{description}</Col>
            <Col span={12}>{renderProjectMain()}</Col>
          </>
        ) : (
          <>
            <Col span={12}>{renderProjectMain()}</Col>
            <Col span={8}>{description}</Col>
          </>
        )}
      </Row>
    </Col>
  );
};

export default ProjectCard;
