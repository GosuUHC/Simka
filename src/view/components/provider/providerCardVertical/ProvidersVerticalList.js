import useProviders from "../../../../viewmodel/hooks/providers/useProviders";
import ProviderCardVerticalUpperPart from "./ProviderCardVerticalUpperPart";
import ProviderCardVerticalBottomPart from "./ProviderCardVerticalBottomPart";
import ProviderCardVertical from "./ProviderCardVertical";
import { Col, Stack } from "react-bootstrap";
import ProviderCardVerticalPlaceholder from "./ProviderCardVerticalPlaceholder";

const ProvidersVerticalList = () => {
  const { providersData, isSuccess } = useProviders();

  if (!isSuccess) {
    return;
  }

  const providersMapped = providersData.slice(0, 3).map((provider, i) => {
    const upper = (
      <ProviderCardVerticalUpperPart
        imgSrc={provider.image}
        name={provider.name}
        rating={provider.rating_overall}
        isRecommended={i === 0}
        desc={provider.description}
      />
    );

    const bottom = (
      <ProviderCardVerticalBottomPart
        price={provider.min_price}
        speed={provider.max_internet_speed_value}
        speedUnits={provider.max_internet_speed_units}
      />
    );

    return (
      <Col key={i} xs={12} sm={6} md={4} lg={3}>
        <ProviderCardVertical key={i} components={[upper, bottom]} />
      </Col>
    );
  });

  return (
    <Stack
      className="justify-content-evenly py-4"
      direction="horizontal"
      gap={3}
    >
      <ProviderCardVerticalPlaceholder />
      {providersMapped}
    </Stack>
  );
};

export default ProvidersVerticalList;
