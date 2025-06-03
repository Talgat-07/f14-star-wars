import { Route, Routes } from "react-router";
import styles from "./styles/App.module.scss";
import { routes } from "./routes/routesConfig";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};
