import Container from "react-bootstrap/Container";
import AddressWithText from "../../components/address/AddressWithText";
import ProviderStarRating from "../../components/provider/ProviderStarRating";
import ProviderCardLeftPart from "../../components/provider/ProviderCardLeftPart";
import ProviderCard from "../../components/provider/ProviderCard";
import ProviderCardMiddlePart from "../../components/provider/ProviderCardMiddlePart";
import ProviderCardRightPart from "../../components/provider/ProviderCardRightPart";
import { Stack } from "react-bootstrap";
import useProviders from "../../../viewmodel/hooks/providers/useProviders";
import useAddress from "../../../viewmodel/hooks/address/useAddress";
import Button from "react-bootstrap/Button";

const ProvidersPage = () => {
  const { providersData, isSuccess } = useProviders();
  const { city } = useAddress();

  if (!isSuccess) {
    return;
  }

  const providersMapped = providersData.map((provider, i) => {
    const rating = (
      <ProviderStarRating
        precision={0.1}
        defaultValue={provider.rating_overall}
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
      <AddressWithText />
      <h4>Провайдеры в г. {city}</h4>В вашем городе:{" "}
      <Button variant="link" bsPrefix="info" as="a">
        {city},
      </Button>{" "}
      найдено {providersData.length} провайдеров
      <Stack gap={3}>{providersMapped}</Stack>
    </Container>
  );
};

export default ProvidersPage;
