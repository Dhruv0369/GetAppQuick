import React from 'react'
import logo1 from '../assets/subaway suffer.jpg'
import gamelogo from '../assets/Aquarium.png'

const PopularGames = () => {
    return (
        <>
            <section className="home-popgames">
                <h2 className="layout-mintit">Popular Games</h2>
                <div className="popgames">
                    <div className="popgames-item">
                        <a href="/app/com.roblox.client/" className="popgames-con">
                            <div className="popgames-item-all">
                                <img
                                    lazyload=""
                                    className="popgames-item-pic"
                                    src={logo1}
                                    data-src="../public/header_image/p14rnplo42745op1pg2sk1117on1izwi.jpg"
                                    alt="Roblox"
                                />
                            </div>
                            <div className="item-games">
                                <img
                                    lazyload=""
                                    src={gamelogo}
                                    data-src="../public/images/app_icon/ce1b385a2851a1adefbfee60db26350a.png"
                                    alt="Roblox"
                                    className="games-pic"
                                />
                                <div className="games-inf">
                                    <h3 className="games-inf-tit">Roblox</h3>
                                    <div className="games-inf-other">Adventure</div>
                                    <div className="games-inf-grade">

                                        <i className="icon-star icon-wh12 fa-solid fa-star" style={{ color: '#f9b700' }}></i>4.4
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="popgames-item">
                        <a href="/app/com.roblox.client/" className="popgames-con">
                            <div className="popgames-item-all">
                                <img
                                    lazyload=""
                                    className="popgames-item-pic"
                                    src={logo1}
                                    data-src="../public/header_image/p14rnplo42745op1pg2sk1117on1izwi.jpg"
                                    alt="Roblox"
                                />
                            </div>
                            <div className="item-games">
                                <img
                                    lazyload=""
                                    src={gamelogo}
                                    data-src="../public/images/app_icon/ce1b385a2851a1adefbfee60db26350a.png"
                                    alt="Roblox"
                                    className="games-pic"
                                />
                                <div className="games-inf">
                                    <h3 className="games-inf-tit">Roblox</h3>
                                    <div className="games-inf-other">Adventure</div>
                                    <div className="games-inf-grade">

                                        <i className="icon-star icon-wh12 fa-solid fa-star" style={{ color: '#f9b700' }}></i>4.4
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="popgames-item">
                        <a href="/app/com.roblox.client/" className="popgames-con">
                            <div className="popgames-item-all">
                                <img
                                    lazyload=""
                                    className="popgames-item-pic"
                                    src={logo1}
                                    data-src="../public/header_image/p14rnplo42745op1pg2sk1117on1izwi.jpg"
                                    alt="Roblox"
                                />
                            </div>
                            <div className="item-games">
                                <img
                                    lazyload=""
                                    src={gamelogo}
                                    data-src="../public/images/app_icon/ce1b385a2851a1adefbfee60db26350a.png"
                                    alt="Roblox"
                                    className="games-pic"
                                />
                                <div className="games-inf">
                                    <h3 className="games-inf-tit">Roblox</h3>
                                    <div className="games-inf-other">Adventure</div>
                                    <div className="games-inf-grade">

                                        <i className="icon-star icon-wh12 fa-solid fa-star" style={{ color: '#f9b700' }}></i>4.4
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="popgames-item">
                        <a href="/app/com.roblox.client/" className="popgames-con">
                            <div className="popgames-item-all">
                                <img
                                    lazyload=""
                                    className="popgames-item-pic"
                                    src={logo1}
                                    data-src="../public/header_image/p14rnplo42745op1pg2sk1117on1izwi.jpg"
                                    alt="Roblox"
                                />
                            </div>
                            <div className="item-games">
                                <img
                                    lazyload=""
                                    src={gamelogo}
                                    data-src="../public/images/app_icon/ce1b385a2851a1adefbfee60db26350a.png"
                                    alt="Roblox"
                                    className="games-pic"
                                />
                                <div className="games-inf">
                                    <h3 className="games-inf-tit">Roblox</h3>
                                    <div className="games-inf-other">Adventure</div>
                                    <div className="games-inf-grade">

                                        <i className="icon-star icon-wh12 fa-solid fa-star" style={{ color: '#f9b700' }}></i>4.4
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularGames
