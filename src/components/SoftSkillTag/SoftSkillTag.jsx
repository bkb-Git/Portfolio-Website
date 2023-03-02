import { Col, Row } from 'antd';

import './SoftSkillTag.scss';

const SoftSkillTag = (props) => {
  const { data } = props;
  const { displayText, icon } = data;
  return (
    <Col xs={22} sm={22} xl={8} xxl={8}>
      <Row
        justify="center"
        align="middle"
        className="softSkillTag"
        gutter={[12, 0]}
      >
        <Col className="techSkillTag__icon">{icon}</Col>
        <Col className="techSkillTag__text">{displayText}</Col>
      </Row>
    </Col>
  );
};

export default SoftSkillTag;
