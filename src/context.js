import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { data_news } from '../src/data/news'
import { data_content } from '../src/data/content'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [news, setNews] = useState(data_news)
    const [contents, setContent] = useState(data_content)
    const [isShow, setIsShow] = useState(false)
    const [page, setPage] = useState({
        news_section_page: 1,
        news_page: 2,
        content_section_page: 1,
        content_page: 2
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
    const fetchCoinPrice = async () => {
        try {
            const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            const data = await res.json()
            setCoinPrice(data)
        } catch (error) {
            alert("Fetch API Error")
        }
    }
    return (
        <AppContext.Provider
            value={{ news, contents, page, isShow, coin_price, setIsShow, showMore, paginateFn, toggleShow, fetchCoinPrice }}
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