import { useGetPlansQuery } from "./transport/plans";
import { useGetCompilationsQuery } from "./transport/compilations";
import { useGetProvidersByIdQuery } from "./transport/providers";
import Header from "./view/components/header/Header";

function App() {
  // const { data, error, isLoading } = useGetPromotionsQuery(); // promotions не работает
  // const { data, error, isLoading } = useGetProvidersSortedQuery("cheap");
  // const { data, error, isLoading } = useGetProvidersByIdQuery([1, 2]);
  const { data, error, isLoading } = useGetPlansQuery({
    provider_id: [1, 2],
  });

  // const { data, error, isLoading } = useGetCompilationsQuery(); // compilations не работает

  console.log(isLoading ? "Loading..." : data);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
