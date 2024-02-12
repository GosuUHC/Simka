import Advantage from "../advantages/Advantage";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const CompilationCard = ({ imgSrc, title }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col className="me-auto">
            <Advantage imgSrc={imgSrc} title={title} />
          </Col>
          <Col className="ms-auto" xs="auto">
            <ArrowRight />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CompilationCard;
