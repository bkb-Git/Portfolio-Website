import { GithubFilled } from '@ant-design/icons';
import { Col, Image, Row, Typography } from 'antd';

import { ReactComponent as CircleArrowUp } from 'assets/svg/circle-arrow-up-solid.svg';
import CarouselMod from 'components/CarouselMod';

import './ProjectCard.scss';

const { Title } = Typography;

const responsiveWidths = {
  lg: 22,
  xl: 22,
  xxl: 20,
};

const ProjectCard = (props) => {
  const { data = null, right } = props;
  const {
    name = 'TITLE',
    description = 'This is an example for where a description will be placed',
    backgroundImg,
  } = data;

  const projectHeader = () => {
    return (
      <Row justify="space-between" align="middle" className="projectHeader">
        <Col span={18}>
          <Title level={3} className="projectHeader__title">
            {name}
          </Title>
        </Col>
        <Col span={6} className="projectHeader__button">
          <GithubFilled className="projectHeader__button__gitIcon" />
          <CircleArrowUp className="projectHeader__button__linkIcon" />
        </Col>
      </Row>
    );
  };

  const projectImages = () => {
    return (
      <Row
        justify="space-between"
        align="middle"
        className="projectImages"
        gutter={[0, 25]}
      >
        <Col span={24}>
          <CarouselMod arrows dots={false} infinite slidesToShow={1}>
            <Col className="projectImages__mainImage">
              <Image src={backgroundImg} />
            </Col>
          </CarouselMod>
        </Col>
        <Col span={24}>
          <CarouselMod
            arrows
            dots={false}
            infinite
            slidesToShow={3}
            autoplay
            otherClassNames="projectImages__secondSlider"
          >
            <Col className="projectImages__card">
              <Col className="projectImages__card__image">
                <Image preview={false} src={backgroundImg} />
              </Col>
            </Col>
            <Col className="projectImages__card">
              <Col className="projectImages__card__image">
                <Image preview={false} src={backgroundImg} />
              </Col>
            </Col>
            <Col className="projectImages__card">
              <Col className="projectImages__card__image">
                <Image preview={false} src={backgroundImg} />
              </Col>
            </Col>
            <Col className="projectImages__card">
              <Col className="projectImages__card__image">
                <Image preview={false} src={backgroundImg} />
              </Col>
            </Col>
            <Col className="projectImages__card">
              <Col className="projectImages__card__image">
                <Image preview={false} src={backgroundImg} />
              </Col>
            </Col>
          </CarouselMod>
        </Col>
      </Row>
    );
  };

  const renderProjectMain = () => {
    return (
      <Row
        justify="start"
        align="middle"
        gutter={[0, 32]}
        className="project__main"
      >
        <Col span={24}>{projectHeader()}</Col>
        <Col span={24}>{projectImages()}</Col>
      </Row>
    );
  };

  return (
    <Col {...responsiveWidths} className="project">
      <Row justify="space-between" align="middle">
        {right ? (
          <>
            <Col span={8}>{description}</Col>
            <Col span={12}>{renderProjectMain()}</Col>
          </>
        ) : (
          <>
            <Col span={12}>{renderProjectMain()}</Col>
            <Col span={8}>{description}</Col>
          </>
        )}
      </Row>
    </Col>
  );
};

export default ProjectCard;
