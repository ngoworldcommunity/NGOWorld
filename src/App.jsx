import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BacktoTop } from "./components/shared";
import "./styles/App.css";
import "./styles/Globals.scss";
import './utils/i18n';
import routesConfig from "./utils/routesConfig.jsx";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const App = () => {
  const queryClient = new QueryClient();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");

  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(lang, (err) => {
      if (err) return console.log('something went wrong loading', err);
    });
  }, [lang]);

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="app">
          <ToastContainer />
          <Suspense fallback={t("loading")}>
            <Routes>
              {routesConfig.map((route, index) => (
                <Route
                  key={index}
                  exact
                  path={route?.path}
                  element={route?.element}
                />
              ))}
            </Routes>
          </Suspense>
          <BacktoTop />
        </div>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};

export default App;
