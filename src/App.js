import { useGetPlansQuery } from "./transport/plans";
import { useGetCompilationsQuery } from "./transport/compilations";
import { useGetProvidersByIdQuery } from "./transport/providers";
import Header from "./view/components/header/Header";
import useFeedback from "./viewmodel/hooks/feedback/useFeedback";
import { useGetProviderReviewsQuery } from "./transport/reviews";
import Address from "./view/components/address/Address";
import ProvidersPage from "./view/pages/providers/ProvidersPage";

function App() {
  // const { data, error, isLoading } = useGetPromotionsQuery(); // promotions не работает
  // const { data, error, isLoading } = useGetProvidersSortedQuery("cheap");
  // const { data, error, isLoading } = useGetProvidersByIdQuery([1, 2]);
  // const { data, error, isLoading } = useGetPlansQuery({
  //   provider_id: [1, 2],
  // });

  // const { data, error, isLoading } = useGetCompilationsQuery(); // compilations не работает

  // console.log(isLoading ? "Loading..." : data);

  const { data: reviews, isSuccess, error } = useGetProviderReviewsQuery(1);

  const { handleAddingFeedback } = useFeedback();

  const reason = 1;
  const message = "123";
  const email = "test@email.com";

  const handleClick = () => {
    handleAddingFeedback({ reason, message, email }).then((r) =>
      console.log(r),
    );
  };

  const handleClickReviews = () => {
    if (isSuccess) {
      console.log(reviews.data);
    }
  };

  return (
    <>
      <Header />
      <ProvidersPage />
    </>
  );
}

export default App;
