import Container from "react-bootstrap/Container";
import AddressWithText from "../../components/address/AddressWithText";
import ProviderStarRating from "../../components/provider/ProviderStarRating";
import ProviderCardLeftPart from "../../components/provider/ProviderCardLeftPart";
import ProviderCard from "../../components/provider/ProviderCard";
import ProviderCardMiddlePart from "../../components/provider/ProviderCardMiddlePart";
import ProviderCardRightPart from "../../components/provider/ProviderCardRightPart";
import { Row, Stack } from "react-bootstrap";
import useProviders from "../../../viewmodel/hooks/providers/useProviders";
import ProvidersSorting from "../../components/provider/ProvidersSorting";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { CaretDownFill } from "react-bootstrap-icons";

const ProvidersPage = () => {
  const { providersData, isSuccess } = useProviders();
  const [limit, setLimit] = useState(4);

  const onShowMore = () => {
    setLimit(limit + 3);
  };

  if (!isSuccess) {
    return;
  }

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

    return (
      <ProviderCard key={i} components={[left, middle, right]}></ProviderCard>
    );
  });

  return (
    <Container>
      <Row className="py-5">
        <AddressWithText />
      </Row>
      <ProvidersSorting />
      <Stack gap={3}>
        {providersMapped}
        {limit <= providersData.length && (
          <Button as="div" bsPrefix="show" onClick={onShowMore}>
            <CaretDownFill /> Показать больше
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default ProvidersPage;
