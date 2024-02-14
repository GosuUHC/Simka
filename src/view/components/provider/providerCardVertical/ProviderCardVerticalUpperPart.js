import ProviderName from "../ProviderName";
import ProviderRatingBadge from "../ProviderRatingBadge";
import { Stack } from "react-bootstrap";

const ProviderCardVerticalUpperPart = ({
  imgSrc,
  name,
  rating,
  isRecommended,
  desc,
}) => {
  return (
    <Stack gap={2}>
      <ProviderName imgSrc={imgSrc} name={name} inline={true} />
      <span className="text-muted">{name}</span>
      <ProviderRatingBadge
        rating={rating}
        isRecommended={isRecommended}
      />
      <span className="text-muted text-wrap">{desc}</span>
    </Stack>
  );
};

export default ProviderCardVerticalUpperPart;
