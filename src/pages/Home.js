import React from 'react'
import ContentSection from '../components/ContentSection'
import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'
import SupportSection from '../components/SupportSection'

const Home = () => {
    return (
        <>
            <Hero />
            <SupportSection />
            <NewsSection />
            <ContentSection />
        </>
    )
}

export default Home
