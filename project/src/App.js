import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
