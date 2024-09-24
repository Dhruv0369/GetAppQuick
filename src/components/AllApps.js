import React from 'react'
import applogo from '../assets/Telegram.png'
import art from '../assets/Imagesvg/art.svg'
import otherbanner from '../assets/otherpage-banner.png'
import '../App.css'
// import '../apknode.net.css'
const AllApps = () => {
    return (
        <>
            <div id="topanchor"></div>
            <div class="categories-all">
                <section className="layout-otherheader">
                    <div className="layout-otherheader-glass"></div>
                    <img className="layout-otherheader-pcback" src={otherbanner} alt="" />
                    <div className="layout-middlebox">
                        <div className="layout-otherheader-tit">
                            <h1 className="layout-otherheader-tit-tit">Apps</h1>
                        </div>
                    </div>
                </section>
                <div className="layout-middlebox">
                    <div id="allcat" className="allcat">
                        <div className="allcat-item">
                            <div className="cat-item">
                                <a href="/apps/art/" className="cat-con">
                                    <div className="item-pic">
                                        <img
                                            lazyload=""
                                            src="../public/images-icon/errorimg.svg"
                                            data-src={art}
                                            alt="Art"
                                            className="icon-other"
                                        />
                                    </div>
                                    <h2 className="item-name">Art </h2>
                                </a>
                            </div>
                            <div className="pcpart pcitem">
                                <div className="cat-apps-item">
                                    <a href="/app/com.aimlet.kids.arts/" className="cat-apps-con">
                                        <div className="layout-place">
                                            <img
                                                src={applogo}
                                                alt="Kids Arts"
                                                className="layout-apps-item-pic"
                                            />
                                        </div>
                                        <h3 className="layout-apps-item-name">Kids Arts</h3>
                                        <div className="layout-apps-item-grade">
                                        <i className="icon-star icon-wh12 fa-solid fa-star" style={{ color: '#252c4d99' }}></i>
                                            3.8
                                        </div>
                                    </a>
                                </div>
                                <div className="cat-apps-item">
                                    <a href="/app/com.aimlet.kids.arts/" className="cat-apps-con">
                                        <div className="layout-place">
                                            <img
                                                src={applogo}
                                                alt="Kids Arts"
                                                className="layout-apps-item-pic"
                                            />
                                        </div>
                                        <h3 className="layout-apps-item-name">Kids Arts</h3>
                                        <div className="layout-apps-item-grade">
                                        <i className="icon-star icon-wh12 fa-solid fa-star" style={{ color: '#252c4d99' }}></i>
                                            3.8
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default AllApps
