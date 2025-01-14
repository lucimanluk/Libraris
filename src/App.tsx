import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/items/type/:type' element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
