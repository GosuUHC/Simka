import { Col, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ApplicationFormInputs = () => {
  return (
    <Stack className="py-2" direction="horizontal" gap={2}>
      <Col xs="auto">
        <Form.Control placeholder="Введите ваше имя" />
      </Col>
      <Col xs="auto">
        <Form.Control type="phone" placeholder="Введите ваш телефон" />
      </Col>

      <Button variant="secondary">Подобрать тариф</Button>
    </Stack>
  );
};

export default ApplicationFormInputs;
