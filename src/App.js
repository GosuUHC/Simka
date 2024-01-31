import logo from "./logo.svg";
import "./App.css";
import { useGetPlansQuery } from "./Transport/plans";

function App() {
  // const { data, error, isLoading } = useGetPromotionsQuery(); // promotions не работает
  // const { data, error, isLoading } = useGetProvidersSortedQuery("cheap");
  // const { data, error, isLoading } = useGetProvidersByIdQuery([1, 2]);
  const { data, error, isLoading } = useGetPlansQuery({
    is_promotion: 0,
    provider_id: [1, 2],
  });

  console.log(isLoading ? "Loading..." : data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div></div>
      </header>
    </div>
  );
}

export default App;
