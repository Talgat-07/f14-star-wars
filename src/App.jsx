import { Route, Routes } from "react-router";
import styles from "./styles/App.module.scss";
import { routes } from "./routes/routesConfig";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};
