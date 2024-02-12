import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import AddressWithText from "../../components/address/AddressWithText";
import AdvantagesList from "../../components/advantages/AdvantagesList";
import ApplicationForm from "../../components/application/ApplicationForm";
import Compilations from "../../components/compilations/Compilations";
import Instruction from "../../components/instruction/Instruction";
import FAQsCard from "../../components/faq/FAQsCard";
import CallBackInfoCard from "../../components/common/callBackInfoCard/CallBackInfoCard";

const MainPage = () => {
  return (
    <>
      <div className="mainWrapper">
        <Container>
          <Row className="py-5">
            <AddressWithText />
          </Row>
          <AdvantagesList />
        </Container>
      </div>
      <div className="py-5">
        <Container>
          <ApplicationForm />
          <Compilations />
          <Instruction />
          <FAQsCard />
          <CallBackInfoCard />
        </Container>
      </div>
    </>
  );
};

export default MainPage;
