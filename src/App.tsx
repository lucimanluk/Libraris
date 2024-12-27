import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <div className="m-0 min-h-screen">
        <Navbar />
        <ProductPage/>
        <Routes>
          <Route path='/productpage' element={<ProductPage />} />
          <Route path='/produs' element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
