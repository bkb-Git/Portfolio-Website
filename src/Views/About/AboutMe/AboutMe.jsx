// eslint-disable-next-line no-unused-vars
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, List, Row, Typography, Grid, Image } from 'antd';
import { saveAs } from 'file-saver';
import resume from '../../../assets/Resume.pdf';

import LanguageIcons from '../../../lib/constants/languageIcons';

import ProfilePhoto from '../../../assets/ProfilePhoto.jpg';

import './AboutMe.scss';

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const languages = [
  'NextJS',
  'Javascript',
  'SCSS',
  'AntDesign',
  'Bootstrap',
  'React',
  'D3.js',
  'HTML5',
  'FirebaseAuth',
  'RestAPIs',
  'Redux',
  'Git',
];

const AboutMe = (props) => {
  const { handler, display } = props;
  const { displayState, setDisplayState, about, leave } = display;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const hoverOnAbout = displayState === about;

  const handleDownload = () => saveAs(resume, 'resume.pdf');

  const myAvatar = () => {
    return (
      <Row justify="start" align="middle">
        <Col lg={10}>
          <Row
            justify="center"
            align="middle"
            style={{ flexDirection: isMobileOrTablet && 'column' }}
            gutter={isMobileOrTablet && [0, 16]}
          >
            <Col lg={12} xs={24} sm={24}>
              <Avatar
                size={84}
                src={
                  <Image
                    width={84}
                    height={84}
                    src={ProfilePhoto}
                    style={{ objectFit: 'cover' }}
                  />
                }
              />
            </Col>
            <Col lg={12} xs={24} sm={24}>
              <Row
                justify="center"
                align="middle"
                style={{ flexDirection: isMobileOrTablet && 'column' }}
              >
                <Col lg={24}>
                  <Title level={4}>Billy Kipkorir Bett</Title>
                </Col>
                <Col lg={24}>
                  <Text type="secondary">Software Engineer</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  const renderTitle = () => {
    return (
      <h1 className="about-page__container__content__aboutMe__header__title">
        About <span>Me</span>
      </h1>
    );
  };

  const personalDets = () => {
    return (
      <Row
        justify="center"
        align="middle"
        className="about-page__container__content__aboutMe__about-grid-display__personal-details"
      >
        <Col
          xl={8}
          lg={8}
          xs={22}
          sm={22}
          id="detail1"
          className="about-page__container__content__aboutMe__about-grid-display__personal-details__details"
        >
          Nairobi,Kenya
        </Col>
        <Col
          lg={8}
          xs={22}
          sm={22}
          id="detail2"
          className="about-page__container__content__aboutMe__about-grid-display__personal-details__details"
          onClick={handler}
          onKeyUp={handler}
          tabIndex={0}
          role="button"
        >
          billykbett@gmail.com
        </Col>
        <Col
          lg={8}
          xs={22}
          sm={22}
          id="detail3"
          onClick={handleDownload}
          onKeyUp={handleDownload}
          tabIndex={0}
          role="button"
          className="about-page__container__content__aboutMe__about-grid-display__personal-details__details"
        >
          Resume
        </Col>
      </Row>
    );
  };

  const myBio = () => {
    return (
      <Paragraph>
        Hi, I am a driven and conscientious software developer currently based
        in Nairobi, Kenya. My developer journey began in 2020 having learnt from
        great online resources such as freeCodeCamp among others, that have
        given me a solid foundational understanding of web development which I
        have since utilized to build applications and websites for local
        buisnesses. I desire to build applications that are socially impactful
        and grow into a senior full-stack developer role able to own my projects
        from start to finish. It would be a great opportunity to work on a
        variety of projects delivering excellent services on your behalf.
        <span>Reach out to me.</span>
      </Paragraph>
    );
  };

  const myTechStack = () => {
    return (
      <Row justify="center" align="middle">
        <Col lg={18}>
          <List
            grid={{
              gutter: 16,
              xl: 4,
              lg: 4,
              xs: 2,
              sm: 2,
            }}
            dataSource={languages}
            itemLayout="horizontal"
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta avatar={LanguageIcons[item]} title={item} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  };

  const renderAvatarAndBio = () => {
    return (
      <Col lg={24} xs={22} sm={22}>
        <Row gutter={[0, 32]} justify="center" align="middle">
          <Col lg={20} style={{ marginTop: isMobileOrTablet && '1rem' }}>
            {myAvatar()}
          </Col>
          <Col lg={20} sm={23} xs={23}>
            {myBio()}
          </Col>
        </Row>
      </Col>
    );
  };

  const renderTechStack = () => {
    // if (isMobileOrTablet) return null;
    return (
      <Col lg={24} xs={23} sm={23}>
        {myTechStack()}
      </Col>
    );
  };

  const renderPersonalDetails = () => {
    return (
      <Col lg={18} xs={23} sm={23}>
        {personalDets()}
      </Col>
    );
  };

  return (
    <Col
      className="about-page__container__content__aboutMe"
      onMouseOver={() => setDisplayState(about)}
      onMouseLeave={leave}
      onFocus={() => setDisplayState(about)}
      onBlur={leave}
    >
      <Row
        justify="center"
        align="middle"
        className="about-page__container__content__aboutMe__header"
        style={{ display: hoverOnAbout ? 'none' : 'flex' }}
      >
        {renderTitle()}
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{
          display: hoverOnAbout ? 'flex' : 'none',
          height: '100%',
          overflowY: isMobileOrTablet && 'scroll',
        }}
        gutter={isMobileOrTablet && [0, 16]}
        className="about-page__container__content__aboutMe__about-grid-display"
      >
        {renderAvatarAndBio()}
        {renderTechStack()}
        {renderPersonalDetails()}
      </Row>
    </Col>
  );
};

export default AboutMe;
