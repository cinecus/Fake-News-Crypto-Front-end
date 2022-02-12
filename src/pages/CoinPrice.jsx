import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

const CoinPrice = () => {
    const [loading, setLoading] = useState(false)
    const { coin_price, fetchCoinPrice } = useGlobalContext()
    useEffect(() => {
        setLoading(true)
    }, [])
    if (loading) {
        return <Loading />
    }
    if (!coin_price) {
        return <h2>404 Not Found</h2>
    }
    else {
        return (
            <>
                <section className="hero has-background-white-ter is-fullheight has-background-grey-light py-6 mt-6">
                    <div class="tile is-parent mx-5 is-justify-content-center mt-6 my-6">
                        <article class="tile is-child has-background-white-bis is-8 py-6">
                            <div className="columns is-justify-content-center mx-auto px-auto">
                                <h1 className="title is-2 ">ราคาเหรียญคริปโต</h1>
                            </div>
                            <div className="columns is-justify-content-center mx-auto px-auto">
                                <div className='underline'></div>
                            </div>
                            {/* <table class="table is-fullwidth mx-6">
                                <thead>
                                    <tr>
                                        <th><abbr title="Rank">Rank</abbr></th>
                                        <th><abbr title="Name">Name</abbr></th>
                                        <th><abbr title="Symbol">Symbol</abbr></th>
                                        <th><abbr title="Current_price">Current Price</abbr></th>
                                        <th><abbr title="Price_change_percent_24h">Price Change (%)</abbr></th>
                                        <th><abbr title="Market_cap">Market Cap</abbr></th>
                                        <th><abbr title="Market_cap_change_percent_24h">Market Cap Change (%)</abbr></th>
                                    </tr>
                                </thead>
                            </table> */}
                        </article>
                    </div>
                </section>
            </>
        )
    }

}

export default CoinPrice
