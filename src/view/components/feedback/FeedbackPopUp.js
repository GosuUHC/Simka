import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useFeedback from "../../../viewmodel/hooks/feedback/useFeedback";
import React, { useState } from "react";

const FeedbackPopUp = ({ show, handleClose }) => {
  const {
    wantToGetAnswerBack,
    feedbackReasons,
    message,
    email,
    handleReasonChange,
    handleMessageChange,
    handleWantToGetAnswerBackChange,
    handleEmailChange,
    handleAddingFeedback,
  } = useFeedback();

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isCorrectEmail = emailRegex.test(email);

    if (!isCorrectEmail) {
      errors.email = "Пожалуйста введите корректный email";
    }

    if (!message) {
      errors.message = "Пожалуйста введите сообщение";
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const successfulRequest = await handleAddingFeedback();

      if (!successfulRequest) {
        errors.unsuccessfulRequest = "Ошибка отправки";
      } else {
        errors.successfulRequest = "Успешно отправлено";
      }

      setErrors(errors);
    } else {
      setErrors(errors);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Card>
        <Card.Body className="p-4">
          <Card.Title className="text-center pb-3" as="h4">
            Обратная связь
          </Card.Title>
          <Form>
            <Form.Label>Причина обращения?</Form.Label>
            {feedbackReasons.map((reason, i) => (
              <Form.Check
                key={i}
                defaultChecked={i === 0}
                name="group1"
                onClick={() => handleReasonChange(feedbackReasons[i])}
                type="radio"
                label={reason}
              ></Form.Check>
            ))}
          </Form>
          <Row>
            <span className="mt-3 h4">Сообщение</span>
            <span className="mt-2 mb-3 text-muted">
              Пожалуйста, изложите суть обращения. Укажите ссылки, если это
              необходимо
            </span>
          </Row>
          <Form.Group>
            <Form.Control
              className="border-2"
              as="textarea"
              rows={4}
              value={message}
              isInvalid={!!errors.message}
              onChange={(e) => handleMessageChange(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Check
            className="py-2"
            onClick={handleWantToGetAnswerBackChange}
            type="checkbox"
            defaultChecked={wantToGetAnswerBack}
            label={<span className="text-muted">Хочу получить ответ</span>}
          />
          <Form.Group>
            <Form.Control
              className="py-2 border-2"
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="Email"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Row className="py-3 text-center">
            <Col>
              <Form.Group>
                <Button onClick={handleSubmit} variant="secondary">
                  Отправить
                </Button>
                <Form.Control
                  className="d-none"
                  isInvalid={!!errors.unsuccessfulRequest}
                  isValid={!!errors.successfulRequest}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.unsuccessfulRequest}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  {errors.successfulRequest}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <span className="text-secondary">
            Нажимая на кнопку «Отправить», я соглашаюсь с{" "}
            <Button variant="link" as="a" bsPrefix="info">
              условиями обработки персональных данных
            </Button>
            ,{" "}
            <Button variant="link" as="a" bsPrefix="info">
              политики обработки персональных данных
            </Button>{" "}
            и даю согласие на{" "}
            <Button variant="link" as="a" bsPrefix="info">
              обработку персональных данных
            </Button>
          </span>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default FeedbackPopUp;
