import { Card, Col } from "react-bootstrap";

const FAQCard = ({ title, desc }) => {
  return (
    <Card className="border-2">
      <Card.Body>
        <Col xs="auto" className="pt-2">
          <h6>{title}</h6>
          <hr />
          <span className="text-muted text-wrap">{desc}</span>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default FAQCard;
