import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SingIn";
import Mypage from "./pages/auth/Mypage";
import Cart from "./pages/auth/Cart";
import Order from "./pages/Order";
import Custom from "./pages/Custom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

function App() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if(location.pathname === '/sign-in') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    })

    return (
        <>
            <Header isVisible={isVisible}/>
            <Routes>
                {/* auth */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/cart" element={<Cart />} />
                
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/wedding-custom" element={<Custom />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
