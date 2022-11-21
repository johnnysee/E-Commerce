import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/layout/App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { StoreProvider } from "./app/context/StoreContext";

export const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router history={history}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>
);
