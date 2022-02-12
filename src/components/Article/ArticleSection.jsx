import React from 'react'
import ArticleCard from '../Article/ArticleCard'
import { useGlobalContext } from '../../context'
import ShowMoreButton from '../ShowMoreButton'

const ArticleSection = () => {
    const { article, page: { content_section_page }, showMore } = useGlobalContext()
    return (
        <>
            <section class="hero is-small has-background-white-ter py-5">
                <div class="hero-body">
                    <div className="columns is-justify-content-center mx-auto px-auto">
                        <h1 className="title is-2 ">บทความคริปโตเคอเรนซี</h1>
                    </div>
                    <div className="columns is-justify-content-center mx-auto px-auto">
                        <div className='underline'></div>
                    </div>
                    {
                        Array(content_section_page).fill(0).map((el, j) => {
                            return (
                                <div div className='columns mx-6 my-auto' key={j}>
                                    {
                                        article.slice(0 + j * 3, 3 + j * 3).map((article_item, i) => {
                                            return <div className="column is-one-third" key={i}>
                                                <ArticleCard {...article_item} />
                                            </div>
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <ShowMoreButton type='content_section_page' />
                </div>
            </section>

        </>
    )
}

export default ArticleSection
