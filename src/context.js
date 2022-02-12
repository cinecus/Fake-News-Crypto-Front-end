import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import env from "react-dotenv";
import { useCallback } from 'react'
import { data_news } from '../src/data/news'
import { data_article } from './data/article'
import { url } from './utils/api'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [news, setNews] = useState(data_news)
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [page, setPage] = useState({
        news_section_page: 1,
        news_page: 2,
        article_section_page: 1,
        article_page: 2
    })
    const [coin_price, setCoinPrice] = useState(null)
    const showMore = (type) => {
        setPage({ ...page, [type]: page[type] + 1 })
    }
    const paginateFn = (array, page = 1, limit = 3) => {
        return array.slice((page - 1) * limit, page * limit)
    }
    const toggleShow = () => {
        return setIsShow(!isShow)
    }

    const fetchAllArticle = () => {
        setLoading(true)
        try {
            const key = env.BYPASS_KEY
            // console.log(key);
            const config = {
                method: 'get',
                url: `${url}/article/getArticleTable`,
                headers: { 'Authorization': key }
            }
            axios(config)
                .then((res) => {
                    setArticle(res.data.result)
                    setLoading(false)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log('error', error);
                })
        } catch (error) {
            setLoading(false)
            console.log('error', error);
        }
    }
    useEffect(() => {
        fetchAllArticle()
    }, [])
    return (
        <AppContext.Provider
            value={{ news, article, page, isShow, coin_price, setIsShow, showMore, paginateFn, toggleShow }}
        >
            {children}
        </AppContext.Provider>
    )
}


// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }