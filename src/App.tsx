import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/products/:type' element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
