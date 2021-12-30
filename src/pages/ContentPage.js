import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';
import { FaFacebook, FaBars, FaInstagram, FaTwitter, FaDiscord, FaSearch, FaLink } from 'react-icons/fa'
import Loading from '../components/Loading';

const ContentPage = () => {
    const { content_id } = useParams()
    const { contents } = useGlobalContext()
    const [loading, setLoading] = useState(false)
    const [content_item, setContentItem] = useState(null)
    useEffect(() => {
        setLoading(true)
        const getContentPage = async () => {
            const { id, title, category, date, content_image, content, creater, tags } = await contents.find((el) => el.id == content_id)
            await setContentItem({ id, title, category, date, content_image, content, creater, tags })
        }
        getContentPage()
        setLoading(false)
    }, [content_id])
    if (loading) {
        return <Loading />
    }
    if (!content_item) {
        return <h2>404 Have No News Page</h2>
    } else {
        return (
            <>
                <section className="hero has-background-white-ter is-fullheight  has-background-grey-light">
                    <div class="tile is-parent mx-5 is-justify-content-center mt-6 my-6">
                        <article class="tile is-child has-background-white-bis is-8">
                            <div class="content mx-6 mt-6 py-4">
                                <p class="title is-size-3">{content_item.title}</p>
                                <div className='columns is-justify-content-space-between mx-auto'>
                                    <div className='subtitle is-size-5'>
                                        By {content_item.creater}
                                    </div>
                                    <div className='subtitle is-size-5'>
                                        {content_item.date}
                                    </div>
                                </div>
                                <div>
                                    <img class="image is-fullwidth img-band" src={content_item.content_image} alt="Placeholder image" />
                                </div>
                                <div class="content mt-5">
                                    {content_item.content}
                                </div>
                                <div class="content my-6">
                                    <div className='columns is-justify-content-space-between'>
                                        <div>
                                            {
                                                content_item.tags.map((el, i) => {
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

export default ContentPage
