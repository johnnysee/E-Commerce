import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Catalog } from "../../features/catalog/Catalog";
import { Header } from "./Header";
import { Route } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { AboutPage } from "../../features/about/AboutPage";
import { ContactPage } from "../../features/contact/ContactPage";
import { ProductDetails } from "../../features/catalog/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServerError from "../errors/ServerError";
import { BasketPage } from "../../features/basket/BasketPage";
import { getCookie } from "../utils/utils";
import agent from "../api/agent";
import { LoadingComponent } from "./LoadingComponent";
import { CheckoutPage } from "../../features/checkout/CheckoutPage";
import { useAppDispatch } from "../store/configureStore";
import { setBasket } from "../../features/basket/basketSlice";

export const App = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");

    if (buyerId) {
      agent.Basket.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
    setLoading(false);
  }, [dispatch]);

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

  if (loading) return <LoadingComponent message="Initializing app..." />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          theme="colored"
          position="bottom-right"
          hideProgressBar
        />
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleTheme} />
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={ProductDetails} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/server-error" component={ServerError} />
          <Route path="/basket" component={BasketPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Container>
      </ThemeProvider>
    </>
  );
};
