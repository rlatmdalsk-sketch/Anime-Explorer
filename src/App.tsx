import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
import Detail from "./pages/Detail.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();


function App() {

  return (
    <>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/Search"} element={<Search />}></Route>
                    <Route path={"/anime/:id"} element={<Detail />}></Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>

    </>
  )
}

export default App
