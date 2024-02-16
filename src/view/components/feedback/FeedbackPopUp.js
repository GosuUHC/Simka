import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useFeedback from "../../../viewmodel/hooks/feedback/useFeedback";

const FeedbackPopUp = ({ show, handleClose }) => {
  const {
    wantToGetAnswerBack,
    feedbackReasons,
    handleReasonChange,
    handleMessageChange,
    handleWantToGetAnswerBackChange,
    handleEmailChange,
    handleAddingFeedback,
  } = useFeedback();

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
          <Form.Control
            className="border-2"
            as="textarea"
            rows={4}
            onChange={(e) => handleMessageChange(e.target.value)}
          />
          <Form.Check
            className="py-2"
            onClick={handleWantToGetAnswerBackChange}
            type="checkbox"
            defaultChecked={wantToGetAnswerBack}
            label={<span className="text-muted">Хочу получить ответ</span>}
          />
          <Form.Control
            className="py-2 border-2"
            onChange={(e) => handleEmailChange(e.target.value)}
            disabled={!wantToGetAnswerBack}
            type="email"
            placeholder="Email"
          />
          <Row className="py-3 text-center">
            <Col>
              <Button onClick={handleAddingFeedback} variant="secondary">
                Отправить
              </Button>
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
