import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import MainPage from "./pages/MainPage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#FFCB9A",
      main: "#116466",
      dark: "#2C3531",
      contrastText: "#D9B08C",
    },
    secondary: {
      light: "#ffff89",
      main: "#d4e157",
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
