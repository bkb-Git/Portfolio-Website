import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'antd';
import { useCallback, useEffect, useRef } from 'react';

import './CarouselMod.scss';

const CarouselMod = (props) => {
  const {
    children,
    forwardRef,
    setRefSlide,
    slideState,
    navFor,
    dotsClassName,
    otherClassNames,
    primary,
    additionalStyling,
    ...args
  } = props;

  const carouselRef = useRef(null);

  const stateToChange = useCallback(
    (state) => {
      if (primary) return { primary: state, ...slideState };
      return { secondary: state, ...slideState };
    },
    [primary, slideState]
  );

  useEffect(() => {
    if (slideState?.primary && slideState?.secondary) return null;
    if (setRefSlide) return setRefSlide(stateToChange(carouselRef.current));
    return null;
  }, [setRefSlide, stateToChange, primary, slideState]);

  const prevArrow = () => (
    <FontAwesomeIcon
      icon={faArrowLeft}
      color="#ab966f"
      size="6x"
      id="prevArrow"
    />
  );

  const nextArrow = () => (
    <FontAwesomeIcon
      icon={faArrowRight}
      color="#ab966f"
      size="6x"
      id="nextArrow"
    />
  );

  return (
    <Carousel
      {...args}
      prevArrow={prevArrow()}
      nextArrow={nextArrow()}
      className={`carousel ${otherClassNames}`}
      dotsClassName={dotsClassName}
      ref={carouselRef}
      asNavFor={navFor}
      style={{ ...additionalStyling }}
    >
      {children}
    </Carousel>
  );
};

export default CarouselMod;
