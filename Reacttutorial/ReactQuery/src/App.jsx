import React, { Children } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import MainLayout from "./Components/MainLayout";
import FetchOld from "./Components/FetchOld";
import FetchRQ from "./Components/FetchRQ";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FetchIndRQ from "./Components/FetchIndRQ";
import Pagination from "./Components/Pagination";
import InfiniteScroll from "./Components/InfiniteScroll";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/trade" element={<FetchOld />} />
        <Route path="/rq" element={<FetchRQ />} />
        <Route path="/rq/:id" element={<FetchIndRQ />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite" element={<InfiniteScroll />} />
      </Route>
    </>
  )
);

function App() {
  // Create a instance of query Client:
  const queryClient = new QueryClient();
  return (
    // Create A provide and pass the instance:
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
