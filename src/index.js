import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./root";
import "antd/dist/antd.css";
import "react-alice-carousel/lib/alice-carousel.css";

import { QueryClient, QueryClientProvider } from "react-query";

const query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={query}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>
);
