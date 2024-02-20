import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Card, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useApplicationForm from "../../../../viewmodel/hooks/application/useApplicationForm";
import Button from "react-bootstrap/Button";
import { InfoCircle } from "react-bootstrap-icons";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import "./ApplicationPopUpForm.css";

const ApplicationPopUpForm = ({ show, handleClose }) => {
  const {
    name,
    phoneNumber,
    selectedTime,
    timeForCall,
    handleNameChange,
    handlePhoneNumberChange,
    handleSelectedTimeChange,
    handleAddingCallback,
  } = useApplicationForm();

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    const isPhonePossible = isPossiblePhoneNumber(phoneNumber);

    if (!name) {
      errors.name = "Пожалуйста, введите ваше имя";
    }
    if (!isPhonePossible) {
      errors.phone = "Пожалуйста, введите корректный телефон";
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const success = await handleAddingCallback();

      if (!success) {
        alert("FAILED");
      } else {
        alert("SUCCESS");
      }
      setErrors(errors);
    } else {
      setErrors(errors);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Card className="mainWrapper">
        <Card.Body className="p-4">
          <Card.Title className="text-center pb-3" as="h4">
            Оставьте заявку
          </Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Введите ваше имя</Form.Label>
              <Form.Control
                value={name ?? ""}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Имя"
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <PhoneInput
                className="form-control"
                defaultCountry="RU"
                international
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <Form.Control className="d-none" isInvalid={!!errors.phone} />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Удобное время для звонка</Form.Label>
              <Form.Select
                defaultValue={selectedTime}
                onChange={(e) => handleSelectedTimeChange(e.target.value)}
              >
                {timeForCall.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Row>
              <Button onClick={handleSubmit} variant="secondary">
                Оставить заявку
              </Button>
            </Row>
            <Row className="d-flex text-center py-2">
              <Button variant="link" as="a" bsPrefix="info">
                <InfoCircle /> Что будет после оформления заявки
              </Button>
            </Row>
            <span className="text-secondary">
              Нажимая на кнопку «Оставить заявку», я соглашаюсь с{" "}
              <Button variant="link" as="a" bsPrefix="info">
                условиями обработки персональных данных
              </Button>
            </span>
          </Form>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default ApplicationPopUpForm;
