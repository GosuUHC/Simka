import { Col, Stack } from "react-bootstrap";
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
    <Col xs>
      <Stack gap={5}>
        <Stack direction="horizontal" gap={2}>
          <span>
            от <div className="numberTag">{minPrice}</div> руб./мес.
          </span>
          <span>
            до <div className="numberTag">{maxSpeed}</div> {maxSpeedUnits}
          </span>
        </Stack>
        <Stack className="align-bottom" direction="horizontal" gap={2}>
          <ButtonWithBadge name={"Тарифы"} count={plansCount} />
          <ButtonWithBadge name={"Акции"} count={reviewsCount} />
          <ButtonWithBadge name={"Отзывы"} count={promotionsCount} />
        </Stack>
      </Stack>
    </Col>
  );
};

export default ProviderCardMiddlePart;
