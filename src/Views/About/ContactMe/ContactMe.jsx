import { Col, Row, Form, Button, Input, Typography, Grid } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './ContactMe.scss';

const { TextArea } = Input;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const ContactMe = (props) => {
  const { display } = props;
  const { displayState, setDisplayState, contact, leave } = display;

  const { xs, sm, lg } = useBreakpoint();
  const isMobileOrTablet = (xs || sm) && !lg;

  const hoverOnContact = displayState === contact;

  const title = () => {
    return (
      <h2 className="about-page__container__content__contactMe__header__title">
        Contact <span>Me</span>
      </h2>
    );
  };

  const thankYouMessage = () => {
    return (
      <Row
        gutter={[0, 16]}
        justify="center"
        align="middle"
        style={{ height: '100%' }}
      >
        <Col lg={24} style={{ height: '50%' }}>
          <Row justify="center" align="middle" style={{ height: '100%' }}>
            <h3 className="about-page__container__content__contactMe__thankYou">
              Thank you
            </h3>
          </Row>
        </Col>
        <Col lg={24} style={{ height: '50%' }}>
          <Row justify="center" align="middle" style={{ height: '100%' }}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-10x" />
          </Row>
        </Col>
      </Row>
    );
  };

  const contactForm = () => {
    return (
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Form
          name="contact"
          method="POST"
          className="about-page__container__content__contactMe__form"
          id="contact-me-form"
          autoComplete="off"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Item>
            <Title className="about-page__container__content__contactMe__form__title">
              Contact Me
            </Title>
          </Form.Item>
          <Form.Item
            name="name"
            id="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
            required
            requiredMark
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="subject" id="subject" required requiredMark>
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="email"
            id="name"
            rules={[{ required: true, message: 'Please input your email!' }]}
            required
            requiredMark
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="comment"
            id="comment"
            required
            requiredMark
            rules={[{ required: true, message: 'Please input your comment!' }]}
          >
            <TextArea showCount size="large" placeholder="Comment here..." />
          </Form.Item>
          <Form.Item>
            <Button
              block
              htmlType="submit"
              type="primary"
              form="contact-me-form"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>
    );
  };

  const renderHeader = () => {
    return (
      <Row
        justify="center"
        align="middle"
        className="about-page__container__content__contactMe__header"
        style={{ display: hoverOnContact ? 'none' : 'flex' }}
      >
        {title()}
      </Row>
    );
  };

  const renderContact = () => {
    return (
      <Row
        justify="center"
        align="middle"
        gutter={[0, 16]}
        style={{ display: hoverOnContact ? 'flex' : 'none', height: '100%' }}
      >
        <Col
          lg={12}
          style={{ height: '100%', display: isMobileOrTablet && 'none' }}
        >
          {thankYouMessage()}
        </Col>
        <Col lg={12} xs={23} sm={23} style={{ height: '100%' }}>
          {contactForm()}
        </Col>
      </Row>
    );
  };

  return (
    <Col
      className="about-page__container__content__contactMe"
      onMouseOver={() => setDisplayState(contact)}
      onMouseLeave={leave}
      onFocus={() => setDisplayState(contact)}
      onBlur={leave}
    >
      {renderHeader()}
      {renderContact()}
    </Col>
  );
};

export default ContactMe;
