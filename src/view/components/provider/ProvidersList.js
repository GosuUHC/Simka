import useProviders from "../../../viewmodel/hooks/providers/useProviders";
import { useState } from "react";
import ProviderStarRating from "./ProviderStarRating";
import ProviderCardLeftPart from "./ProviderCardLeftPart";
import ProviderCardMiddlePart from "./ProviderCardMiddlePart";
import ProviderCardRightPart from "./ProviderCardRightPart";
import ProviderCard from "./ProviderCard";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CaretDownFill } from "react-bootstrap-icons";

const ProvidersList = () => {
  const { providersData, isSuccess } = useProviders();
  const [limit, setLimit] = useState(3);

  if (!isSuccess) {
    return;
  }

  const onShowMore = () => {
    setLimit(limit + 3);
  };

  const providersMapped = providersData.slice(0, limit).map((provider, i) => {
    const rating = (
      <ProviderStarRating precision={0.1} value={provider.rating_overall} />
    );

    const left = (
      <ProviderCardLeftPart
        imgSrc={provider.image}
        name={provider.name}
        component={rating}
      />
    );

    const middle = (
      <ProviderCardMiddlePart
        minPrice={provider.min_price}
        maxSpeed={provider.max_internet_speed_value}
        maxSpeedUnits={provider.max_internet_speed_units}
        plansCount={provider.plans_count}
        promotionsCount={provider.promotions_count}
        reviewsCount={provider.reviews_count}
      />
    );

    const right = (
      <ProviderCardRightPart
        description={provider.description}
        phone={provider.phone}
      />
    );

    return <ProviderCard key={i} components={[left, middle, right]} />;
  });

  return (
    <Stack gap={3} className="pb-3">
      {providersMapped}
      {limit < providersData.length && (
        <Button as="div" bsPrefix="show" onClick={onShowMore}>
          <CaretDownFill /> Показать больше
        </Button>
      )}
    </Stack>
  );
};

export default ProvidersList;
