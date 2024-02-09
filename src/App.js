import Header from "./view/components/header/Header";
import ProvidersPage from "./view/pages/providers/ProvidersPage";
import Footer from "./view/components/footer/Footer";

function App() {
  // const { data, error, isSuccess } = useGetPromotionsQuery(); // promotions не работает
  // const { data, error, isSuccess } = useGetProvidersSortedQuery("cheap");
  // const { data, error, isSuccess } = useGetProvidersByIdQuery([1, 2]);
  // const { data, error, isSuccess } = useGetPlansQuery({
  //   provider_id: [1, 2],
  // });

  // const { data, isSuccess } = useGetCompilationsQuery();
  //
  // if (isSuccess) {
  //   console.log(data);
  // }

  // Outlet

  return (
    <>
      <Header />
      <ProvidersPage />
      <Footer />
    </>
  );
}

export default App;
