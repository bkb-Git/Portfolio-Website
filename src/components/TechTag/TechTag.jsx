import { Col, Row } from 'antd';

import './TechTag.scss';

const TechTag = (props) => {
  const { name, icon } = props;
  return (
    <Col span={12}>
      <Row justify="center" align="middle" className="techTag" gutter={[8, 0]}>
        <Col className="techTag__icon">{icon}</Col>
        <Col>{name}</Col>
      </Row>
    </Col>
  );
};

export default TechTag;
