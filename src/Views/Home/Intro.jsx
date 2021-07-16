/* eslint-disable react/no-unescaped-entities */
export default function Intro(props) {
  const { clickHandler } = props;
  return (
    <p className="intro-text">
      <p className="text1">
        <span id="sub-text1">Hi, I'm</span>{' '}
        <span id="sub-text2">
          Billy<span id="single-letter">K.</span>
          <span id="last-name">Bett</span>
        </span>
      </p>
      <p className="text2">
        <span id="sub-text1">I am a</span>{' '}
        <span id="sub-text2">Software Developer.</span>
      </p>
      <p className="text3">
        <span id="sub-text1">Check out my</span>{' '}
        <span id="sub-text2">Projects</span>
      </p>
      <p className="text4">
        <span id="sub-text1"> If you like what you see </span>
      </p>
      <p className="text5">
        <span id="sub-text1">Please</span>
        <div
          className="contact-button"
          route="/about"
          onClick={clickHandler}
          onKeyUp={clickHandler}
          role="link"
          tabIndex={0}
        >
          {' '}
          Contact me
        </div>
      </p>
    </p>
  );
}
