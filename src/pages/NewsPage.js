import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';
import { FaFacebook, FaBars, FaInstagram, FaTwitter, FaDiscord, FaSearch, FaLink } from 'react-icons/fa'
import Loading from '../components/Loading';

const NewsPage = () => {
    const { news_id } = useParams()
    const { news } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const [news_item, setNewsItem] = useState(null)
    useEffect(() => {
        setLoading(true)
        const getNewsPage = async () => {
            const { id, title, category, date, news_image, content, creater, tags } = await news.find((el) => el.id == news_id)
            await setNewsItem({ id, title, category, date, news_image, content, creater, tags })
        }
        getNewsPage()
        setLoading(false)
    }, [news_id])
    if (loading) {
        return <Loading />
    }
    if (!news_item) {
        return <h2>404 Have No News Page</h2>
    } else {
        return (
            <>
                <section className="hero has-background-white-ter is-fullheight  has-background-grey-light">
                    <div class="tile is-parent mx-5 is-justify-content-center mt-6 my-6">
                        <article class="tile is-child has-background-white-bis is-8">
                            <div class="content mx-6 mt-6 py-4">
                                <p class="title is-size-3">{news_item.title}</p>
                                <div className='columns is-justify-content-space-between mx-auto'>
                                    <div className='subtitle is-size-5'>
                                        By {news_item.creater}
                                    </div>
                                    <div className='subtitle is-size-5'>
                                        {news_item.date}
                                    </div>
                                </div>
                                <div>
                                    <img class="image is-fullwidth img-band" src={news_item.news_image} alt="Placeholder image" />
                                </div>
                                <div class="content mt-5">
                                    {news_item.content}
                                </div>
                                <div class="content my-6">
                                    <div className='columns is-justify-content-space-between'>
                                        <div>
                                            {
                                                news_item.tags.map((el, i) => {
                                                    return (<button class="button is-link is-light mx-2" key={i}>{el}</button>)
                                                })
                                            }

                                        </div>
                                        <div>
                                            <button class="button is-link  mx-2"><FaFacebook size={20} />&nbsp;Share</button>
                                            <button class="button is-link is-light mx-2"><FaLink size={20} /> &nbsp; Copy Link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </>
        )
    }

}

export default NewsPage
