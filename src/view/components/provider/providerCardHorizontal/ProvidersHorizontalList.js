import useProviders from "../../../../viewmodel/hooks/providers/useProviders";
import { useMemo, useState } from "react";
import ProviderStarRating from "../ProviderStarRating";
import ProviderCardHorizontalLeftPart from "./ProviderCardHorizontalLeftPart";
import ProviderCardHorizontalMiddlePart from "./ProviderCardHorizontalMiddlePart";
import ProviderCardHorizontalRightPart from "./ProviderCardHorizontalRightPart";
import ProviderCardHorizontal from "./ProviderCardHorizontal";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CaretDownFill } from "react-bootstrap-icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProviderCardVertical from "../providerCardVertical/ProviderCardVertical";

const ProvidersHorizontalList = () => {
  const { providersData, isSuccess } = useProviders();
  const [limit, setLimit] = useState(3);

  const vertical = useMediaQuery("(max-width:1000px)");

  const onShowMore = () => {
    setLimit(limit + 3);
  };

  const providersMapped = useMemo(() => {
    if (!isSuccess) return null;

    return providersData.slice(0, limit).map((provider) => {
      const rating = (
        <ProviderStarRating precision={0.1} value={provider.rating_overall} />
      );

      const left = (
        <ProviderCardHorizontalLeftPart
          imgSrc={provider.image}
          name={provider.name}
          component={rating}
        />
      );

      const middle = (
        <ProviderCardHorizontalMiddlePart
          minPrice={provider.min_price}
          maxSpeed={provider.max_internet_speed_value}
          maxSpeedUnits={provider.max_internet_speed_units}
          plansCount={provider.plans_count}
          promotionsCount={provider.promotions_count}
          reviewsCount={provider.reviews_count}
        />
      );

      const right = (
        <ProviderCardHorizontalRightPart
          description={provider.description}
          phone={provider.phone}
        />
      );

      return vertical ? (
        <ProviderCardVertical
          key={provider.id}
          components={[left, middle, right]}
        />
      ) : (
        <ProviderCardHorizontal
          key={provider.id}
          components={[left, middle, right]}
        />
      );
    });
  }, [isSuccess, limit, providersData, vertical]);

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

export default ProvidersHorizontalList;
