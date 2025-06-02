import { CategoryPage } from "../pages/CategoryPage";
import { FailPage } from "../pages/FailPage";
import { FavoritePage } from "../pages/FavoritePage";
import { HomePage } from "../pages/HomePages";
import { NotFound } from "../pages/NotFound";
import { PeoplePage } from "../pages/PeoplePage";
import { SearchPage } from "../pages/SearchPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/favorite",
    element: <FavoritePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/fail",
    element: <FailPage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
