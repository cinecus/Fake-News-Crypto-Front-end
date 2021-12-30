import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaBars, FaInstagram, FaTwitter, FaDiscord, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useGlobalContext } from '../context';

const Navbar = () => {
    const { isShow, toggleShow, setIsShow } = useGlobalContext()
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        if (+size > 1080) {
            setIsShow(false)
        } else {
            setIsShow(true)
        }
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [size])
    return (
        <div>
            <nav className="navbar is-spaced is-dark is-fixed-top py-2" role="navigation" aria-label="main navigation" navbar-height="3.25rem">
                <div className="navbar-brand">
                    <Link to='/' className="navbar-item mx-3" style={{ textDecoration: "none" }}>
                        <h3 className='is-size-5 mx-3' >
                            Fake News Crypto
                        </h3>
                    </Link>
                    <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => toggleShow()}>
                        <GiHamburgerMenu size={20} />
                        <div className=''>
                        </div>
                    </button>
                </div>
                {isShow && (<div className='sidebar-wraper'>
                    <div className="navbar-brand">
                        <Link to='/news' className="navbar-item mx-3" style={{ textDecoration: "none" }}>
                            <h3 className='is-size-5 mx-3' >
                                ข่าวคริปโต
                            </h3>
                        </Link>
                    </div>
                    <div className="navbar-brand">
                        <Link to='/content' className="navbar-item mx-3" style={{ textDecoration: "none" }}>
                            <h3 className='is-size-5 mx-3' >
                                บทความ
                            </h3>
                        </Link>
                    </div>
                    <div className="navbar-brand">
                        <Link to='/coinprice' className="navbar-item mx-3" style={{ textDecoration: "none" }}>
                            <h3 className='is-size-5 mx-3' >
                                ราคาเหรียญประจำวัน
                            </h3>
                        </Link>
                    </div>
                </div>
                )}
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link to='news' className="navbar-item " style={{ textDecoration: "none" }} >
                            <h3 className='is-size-5 mx-3' >
                                ข่าวคริปโต
                            </h3>
                        </Link>
                        <Link to='/content' className="navbar-item" style={{ textDecoration: "none" }}>
                            <h3 className='is-size-5 mx-3' >
                                บทความ
                            </h3>
                        </Link>
                        <Link to='/coinprice' className="navbar-item" style={{ textDecoration: "none" }}>
                            <h3 className='is-size-5 mx-3' >
                                ราคาเหรียญประจำวัน
                            </h3>
                        </Link>
                        {/* <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div> */}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a href="https://www.facebook.com" target="_blank" className='has-text-light' >
                                <FaFacebook size={36} />
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a href="https://www.instagram.com/" target="_blank" className='has-text-light'><FaInstagram size={36} /></a>
                        </div>
                        <div className="navbar-item">
                            <a href="https://www.twitter.com" target="_blank" className='has-text-light'><FaTwitter size={36} /></a>
                        </div>
                        <div className="navbar-item">
                            <a href="https://www.discord.com" target="_blank" className='has-text-light'><FaDiscord size={36} /></a>
                        </div>
                        {/* <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div> */}
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
