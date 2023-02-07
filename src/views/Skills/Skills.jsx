/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Col, Typography } from 'antd';

import { ReactComponent as Divider } from 'assets/svg/Divider.svg';
import { ReactComponent as PuzzlePiece } from 'assets/svg/puzzle-piece-solid 1.svg';

import TechSkillTag from 'components/TechSkillTag';
import SoftSkillTag from 'components/SoftSkillTag';

import Languages from 'lib/constants/languages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import {
  faInfinity,
  faHourglass,
  faSearch,
  faPeopleGroup,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import './Skills.scss';

const { Title } = Typography;

const SOFT_SKILLS = [
  {
    displayText: 'Effective Communication',
    icon: <FontAwesomeIcon icon={faTeamspeak} size="2x" color="#1c3879" />,
  },
  {
    displayText: 'Team Work',
    icon: <FontAwesomeIcon icon={faPeopleGroup} size="2x" color="#1c3879" />,
  },
  {
    displayText: 'Time Management',
    icon: <FontAwesomeIcon icon={faHourglass} size="2x" color="#1c3879" />,
  },
  {
    displayText: 'Problem Solving',
    icon: <FontAwesomeIcon icon={faSearch} size="2x" color="#1c3879" />,
  },
  {
    displayText: 'Adaptability',
    icon: <FontAwesomeIcon icon={faInfinity} size="2x" color="#1c3879" />,
  },
  {
    displayText: 'Critical Thinking',
    icon: <FontAwesomeIcon icon={faLightbulb} size="2x" color="#1c3879" />,
  },
];

const Skills = () => {
  // Map function to render skills tag
  const mappedSkills = (skillsToMap, SkillComponent) => {
    return (
      <Row justify="start" align="middle" gutter={[64, 48]}>
        {skillsToMap.map((skill) => (
          <SkillComponent
            key={`${skill.displayText}-${Date.now()}`}
            data={skill}
          />
        ))}
      </Row>
    );
  };

  // Function to render skills category
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
      <Col xl={22} xxl={20} className="skillsPage__skills__technical">
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
      <Col
        xxl={{ span: 20, offset: 4 }}
        xl={{ span: 22, offset: 2 }}
        className="skillsPage__skills__soft"
      >
        <Row justify="end" align="middle" gutter={[96, 0]}>
          <Col span={18}>{mappedSkills(SOFT_SKILLS, SoftSkillTag)}</Col>
          <Col span={6}>{skillsSubtitle('Soft', PuzzlePiece)}</Col>
        </Row>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className="skillsPage">
      <a name="skills" id="#skills" />
      <Row justify="center" align="middle" className="skillsPage__screen">
        {renderTitle()}
        <Col span={24} className="skillsPage__skills">
          <Row justify="start" align="middle" gutter={[0, '20rem']}>
            {renderTechnicalSkills()}
            {renderSoftSkills()}
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Skills;
