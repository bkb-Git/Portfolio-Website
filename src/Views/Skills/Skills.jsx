import { Row, Col, Typography } from 'antd';

import { ReactComponent as Divider } from 'assets/svg/Divider.svg';
import { ReactComponent as PuzzlePiece } from 'assets/svg/puzzle-piece-solid 1.svg';

import TechSkillTag from 'components/TechSkillTag';

import Languages from 'lib/constants/languages';

import './Skills.scss';

const { Title } = Typography;

const Skills = () => {
  const mappedSkills = (skillsToMap, SkillComponent) => {
    return (
      <Row justify="start" align="middle" gutter={[64, 48]}>
        {skillsToMap.map((skill) => (
          <SkillComponent key={Date.now()} data={skill} />
        ))}
      </Row>
    );
  };
  // Function that returns a subtitle
  const skillsSubtitle = (title, Icon) => {
    return (
      <Row
        justify="center"
        align="middle"
        gutter={[16, 0]}
        className="skillsSubtitle"
      >
        <Col>
          <Icon />
        </Col>
        <Col>
          <Title
            level={4}
            style={{ marginBottom: 0, color: '#fff' }}
            className="skillsSubtitle__title"
          >
            {title}
          </Title>
        </Col>
      </Row>
    );
  };

  // Render function for views defined here
  const renderTitle = () => {
    return (
      <Col span={24} className="skillsPage__header">
        <span className="skillsPage__header__box">Skills</span>
      </Col>
    );
  };

  const renderTechnicalSkills = () => {
    return (
      <Col span={18} className="skillsPage__skills__technical">
        <Row justify="start" align="middle" gutter={[96, 0]}>
          <Col span={6}>{skillsSubtitle('Technical', Divider)}</Col>
          <Col span={18}>
            {mappedSkills(Object.values(Languages), TechSkillTag)}
          </Col>
        </Row>
      </Col>
    );
  };

  const renderSoftSkills = () => {
    return (
      <Col offset={6} span={18} className="skillsPage__skills__soft">
        <Row justify="end" align="middle" gutter={[96, 0]}>
          <Col>Skills</Col>
          <Col>{skillsSubtitle('Soft', PuzzlePiece)}</Col>
        </Row>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className="skillsPage">
      {renderTitle()}
      <Col span={24} className="skillsPage__skills">
        <Row justify="start" align="middle" gutter={[0, 84]}>
          {renderTechnicalSkills()}
          {renderSoftSkills()}
        </Row>
      </Col>
    </Row>
  );
};

export default Skills;
