import React,{useEffect} from 'react'
import ArticleSection from '../components/Article/ArticleSection'
import Hero from '../components/Hero'
import NewsSection from '../components/News/NewsSection'
import SupportSection from '../components/SupportSection'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Hero />
            <SupportSection />
            <NewsSection />
            <ArticleSection />
        </>
    )
}

export default Home
