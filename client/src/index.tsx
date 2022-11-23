import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/layout/App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";
import { fetchProductsAsync } from "./features/catalog/catalogSlice";

export const history = createBrowserHistory();

store.dispatch(fetchProductsAsync);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
