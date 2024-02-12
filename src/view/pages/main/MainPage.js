import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import AddressWithText from "../../components/address/AddressWithText";
import AdvantagesList from "../../components/advantages/AdvantagesList";

const MainPage = () => {
  return (
    <div className="mainWrapper">
      <Container>
        <Row className="py-5">
          <AddressWithText />
        </Row>
        <AdvantagesList />
      </Container>
    </div>
  );
};

export default MainPage;
