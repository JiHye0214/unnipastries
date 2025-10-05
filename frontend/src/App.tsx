import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Mypage from "./pages/auth/Mypage";
import Cart from "./pages/auth/Cart";
import Order from "./pages/Order";
import Custom from "./pages/Custom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SquareSignSuccess from "./pages/auth/square-signin-success";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                {/* auth */}
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/square-login-success" element={<SquareSignSuccess />} />
                
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/wedding-custom" element={<Custom />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
