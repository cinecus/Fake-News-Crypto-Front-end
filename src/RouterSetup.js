import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Article from './pages/Article/Article';
import ArticlePage from './pages/Article/ArticlePage';
import Home from './pages/Home';
import News from './pages/News/News';
import About from './pages/About';
import NewsPage from './pages/News/NewsPage';
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
                <Route path="/article" element={<Article />} />
                <Route path="/article/:article_id" element={<ArticlePage />}></Route>
                <Route path="/coinprice" element={<CoinPrice />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router >
    )
}

export default RouterSetup
