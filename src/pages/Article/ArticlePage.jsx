import React, { useState, useEffect } from 'react'
import axios from 'axios'
import env from "react-dotenv";
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom';
import { FaFacebook, FaBars, FaInstagram, FaTwitter, FaDiscord, FaSearch, FaLink } from 'react-icons/fa'
import Loading from '../../components/Loading';
import { url } from '../../utils/api'
import moment from 'moment';

const ArticlePage = () => {
    const { article_id } = useParams()
    const { article } = useGlobalContext()
    const [loading, setLoading] = useState(true)
    const [article_item, setArticleItem] = useState({})
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        setLoading(true)
        const fetchArticleById = () => {
            setLoading(true)
            try {
                const key = env.BYPASS_KEY
                const config = {
                    method: 'get',
                    url: `${url}/article/getSingleArticleTable?article_id=${article_id}`,
                    headers: { 'Authorization': key }
                }
                axios(config)
                    .then((res) => {
                        const { name: title, creator, tag, content, image_cover_uri: content_image, created_date: date } = res.data.result
                        setArticleItem({ title, creator, tag, content, date, content_image })
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.log('error', error);
                        setLoading(false)
                    })
            } catch (error) {
                console.log('error', error);
                setLoading(false)
            }
        }
        fetchArticleById()
    }, [])
    if (loading) {
        return <Loading />
    }else if (!article_item) {
        return <h2>404 Have No News Page</h2>
    } else {
        return (
            <>
                <section className="hero has-background-white-ter is-fullheight  has-background-grey-light">
                    <div class="tile is-parent mx-5 is-justify-content-center mt-6 my-6">
                        <article class="tile is-child has-background-white-bis is-8">
                            <div class="content mx-6 mt-6 py-4">
                                <p class="title is-size-3">{article_item.title}</p>
                                <div className='columns is-justify-content-space-between mx-auto'>
                                    <div className='subtitle is-size-5'>
                                        By {article_item.creator}
                                    </div>
                                    <div className='subtitle is-size-5'>
                                        {moment(article_item.date).format('DD-MM-YY')}
                                    </div>
                                </div>
                                <div>
                                    <img class="image is-fullwidth img-band" src={article_item.content_image} alt="Placeholder image" />
                                </div>
                                <div class="content mt-5" dangerouslySetInnerHTML={{__html:article_item.content}}>
                                </div>
                                <div class="content my-6">
                                    <div className='columns is-justify-content-space-between'>
                                        <div>
                                            {
                                                article_item.tag.map((el, i) => {
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

export default ArticlePage
