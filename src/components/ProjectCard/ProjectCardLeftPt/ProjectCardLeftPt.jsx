import { Col, Row, Image, Typography } from 'antd';
import { useState } from 'react';

import { GithubFilled } from '@ant-design/icons';
import { ReactComponent as CircleArrowUp } from 'assets/svg/circle-arrow-up-solid.svg';

import CarouselMod from 'components/CarouselMod';

import './ProjectCardLeftPt.scss';

const { Title } = Typography;

const ProjectCardLeftPt = (props) => {
  const { name, screenshots, links } = props;
  const { gitLink, liveLink } = links;

  // Slider navigation state
  const [sliderNav, setSliderNav] = useState({
    primary: null,
    secondary: null,
  });

  // Redirect click handler
  const handleClick = (e) => {
    const {
      currentTarget: { id },
    } = e;

    return id === 'gitHub' ? window.open(gitLink) : window.open(liveLink);
  };

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
          <GithubFilled
            id="gitHub"
            className="projectCardLeft__header__button__gitIcon"
            onClick={handleClick}
          />
          <CircleArrowUp
            id="liveSite"
            className="projectCardLeft__header__button__linkIcon"
            onClick={handleClick}
          />
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
          <CarouselMod
            dots={false}
            infinite
            slidesToShow={1}
            setRefSlide={setSliderNav}
            slideState={sliderNav}
            primary
            navFor={sliderNav.secondary}
          >
            {screenshots.map((img) => (
              <Col
                key={`${Math.random()}-${Date.now()}`}
                className="projectCardLeft__sliders__mainImage"
              >
                <Image src={img} />
              </Col>
            ))}
          </CarouselMod>
        </Col>
        <Col span={24}>
          <CarouselMod
            arrows
            dots={false}
            infinite
            slidesToShow={3}
            setRefSlide={setSliderNav}
            navFor={sliderNav.primary}
            autoplay
            focusOnSelect
            otherClassNames="projectCardLeft__sliders__secondSlider"
          >
            {screenshots.map((img) => (
              <Col
                key={`${Math.random()}-${Date.now()}`}
                className="projectCardLeft__sliders__card"
              >
                <Col className="projectCardLeft__sliders__card__image">
                  <Image preview={false} src={img} />
                </Col>
              </Col>
            ))}
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
