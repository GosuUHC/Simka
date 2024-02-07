import Address from "./Address";
import Button from "react-bootstrap/Button";

const AddressWithText = () => {
  return (
    <>
      <h4>
        Поиск провайдеров домашнего интернета по адресу
      </h4>
      <p>
        Введите адрес и получите список доступных провайдеров и лучших тарифов
      </p>
      <Address />
      <p>
        Нажимая на кнопку «Найти провайдеров», я соглашаюсь с{" "}
        <Button as="a" bsPrefix="info">
          условиями обработки персональных данных
        </Button>
      </p>
    </>
  );
};

export default AddressWithText;
