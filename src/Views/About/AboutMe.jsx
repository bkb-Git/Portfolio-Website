/* eslint-disable no-octal-escape */
export default function AboutMe(props) {
  const { display, handler } = props;
  const toggleDisplay = display === 'about' ? 'none' : 'block';

  return (
    <div className="container">
      <h1 className="header" style={{ display: toggleDisplay }}>
        About <span>Me</span>
      </h1>
      <div className="about-grid-display">
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
          <div className="details detail3">Resume</div>
        </div>
      </div>
    </div>
  );
}
