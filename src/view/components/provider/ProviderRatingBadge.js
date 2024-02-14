import Badge from "react-bootstrap/Badge";
import { Col, Row } from "react-bootstrap";
import "./ProviderRatingBadge.css";

const ProviderRatingBadge = ({ rating, isRecommended }) => {
  return (
    <Row>
      <Col xs="auto">
        <Badge bg="" className="ratingBadge">
          {rating}
        </Badge>
        {isRecommended && (
          <Badge bg="" className="recommendedBadge" pill>
            Рекомендуем
          </Badge>
        )}
      </Col>
    </Row>
  );
};

export default ProviderRatingBadge;
