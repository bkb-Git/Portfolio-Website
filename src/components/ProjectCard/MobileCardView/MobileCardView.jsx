import { Card, Col, Row, Tabs, Typography } from 'antd';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Icons imported here
import { GithubFilled } from '@ant-design/icons';
import { ReactComponent as CircleArrowUp } from 'assets/svg/circle-arrow-up-solid.svg';

// Components imported here
import ProjectCardLeftPt from '../ProjectCardLeftPt';
import ProjectCardRightPt from '../ProjectCardRightPt';

import './MobileCardView.scss';

const { Title } = Typography;

const MobileCardView = (props) => {
  const {
    data: { name, description, screenshots, languages, gitLink, liveLink },
  } = props;
  const [activeTab, setActiveTab] = useState('Images');

  // Handlers defined here
  // Redirect click handler
  const handleClick = (e) => {
    const {
      currentTarget: { id },
    } = e;

    return id === 'gitHub' ? window.open(gitLink) : window.open(liveLink);
  };

  // Render functions for this component's views
  const renderView = () => {
    return (
      <Card bordered={false} bodyStyle={{ padding: 0 }}>
        <Tabs
          size="large"
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
        >
          <Tabs.TabPane
            tab={
              <span>
                <FontAwesomeIcon
                  icon={faImages}
                  style={{ marginRight: '0.5rem' }}
                />
                Images
              </span>
            }
            key="Images"
          >
            <ProjectCardLeftPt
              name={name}
              screenshots={screenshots}
              links={{ gitLink, liveLink }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ marginRight: '0.5rem' }}
                />
                Info
              </span>
            }
            key="Info"
          >
            <ProjectCardRightPt description={description} stack={languages} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    );
  };

  const renderHeader = () => {
    return (
      <Row
        justify="space-between"
        align="middle"
        className="projectMobileView__header"
      >
        <Col span={18}>
          <Title level={3} className="projectMobileView__header__title">
            {name}
          </Title>
        </Col>
        <Col span={6} className="projectMobileView__header__button">
          <GithubFilled
            id="gitHub"
            className="projectMobileView__header__button__gitIcon"
            onClick={handleClick}
          />
          <CircleArrowUp
            id="liveSite"
            className="projectMobileView__header__button__linkIcon"
            onClick={handleClick}
          />
        </Col>
      </Row>
    );
  };

  return (
    <Col span={24} className="projectMobileView">
      <Row justify="center" align="middle">
        <Col span={24}>{renderHeader()}</Col>
        <Col span={24}>{renderView()}</Col>
      </Row>
    </Col>
  );
};

export default MobileCardView;
