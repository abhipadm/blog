import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import MainPage from "./pages/MainPage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#171619",
      light: "#18191B",
      dark: "#000000",
      contrastText: "#C3E4E4",
    },
    secondary: {
      main: "#FEF600",
      light: "#D8A100",
      dark: "#202020",
      contrastText: "#51676D",
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
