import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Catalog } from "../../features/catalog/Catalog";
import { Header } from "./Header";
import { Route } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { AboutPage } from "../../features/about/AboutPage";
import { ContactPage } from "../../features/contact/ContactPage";
import { ProductDetails } from "../../features/catalog/ProductDetails";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleTheme} />
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={ProductDetails} />
        </Container>
      </ThemeProvider>
    </>
  );
};
