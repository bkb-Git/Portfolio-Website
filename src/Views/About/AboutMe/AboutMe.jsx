// eslint-disable-next-line no-unused-vars
import { saveAs } from 'file-saver';
import resume from '../../../assets/Resume.pdf';
import './AboutMe.scss';

const AboutMe = (props) => {
  const { displaystate, handler, display } = props;
  const toggleDisplay = displaystate === 'about' ? 'none' : 'block';
  const { setDisplayState, about, leave } = display;

  const renderHeader = () => {
    return (
      <h1 className="header" style={{ display: toggleDisplay }}>
        About <span>Me</span>
      </h1>
    );
  };

  const handleDownload = () => {
    saveAs(resume, 'resume.pdf');
  };

  const renderPersonalDetails = () => {
    return (
      <div className="personal-details">
        <div className="details detail1">Nairobi,Kenya</div>
        <div
          className="details detail2"
          onClick={handler}
          onKeyUp={handler}
          tabIndex={0}
          role="button"
        >
          billykbett@gmail.com
        </div>

        <div
          onClick={handleDownload}
          onKeyUp={handleDownload}
          tabIndex={0}
          role="button"
          className="details detail3"
        >
          Resume
        </div>
      </div>
    );
  };

  const renderAboutMeDetatils = () => {
    return (
      <>
        <div className="profile-pic" />
        <p>
          {' '}
          <span id="bio-text1">
            Hi, I am a self-taught junior software developer currently based in
            Nairobi. My journey has taken about a year and has been so far a
            great career path for me.
            <br />
          </span>
          <span id="bio-text3">
            I have a good handle on some Front and Back-end Development using
            frameworks and tools such as React , Redux , Express and MongoDB.
            <br />
          </span>
          <span id="bio-text4">
            It would be a great opportunity to work on a variety of projects
            delivering excellent services on your behalf.
            <br />
          </span>
          <span id="bio-text5">Reach out to me.</span>
        </p>
      </>
    );
  };

  return (
    <div
      className="about-page__content__aboutMe"
      onMouseOver={() => setDisplayState(about)}
      onMouseLeave={leave}
      onFocus={() => setDisplayState(about)}
      onBlur={leave}
    >
      <div className="container">
        {renderHeader()}
        <div className="about-grid-display">
          {renderAboutMeDetatils()}
          {renderPersonalDetails()}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
