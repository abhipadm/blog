import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import MainPage from "./pages/MainPage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#4ebaaa",
      main: "#00897b",
      dark: "#005b4f",
      contrastText: "#000000",
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
