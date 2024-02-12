import { useRoutes } from "react-router-dom";
import MainPage from "./view/pages/main/MainPage";
import { PATH } from "./consts";
import ProvidersPage from "./view/pages/providers/ProvidersPage";

const Router = () => {
  return useRoutes([
    {
      element: <MainPage />,
      path: PATH.main,
    },
    {
      element: <ProvidersPage />,
      path: PATH.providers,
    },
  ]);
};

export default Router;
