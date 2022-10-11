import { HashRouter, Routes, Route } from "react-router-dom";
import { App } from "../views/App";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const AppRouter = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Ubuntu",
        "Arial Narrow",
        "Arial",
        "Helvetica",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
};
