import React from 'react'
import NewsCard from './NewsCard'
import { useGlobalContext } from '../../context'
import ShowMoreButton from '../ShowMoreButton'

const NewsSection = () => {
    const { news, page: { news_section_page }, showMore } = useGlobalContext()
    return (
        <>
            <section class="hero is-small has-background-white-ter py-5">
                <div class="hero-body">
                    <div className="columns is-justify-content-center mx-auto px-auto">
                        <h1 className="title is-2 ">อัพเดตข่าวคริปโตเคอเรนซี</h1>
                    </div>
                    <div className="columns is-justify-content-center mx-auto px-auto">
                        <div className='underline'></div>
                    </div>
                    {
                        Array(news_section_page).fill(0).map((el, j) => {
                            return (
                                <div div className='columns mx-6 my-auto' key={j}>
                                    {
                                        news.slice(0 + j * 3, 3 + j * 3).map((news_item, i) => {
                                            return <div className="column is-one-third" key={i}>
                                                <NewsCard {...news_item} />
                                            </div>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <ShowMoreButton type='news_section_page' />
                </div>
            </section>

        </>
    )
}

export default NewsSection
