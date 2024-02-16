import useProviders from "../../../../viewmodel/hooks/providers/useProviders";
import ProviderCardVerticalUpperPart from "./ProviderCardVerticalUpperPart";
import ProviderCardVerticalBottomPart from "./ProviderCardVerticalBottomPart";
import ProviderCardVertical from "./ProviderCardVertical";
import { Col, Row } from "react-bootstrap";
import ProviderCardVerticalPlaceholder from "./ProviderCardVerticalPlaceholder";
import WithCarousel from "../../hoc/withCarousel/WithCarousel";
import { useMemo } from "react";

const ProvidersVerticalList = () => {
  const { providersData } = useProviders();

  const providersMapped = useMemo(() => {
    return providersData.map((provider) => {
      const upper = (
        <ProviderCardVerticalUpperPart
          imgSrc={provider.image}
          name={provider.name}
          rating={provider.rating_overall}
          isRecommended={provider.id === providersData[0].id}
          desc={provider.description}
          key={`upper-${provider.id}`}
        />
      );

      const bottom = (
        <ProviderCardVerticalBottomPart
          price={provider.min_price}
          speed={provider.max_internet_speed_value}
          speedUnits={provider.max_internet_speed_units}
          key={`bottom-${provider.id}`}
        />
      );

      return (
        <Col
          className="py-1 d-flex"
          key={provider.id}
          xs={12}
          sm={6}
          md={6}
          lg={3}
        >
          <ProviderCardVertical
            key={provider.id}
            components={[upper, bottom]}
          />
        </Col>
      );
    });
  }, [providersData]);

  const providersMappedAppended = [
    <ProviderCardVerticalPlaceholder key={0} />,
  ].concat(providersMapped);

  const providersWithCarousel = WithCarousel({
    componentsList: providersMappedAppended,
    itemsPerPage: 4,
  });

  return (
    <Row md={8} className="d-flex justify-content-evenly py-4">
      {providersWithCarousel}
    </Row>
  );
};

export default ProvidersVerticalList;
