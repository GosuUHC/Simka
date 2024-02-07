import { Col, Image } from "react-bootstrap";
import { MDBTypography } from "mdb-react-ui-kit";

const ProviderName = ({ imgSrc, name }) => {
  return (
    <Col>
      <Image src={imgSrc}></Image>
      <MDBTypography variant="h5">{name}</MDBTypography>
    </Col>
  );
};

export default ProviderName;
