import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import Router from "./router";
import { queryClient } from "./query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
