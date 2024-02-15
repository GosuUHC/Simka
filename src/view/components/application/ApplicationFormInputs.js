import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ApplicationFormInputs = () => {
  return (
    <Row className="py-2" direction="horizontal" gap={2}>
      <Col xs="auto" sm={6} md={8} xl={4}>
        <Form.Control placeholder="Введите ваше имя" />
      </Col>
      <Col xs="auto" sm={6} md={8} xl={4}>
        <Form.Control type="phone" placeholder="Введите ваш телефон" />
      </Col>
      <Col xs="auto" sm={6} xl={4}>
        <Button variant="secondary">Подобрать тариф</Button>
      </Col>
    </Row>
  );
};

export default ApplicationFormInputs;
