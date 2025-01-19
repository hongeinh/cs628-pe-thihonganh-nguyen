import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MovieList from "./MovieList";

const theme = createTheme(); // Create a default MUI theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieList />
    </ThemeProvider>
  );
}

export default App;
