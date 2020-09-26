import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import MainPage from "./pages/MainPage";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#304668",
      light: "#5d7196",
      dark: "#001f3d",
      contrastText: "#C3E4E4",
    },
    secondary: {
      main: "#adefd1",
      light: "#e0ffff",
      dark: "#7cbca0",
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
