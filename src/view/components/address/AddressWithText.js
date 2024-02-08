import Address from "./Address";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";

const AddressWithText = () => {
  return (
    <>
      <h2>
        Поиск провайдеров <br /> домашнего интернета по адресу
      </h2>
      <p className="d-inline">
        Введите адрес и получите список доступных провайдеров и лучших тарифов
      </p>
      <Row className="pe-0 pb-3 pt-2">
        <Address />
      </Row>
      <p>
        Нажимая на кнопку «Найти провайдеров», я соглашаюсь с{" "}
        <Button variant="link" as="a" bsPrefix="info">
          условиями обработки персональных данных
        </Button>
      </p>
    </>
  );
};

export default AddressWithText;
