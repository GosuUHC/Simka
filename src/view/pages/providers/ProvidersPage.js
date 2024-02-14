import Container from "react-bootstrap/Container";
import AddressWithText from "../../components/address/AddressWithText";
import { Row } from "react-bootstrap";
import ProvidersSorting from "../../components/provider/ProvidersSorting";
import CallBackInfoCard from "../../components/common/callBackInfoCard/CallBackInfoCard";
import ProvidersHorizontalList from "../../components/provider/providerCardHorizontal/ProvidersHorizontalList";
import { memo } from "react";

const ProvidersPage = () => {
  return (
    <div className="mainWrapper">
      <Container>
        <Row className="py-5">
          <AddressWithText />
        </Row>
        <ProvidersSorting />
        <ProvidersHorizontalList />
      </Container>
      <div className="py-5 callBackInfoWrapper">
        <Container>
          <CallBackInfoCard />
        </Container>
      </div>
    </div>
  );
};
export default memo(ProvidersPage);
