import { Col, Row, Image, Typography } from 'antd';

import { GithubFilled } from '@ant-design/icons';
import { ReactComponent as CircleArrowUp } from 'assets/svg/circle-arrow-up-solid.svg';

import CarouselMod from 'components/CarouselMod';

import './ProjectCardLeftPt.scss';

const { Title } = Typography;

const ProjectCardLeftPt = (props) => {
  const { name, image } = props;
  // Project Header
  const projectHeader = () => {
    return (
      <Row
        justify="space-between"
        align="middle"
        className="projectCardLeft__header"
      >
        <Col span={18}>
          <Title level={3} className="projectCardLeft__header__title">
            {name}
          </Title>
        </Col>
        <Col span={6} className="projectCardLeft__header__button">
          <GithubFilled className="projectCardLeft__header__button__gitIcon" />
          <CircleArrowUp className="projectCardLeft__header__button__linkIcon" />
        </Col>
      </Row>
    );
  };

  // Project Images
  const projectImages = () => {
    return (
      <Row
        justify="space-between"
        align="middle"
        className="projectCardLeft__sliders"
        gutter={[0, 25]}
      >
        <Col span={24}>
          <CarouselMod arrows dots={false} infinite slidesToShow={1}>
            <Col className="projectCardLeft__sliders__mainImage">
              <Image src={image} />
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
            otherClassNames="projectCardLeft__sliders__secondSlider"
          >
            <Col className="projectCardLeft__sliders__card">
              <Col className="projectCardLeft__sliders__card__image">
                <Image preview={false} src={image} />
              </Col>
            </Col>
            <Col className="projectCardLeft__sliders__card">
              <Col className="projectCardLeft__sliders__card__image">
                <Image preview={false} src={image} />
              </Col>
            </Col>
            <Col className="projectCardLeft__sliders__card">
              <Col className="projectCardLeft__sliders__card__image">
                <Image preview={false} src={image} />
              </Col>
            </Col>
            <Col className="projectCardLeft__sliders__card">
              <Col className="projectCardLeft__sliders__card__image">
                <Image preview={false} src={image} />
              </Col>
            </Col>
            <Col className="projectCardLeft__sliders__card">
              <Col className="projectCardLeft__sliders__card__image">
                <Image preview={false} src={image} />
              </Col>
            </Col>
          </CarouselMod>
        </Col>
      </Row>
    );
  };

  return (
    <Row
      justify="start"
      align="middle"
      gutter={[0, 24]}
      className="projectCardLeft"
    >
      <Col span={24}>{projectHeader()}</Col>
      <Col span={24}>{projectImages()}</Col>
    </Row>
  );
};

export default ProjectCardLeftPt;
