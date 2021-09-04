import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './ContactMe.scss';

const ContactMe = (props) => {
  const { displaystate, display } = props;
  const toggleDisplay = displaystate === 'contact' ? 'none' : 'block';
  const { setDisplayState, contact, leave } = display;

  const renderForm = () => {
    return (
      <form netlify>
        <section>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="off"
            required
          />

          <input
            type="text"
            id="subject"
            name="text"
            placeholder="Subject"
            autoComplete="off"
            required
          />

          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            autoComplete="off"
            required
          />
        </section>
        <textarea
          id="comment"
          name="comment"
          placeholder="Comment..."
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  const renderThankYouMessage = () => {
    return (
      <>
        <h2 className="header" style={{ display: toggleDisplay }}>
          Contact <span>Me</span>
        </h2>
        <h3 className="contact_me_header">Thank you</h3>
        <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-10x" />
      </>
    );
  };

  return (
    <div
      className="about-page__content__contactMe"
      onMouseOver={() => setDisplayState(contact)}
      onMouseLeave={leave}
      onFocus={() => setDisplayState(contact)}
      onBlur={leave}
    >
      {renderThankYouMessage()}
      {renderForm()}
    </div>
  );
};

export default ContactMe;
