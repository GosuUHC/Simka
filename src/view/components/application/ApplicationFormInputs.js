import { Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ApplicationFormInputs = () => {
  return (
    <Stack direction="horizontal" gap={2}>
      <Form.Control placeholder="Введите ваше имя" />
      <Form.Control type="phone" placeholder="Введите ваш телефон" />
      <Button variant="secondary">Подобрать тариф</Button>
    </Stack>
  );
};

export default ApplicationFormInputs;
