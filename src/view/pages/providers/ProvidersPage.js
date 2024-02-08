import Container from "react-bootstrap/Container";
import AddressWithText from "../../components/address/AddressWithText";
import ProviderStarRating from "../../components/provider/ProviderStarRating";
import ProviderCardLeftPart from "../../components/provider/ProviderCardLeftPart";
import ProviderCard from "../../components/provider/ProviderCard";
import ProviderCardMiddlePart from "../../components/provider/ProviderCardMiddlePart";
import ProviderCardRightPart from "../../components/provider/ProviderCardRightPart";
import { Stack } from "react-bootstrap";
import useProviders from "../../../viewmodel/hooks/providers/useProviders";
import ProvidersSorting from "../../components/provider/ProvidersSorting";

const ProvidersPage = () => {
  const { providersData, isSuccess } = useProviders();

  if (!isSuccess) {
    return;
  }

  const providersMapped = providersData.map((provider, i) => {
    const rating = (
      <ProviderStarRating
        precision={0.1}
        value={provider.rating_overall}
      />
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
      <Stack gap={2}>
        <AddressWithText />
        <ProvidersSorting />
        <Stack gap={3}>{providersMapped}</Stack>
      </Stack>
    </Container>
  );
};

export default ProvidersPage;
