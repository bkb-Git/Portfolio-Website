/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Typography, Form, Input, Button } from 'antd';

import './ContactMe.scss';

const { Title } = Typography;
const { TextArea } = Input;

const ContactMe = () => {
  // Render functions for this component's views
  const renderTitle = () => {
    return (
      <Col span={24} className="contactMe__header">
        <Col>
          <Title className="contactMe__header__title">Contact Me</Title>
        </Col>
      </Col>
    );
  };

  const renderForm = () => {
    return (
      <Form name="contact" className="contactMe__form">
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
    <Col xs={20} sm={20} xl={14} xxl={14}>
      <a name="contact" id="#contact" />
      <Row justify="center" align="middle" className="contactMe">
        {renderTitle()}
        {renderForm()}
      </Row>
    </Col>
  );
};

export default ContactMe;
