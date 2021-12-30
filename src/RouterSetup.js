import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Content from './pages/Content';
import ContentPage from './pages/ContentPage';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import NewsPage from './pages/NewsPage';
import Error from './pages/Error'
import CoinPrice from "./pages/CoinPrice";
import Footer from "./components/Footer";

const RouterSetup = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:news_id" element={<NewsPage />} />
                <Route path="/content" element={<Content />} />
                <Route path="/content/:content_id" element={<ContentPage />}></Route>
                <Route path="/coinprice" element={<CoinPrice />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router >
    )
}

export default RouterSetup
