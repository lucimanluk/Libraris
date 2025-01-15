import Navbar from "./components/Navbar";
//import Product from "./components/Product";
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
        {/*<Product id={'rower'} price={230} title={"hi"} page_num={230} sale={0} available={0} type={'BOOK'} author={'eu'} / >*/}
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
