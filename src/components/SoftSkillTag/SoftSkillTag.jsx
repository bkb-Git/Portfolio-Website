import { Col, Row } from 'antd';

import './SoftSkillTag.scss';

const SoftSkillTag = (props) => {
  const { data } = props;
  const { name, icon } = data;
  return (
    <Col span={8}>
      <Row
        justify="center"
        align="middle"
        className="softSkillTag"
        gutter={[12, 0]}
      >
        <Col className="techSkillTag__icon">{icon}</Col>
        <Col className="techSkillTag__text">{name}</Col>
      </Row>
    </Col>
  );
};

export default SoftSkillTag;
