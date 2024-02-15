import Advantage from "../advantages/Advantage";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const CompilationCard = ({ imgSrc, title }) => {
  const upperTitle = title[0].toUpperCase() + title.slice(1);

  return (
    <Card className="border-2" body>
      <Row>
        <Col>
          <Advantage
            imgSrc={imgSrc}
            title={upperTitle}
            desc={`Подборка "${upperTitle}"`}
          />
        </Col>
        <Col className="ms-auto" xs="auto">
          <ArrowRight />
        </Col>
      </Row>
    </Card>
  );
};

export default CompilationCard;
