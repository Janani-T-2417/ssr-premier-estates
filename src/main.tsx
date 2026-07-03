import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";
import { reportLovableError } from "./lib/lovable-error-reporting";

const queryClient = new QueryClient();

// Add a global error handler for lovable
window.addEventListener("error", (event) => {
  reportLovableError(event.error, { boundary: "window_error" });
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
