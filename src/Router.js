import { useRoutes } from "react-router-dom";
import { PATH } from "./consts";
import { lazy, Suspense } from "react";

const MainPage = lazy(() =>
  import("./view/pages/main/MainPage").then((comp) => comp),
);
const ProvidersPage = lazy(() =>
  import("./view/pages/providers/ProvidersPage").then((comp) => comp),
);

const Router = () => {
  return useRoutes([
    {
      element: (
        <Suspense>
          <MainPage />
        </Suspense>
      ),
      path: PATH.main,
    },
    {
      element: (
        <Suspense>
          <ProvidersPage />
        </Suspense>
      ),
      path: PATH.providers,
    },
  ]);
};

export default Router;
