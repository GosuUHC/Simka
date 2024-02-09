import { Col, Row, Stack } from "react-bootstrap";
import ButtonWithBadge from "./ButtonWithBadge";
import "./ProviderCard.css";

const ProviderCardMiddlePart = ({
  minPrice,
  maxSpeed,
  maxSpeedUnits,
  plansCount,
  reviewsCount,
  promotionsCount,
}) => {
  return (
    <Col className="d-flex flex-column align-self-stretch">
      <Row className="mb-auto">
        <Stack direction="horizontal" gap={2}>
          <span>
            от <div className="numberTag">{minPrice}</div> руб./мес.
          </span>
          <span>
            до <div className="numberTag">{maxSpeed}</div> {maxSpeedUnits}
          </span>
        </Stack>
      </Row>
      <Row>
        <Stack direction="horizontal" gap={3}>
          <ButtonWithBadge name={"Тарифы"} count={plansCount} />
          <ButtonWithBadge name={"Акции"} count={reviewsCount} />
          <ButtonWithBadge name={"Отзывы"} count={promotionsCount} />
        </Stack>
      </Row>
    </Col>
  );
};

export default ProviderCardMiddlePart;
