import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

export default function ContactMe(props) {
  const { display } = props;
  const toggleDisplay = display === 'contact' ? 'none' : 'block';

  return (
    <div>
      <h2 className="header" style={{ display: toggleDisplay }}>
        Contact <span>Me</span>
      </h2>
      <h3 className="contact_me_header">Thank you</h3>
      <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-10x" />
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
