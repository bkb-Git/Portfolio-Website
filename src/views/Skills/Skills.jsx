/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Col, Typography, Grid } from 'antd';

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
import { useEffect } from 'react';

const { Title } = Typography;
const { useBreakpoint } = Grid;

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
  // Destructure breakpoints
  const { xs, sm, lg, xl, xxl } = useBreakpoint();

  // Breakpoints
  const is1080p = xl && !xxl;
  const isMobileOrTablet = (xs || sm) && !lg;

  useEffect(() => {}, [isMobileOrTablet]);

  // Map function to render skills tag
  const mappedSkills = (skillsToMap, SkillComponent) => {
    const determineGutter = () => {
      if (isMobileOrTablet) return [36, 36];
      if (is1080p) return [48, 36];
      return [64, 48];
    };

    return (
      <Row
        justify={isMobileOrTablet ? 'center' : 'start'}
        align="middle"
        gutter={determineGutter()}
      >
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

  const technicalSkills = () => {
    const determineGutter = () => {
      if (is1080p) return [32, 0];
      return [96, 0];
    };
    return (
      <Col
        xs={22}
        sm={22}
        xl={24}
        xxl={20}
        className="skillsPage__skills__technical"
      >
        <Row
          justify={isMobileOrTablet ? 'center' : 'start'}
          align="middle"
          gutter={determineGutter()}
        >
          <Col xxl={6} xl={6}>
            {skillsSubtitle('Technical', Divider)}
          </Col>
          <Col xxl={18} xl={18} xs={24} sm={24}>
            {mappedSkills(Object.values(Languages), TechSkillTag)}
          </Col>
        </Row>
      </Col>
    );
  };

  const softSkills = () => {
    return (
      <Col
        xs={22}
        sm={22}
        xxl={{ span: 20, offset: 4 }}
        xl={{ span: 24, offset: 0 }}
        className="skillsPage__skills__soft"
      >
        <Row
          justify={isMobileOrTablet ? 'center' : 'end'}
          align="middle"
          gutter={[is1080p ? 32 : 96, 0]}
        >
          {isMobileOrTablet && (
            <Col xxl={6} xl={5}>
              {skillsSubtitle('Soft', PuzzlePiece)}
            </Col>
          )}
          <Col xs={24} sm={24} xxl={18} xl={19}>
            {mappedSkills(SOFT_SKILLS, SoftSkillTag)}
          </Col>
          {!isMobileOrTablet && (
            <Col xxl={6} xl={5}>
              {skillsSubtitle('Soft', PuzzlePiece)}
            </Col>
          )}
        </Row>
      </Col>
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

  const renderSkills = () => {
    return (
      <Col span={24} className="skillsPage__skills">
        <Row
          justify={isMobileOrTablet ? 'center' : 'start'}
          align="middle"
          gutter={[0, isMobileOrTablet ? '10rem' : '20rem']}
        >
          {technicalSkills()}
          {softSkills()}
        </Row>
      </Col>
    );
  };

  return (
    <Row justify="center" align="middle" className="skillsPage">
      <a name="skills" id="#skills" />
      <Row justify="center" align="middle" className="skillsPage__screen">
        {renderTitle()}
        {renderSkills()}
      </Row>
    </Row>
  );
};

export default Skills;
