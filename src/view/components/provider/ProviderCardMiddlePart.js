import { Col, Stack } from "react-bootstrap";
import ButtonWithBadge from "./ButtonWithBadge";

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
          <p>от {minPrice} руб./мес.</p>
          <p>
            до {maxSpeed} {maxSpeedUnits}
          </p>
        </Stack>
        <Stack className="mt-auto" direction="horizontal" gap={2}>
          <ButtonWithBadge name={"Тарифы"} count={plansCount} />
          <ButtonWithBadge name={"Акции"} count={reviewsCount} />
          <ButtonWithBadge name={"Отзывы"} count={promotionsCount} />
        </Stack>
      </Stack>
    </Col>
  );
};

export default ProviderCardMiddlePart;
