import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/cart" element={<Cart />} errorElement={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
