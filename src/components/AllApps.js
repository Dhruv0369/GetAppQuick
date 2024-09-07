import React from 'react'
import applogo from '../assets/Telegram.png'
import art from '../assets/Imagesvg/art.svg'
import asc from '../assets/Imagesvg/errorimg.svg'
const AllApps = () => {
    return (
        <>
            <div className="layout-middlebox">
                <div id="allcat" className="allcat">
                    <div className="allcat-item">
                        <div className="cat-item">
                            <a href="/apps/art/" className="cat-con">
                                <div className="item-pic">
                                    <img
                                        lazyload=""
                                        src={art}
                                        data-src="/public/static/images-icon/cat-icon/housing.svg"
                                        alt="Housing"
                                        className="icon-other"
                                    />
                                </div>
                                <h2 className="item-name">Housing </h2>
                            </a>
                        </div>
                        <div className="pcpart pcitem">
                            <div className="cat-apps-item">
                                <a href="/app/com.zillow.android.zillowmap/" className="cat-apps-con">
                                    <div className="layout-place">
                                        <img
                                            src={applogo}
                                            alt="Zillow: Homes For Sale & Rent"
                                            className="layout-apps-item-pic"
                                        />
                                    </div>
                                    <h3 className="layout-apps-item-name">
                                        Zillow: Homes For Sale &amp; Rent
                                    </h3>
                                    <div className="layout-apps-item-grade">
                                        <i className="icon-star icon-wh12 fa-solid fa-star" style={{ color: '#f9b700' }}></i>
                                        4.7
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllApps
