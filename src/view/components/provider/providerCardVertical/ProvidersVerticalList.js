import useProviders from "../../../../viewmodel/hooks/providers/useProviders";
import ProviderCardVerticalUpperPart from "./ProviderCardVerticalUpperPart";
import ProviderCardVerticalBottomPart from "./ProviderCardVerticalBottomPart";
import ProviderCardVertical from "./ProviderCardVertical";
import { Col, Stack } from "react-bootstrap";
import ProviderCardVerticalPlaceholder from "./ProviderCardVerticalPlaceholder";
import WithCarousel from "../../hoc/withCarousel/WithCarousel";

const ProvidersVerticalList = () => {
  const { providersData } = useProviders();

  const providersMapped = providersData.map((provider, i) => {
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
      <Col className="d-flex align-self-stretch " key={i + 1} xs={12} sm={6} md={4} lg={3}>
        <ProviderCardVertical key={i} components={[upper, bottom]} />
      </Col>
    );
  });

  const providersMappedAppended = [<ProviderCardVerticalPlaceholder key={0} />].concat(
    providersMapped,
  );

  const providersWithCarousel = WithCarousel({
    componentsList: providersMappedAppended,
    itemsPerPage: 4,
  });

  return (
    <Stack
      className="justify-content-evenly py-4"
      direction="horizontal"
      gap={3}
    >
      {providersWithCarousel}
    </Stack>
  );
};

export default ProvidersVerticalList;
