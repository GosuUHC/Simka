import { Col, Image } from "react-bootstrap";

const ProviderName = ({ imgSrc, name, inline = false }) => {
  return (
    <Col>
      <Image src={imgSrc}></Image>
      <div className={`${inline ? "d-inline h4" : "h5"}`}> {name}</div>
    </Col>
  );
};

export default ProviderName;
