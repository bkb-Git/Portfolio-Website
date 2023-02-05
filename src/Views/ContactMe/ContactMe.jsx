import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

import './ContactMe.scss';

const { Title } = Typography;
const { TextArea } = Input;

const ContactMe = () => {
  // Handle form finish

  const handleFormFinish = (values) => {
    console.log(values);
  };

  // Render functions for this component's views
  const renderTitle = () => {
    return (
      <Col span={24} className="contactMe__header">
        <Row justify="center" align="middle" gutter={[32, 0]}>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" color="#1c3879" />
          </Col>
          <Col>
            <Title className="contactMe__header__title">Contact Me</Title>
          </Col>
        </Row>
      </Col>
    );
  };

  const renderForm = () => {
    return (
      <Form
        name="contact"
        className="contactMe__form"
        onFinish={handleFormFinish}
      >
        <Form.Item name="name" className="contactMe__form__item">
          <Input placeholder="Name" className="contactMe__form__item__input" />
        </Form.Item>
        <Form.Item name="subject" className="contactMe__form__item">
          <Input
            placeholder="Subject"
            className="contactMe__form__item__input"
          />
        </Form.Item>
        <Form.Item name="comment" className="contactMe__form__item">
          <TextArea
            placeholder="Message ..."
            className="contactMe__form__item__input"
            rows={6}
          />
        </Form.Item>
        <Form.Item name="comment" className="contactMe__form__item">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            block
            className="contactMe__form__item__button"
            icon={
              <FontAwesomeIcon
                icon={faPaperPlane}
                color="#ccac00"
                style={{
                  marginRight: '1.5rem',
                  height: '28px',
                  width: '28px',
                }}
              />
            }
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Col span={14}>
      <Row justify="center" align="middle" className="contactMe">
        {renderTitle()}
        {renderForm()}
      </Row>
    </Col>
  );
};

export default ContactMe;
