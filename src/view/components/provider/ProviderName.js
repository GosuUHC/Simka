import { Col, Image } from "react-bootstrap";

const ProviderName = ({ imgSrc, name }) => {
  return (
    <Col>
      <Image src={imgSrc}></Image>
      <h5>{name}</h5>
    </Col>
  );
};

export default ProviderName;
