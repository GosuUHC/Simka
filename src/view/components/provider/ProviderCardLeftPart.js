import ProviderName from "./ProviderName";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

const ProviderCardLeftPart = ({ imgSrc, name, component }) => {
  return (
    <Col xs="auto">
      <ProviderName imgSrc={imgSrc} name={name}></ProviderName>
      <Button variant="link" bsPrefix="info" as="a">
        Подробнее о провайдере
      </Button>
      {component}
    </Col>
  );
};

export default ProviderCardLeftPart;
