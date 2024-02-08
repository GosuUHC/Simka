import Header from "./view/components/header/Header";
import useFeedback from "./viewmodel/hooks/feedback/useFeedback";
import ProvidersPage from "./view/pages/providers/ProvidersPage";

function App() {
  // const { data, error, isLoading } = useGetPromotionsQuery(); // promotions не работает
  // const { data, error, isLoading } = useGetProvidersSortedQuery("cheap");
  // const { data, error, isLoading } = useGetProvidersByIdQuery([1, 2]);
  // const { data, error, isLoading } = useGetPlansQuery({
  //   provider_id: [1, 2],
  // });

  // const { data, error, isLoading } = useGetCompilationsQuery(); // compilations не работает

  // Outlet

  return (
    <>
      <Header />
      <ProvidersPage />

    </>
  );
}

export default App;
