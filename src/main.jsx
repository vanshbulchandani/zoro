import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
