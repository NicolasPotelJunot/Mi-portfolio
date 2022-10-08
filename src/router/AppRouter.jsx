import { HashRouter, Routes, Route } from "react-router-dom";
import { App } from "../views/App";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  );
};
