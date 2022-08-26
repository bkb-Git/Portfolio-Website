import { useState } from 'react';
import { Button, Card, Col, Image, List, Row, Typography } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';

import LanguageIcons from '../../../lib/constants/languageIcons';

import './ProjectCard.scss';

const { Paragraph, Title } = Typography;

const live = 'live';
const code = 'code';

const ProjectCard = (props) => {
  const { data = null } = props;
  const {
    name = 'TITLE',
    description = 'This is an example for where a description will be placed',
    languages = ['Item One', 'Item Two', 'Item Three', 'Item Four'],
    gitLink,
    liveLink,
    backgroundImg,
    no,
  } = data;

  const [activeTab, setActiveTab] = useState('cover');

  const onTabChange = (key) => setActiveTab(key);

  const tabList = [
    {
      key: 'cover',
      tab: 'cover',
    },
    {
      key: 'details',
      tab: 'details',
    },
  ];

  const handleRoute = (e) => {
    e.preventDefault();
    const liveId = `${no}-${live}`;

    if (e.currentTarget.id === liveId) {
      if (liveLink) {
        return window.open(liveLink, '_blank');
      }
      return null;
    }

    if (gitLink) {
      return window.open(gitLink, '_blank');
    }
    return null;
  };

  const renderCardFrontTop = () => {
    return (
      <Row
        justify="space-around"
        align="top"
        className="card__inner__top__front__actionsButtons"
      >
        <Button
          icon={
            <FontAwesomeIcon icon={faDesktop} style={{ marginRight: '10px' }} />
          }
          size="large"
          onClick={(e) => handleRoute(e)}
          ghost
          id={`${no}-${live}`}
        >
          Live
        </Button>
        <Button
          icon={
            <FontAwesomeIcon icon={faCode} style={{ marginRight: '10px' }} />
          }
          size="large"
          onClick={(e) => handleRoute(e)}
          ghost
          id={`${no}-${code}`}
        >
          Code
        </Button>
      </Row>
    );
  };

  const renderCardFrontBottom = () => {
    return (
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col lg={22}>
          <Row justify="center" align="top">
            <Col span={24}>
              <Title level={1} className="card__inner__bottom__front__title">
                {name}
              </Title>
            </Col>
            <Col span={24}>
              <Paragraph className="card__inner__bottom__front__description">
                {description}
              </Paragraph>
            </Col>
          </Row>
        </Col>
        <Col span={22}>
          <List
            grid={{
              gutter: 16,
              column: 3,
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

  const renderEmptyButton = () => {
    if (data) {
      return null;
    }
    return (
      <Col span={24} style={{ height: '100%' }}>
        <div className="card__inner__button">
          <span>Empty</span>
        </div>
      </Col>
    );
  };

  const renderBgColor = () => {
    if (!data) {
      return '#413b3b';
    }
    return '#fff';
  };

  const CoverCard = () => {
    return (
      <>
        <Col className="card__inner__image">
          <Image
            src={backgroundImg}
            height="100%"
            style={{ objectFit: 'cover' }}
            preview={false}
          />
        </Col>
        <Col span={24} className="card__inner__top__front">
          <Row justify="center" align="middle" style={{ height: '100%' }}>
            <Row justify="center" align="top" style={{ height: '75%' }}>
              <Col span={20}>
                <Row justify="center" align="middle">
                  <Title
                    level={1}
                    style={{ color: 'white', textAlign: 'center' }}
                    className="card__inner__top__front__title"
                  >
                    {name}
                  </Title>
                </Row>
              </Col>
              <Col span={22}>{renderCardFrontTop()}</Col>
            </Row>
          </Row>
        </Col>
        {renderEmptyButton()}
      </>
    );
  };

  const DetailsCard = () => {
    return (
      <Col lg={24} className="card__inner__bottom__front">
        {renderCardFrontBottom()}
      </Col>
    );
  };

  const contentList = {
    cover: <CoverCard />,
    details: <DetailsCard />,
  };

  return (
    <Card
      className="card"
      style={{
        backgroundColor: renderBgColor(),
      }}
      bodyStyle={{ height: 'calc(100% - 48px)', padding: 0 }}
      headStyle={{
        background: '#413b3b',
      }}
      hoverable
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={(key) => onTabChange(key)}
      bordered
      key={no}
      id={no}
    >
      <Row
        style={{ position: 'relative', height: '100%' }}
        className="card__inner"
        justify="space-between"
        align="middle"
      >
        {contentList[activeTab]}
      </Row>
    </Card>
  );
};

export default ProjectCard;
