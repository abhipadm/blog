import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import MainPage from "./pages/MainPage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#116466",
      light: "#FFCB9A",
      dark: "#2C3531",
      contrastText: "#D9B08C",
    },
    secondary: {
      main: "#d4e157",
      light: "#ffff89",
      dark: "#a0af22",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
