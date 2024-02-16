import Modal from "react-bootstrap/Modal";
import { Card, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import useApplicationForm from "../../../../viewmodel/hooks/application/useApplicationForm";
import Button from "react-bootstrap/Button";
import { InfoCircle } from "react-bootstrap-icons";

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
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Введите ваш телефон</Form.Label>
              <Form.Control
                type="tel"
                value={phoneNumber ?? ""}
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
                placeholder="+7 (___) ___-__-__"
              />
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
              <Button onClick={handleAddingCallback} variant="secondary">
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
