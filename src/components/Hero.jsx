import React from 'react'
import { FaBitcoin } from 'react-icons/fa'
const Hero = () => {
    return (
        <section className="hero is-medium has-background-white-ter py-6">
            <div className="hero-body">
                <div className='columns'>
                    <div className="column is-three-fifths">
                        <h1 className="title is-1 is-spaced">
                            แหล่งข่าวกรองของชาวคริปโต
                        </h1>
                        <p className="subtitle">
                            <section>ติดตามข่าวสารคริปโตเคอเรนซีรายวัน และสาระน่ารู้เกี่ยวกับ block chain</section>
                            <section>ไปพร้อมๆ กับ Fake news Crypto ได้ที่นี่</section>
                        </p>
                    </div>
                    <div className="column has-text-black">
                        <FaBitcoin size={300} />
                    </div>
                    {/* <div className="column mr-6">
                        <FaBitcoin size={300} />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero
