import { Col, Row } from 'antd';

import './TechSkillTag.scss';

const TechSkillTag = (props) => {
  const { data } = props;
  const { displayText, icon } = data;
  return (
    <Col span={6}>
      <Row
        justify="center"
        align="middle"
        className="techSkillTag"
        gutter={[8, 0]}
      >
        <Col className="techSkillTag__icon">{icon}</Col>
        <Col className="techSkillTag__text">{displayText}</Col>
      </Row>
    </Col>
  );
};

export default TechSkillTag;
