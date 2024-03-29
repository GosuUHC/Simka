import ProviderName from "../ProviderName";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

const ProviderCardHorizontalLeftPart = ({ imgSrc, name, component }) => {
  return (
    <Col xs="auto" className="d-flex flex-column align-self-stretch border-end">
      <ProviderName imgSrc={imgSrc} name={name} />
      <Button variant="link" bsPrefix="info" as="a">
        Подробнее о провайдере
      </Button>
      {component}
    </Col>
  );
};

export default ProviderCardHorizontalLeftPart;
