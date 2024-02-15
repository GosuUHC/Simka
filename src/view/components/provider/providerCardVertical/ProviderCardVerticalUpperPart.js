import ProviderName from "../ProviderName";
import ProviderRatingBadge from "../ProviderRatingBadge";
import { Col } from "react-bootstrap";

const ProviderCardVerticalUpperPart = ({
  imgSrc,
  name,
  rating,
  isRecommended,
  desc,
}) => {
  return (
    <Col >
      <ProviderName imgSrc={imgSrc} name={name} inline={true} />
      <span className="text-muted">{name}</span>
      <ProviderRatingBadge
        rating={rating}
        isRecommended={isRecommended}
      />
      <span className="text-muted text-wrap mb-auto">{desc}</span>
    </Col>
  );
};

export default ProviderCardVerticalUpperPart;
