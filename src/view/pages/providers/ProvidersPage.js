import Address from "../../components/address/Address";
import Container from "react-bootstrap/Container";
import { MDBTypography } from "mdb-react-ui-kit";

const ProvidersPage = () => {
  return (
    <Container>
      <MDBTypography variant="h4">
        Поиск провайдеров домашнего интернета по адресу
      </MDBTypography>
      <MDBTypography>
        Введите адрес и получите список доступных провайдеров и лучших тарифов
      </MDBTypography>
      <Address />
      <MDBTypography>
        Нажимая на кнопку «Найти провайдеров», я соглашаюсь с{" "}
        <MDBTypography tag="a" href="#" color="secondary">
          условиями обработки персональных данных
        </MDBTypography>
      </MDBTypography>
    </Container>
  );
};

export default ProvidersPage;
