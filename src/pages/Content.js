import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading';
import ShowMoreButton from '../components/ShowMoreButton';
import ContentCard from '../components/ContentCard';

const Content = () => {
    const { contents, paginateFn, page: { content_page } } = useGlobalContext()
    return (
        <>
            <section className="hero has-background-white-ter is-fullheight  has-background-white-ter py-6 mt-6">
                <nav className="breadcrumb is-size-5 mt-6 mx-6 has-text-dark" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">บทความ</a></li>
                    </ul>
                </nav>
                {
                    Array(content_page).fill(0).map((el, j) => {
                        return (
                            <div div className='columns mx-6 my-auto' key={j}>
                                {
                                    contents.slice(0 + j * 3, 3 + j * 3).map((content_item, i) => {
                                        return <div className="column is-one-third" key={i}>
                                            <ContentCard {...content_item} />
                                        </div>
                                    })
                                }
                            </div>
                        )
                    })
                }
                <ShowMoreButton type="content_page" />
            </section>
        </>
    )
}

export default Content
