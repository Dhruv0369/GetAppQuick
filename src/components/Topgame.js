import React from 'react';
import applogo from '../assets/gmail.jpg'
import banner01 from '../assets/1@2x.jpg'
import banner02 from '../assets/2@2x.jpg'
import banner03 from '../assets/3@2x.jpg'
import banner04 from '../assets/4@2x.jpg'

function Topgame() {
  return (
    <>
<section className="top-apps top-blogs">
            <div className="popgames">
        <div className="popgames-item full-item">
            <a href="web/category/Mjc%3d.html" className="popgames-con">
                <div className="popgames-item-all">
                    <img lazyload className="popgames-item-pic"
                    src={banner01}
                    data-src="blog/1@2x.jpg"
                    alt="Best Entertainment Apps on Android" />
                    <div className="item-shadow"></div>
                    <div className="item-graduala"></div>
                    <div className="item-games">
                        <div className="item-tag">Editor’s Choice</div>
                        <div className="games-inf">
                            <h3 className="games-inf-tit">Best Entertainment Apps on Android</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        
        <div className="popgames-item">
            <a href="web/category/NDI%3d.html" className="popgames-con">
                <div className="popgames-item-all">
                    <img lazyload className="popgames-item-pic"
                    src={banner02}
                    data-src="blog/2@2x.jpg"
                    alt="Top Productivity Apps to Help You Work Smarter" />
                    <div className="item-shadow"></div>
                    <div className="item-graduala"></div>
                    <div className="item-games">
                        <div className="games-inf">
                            <h3 className="games-inf-tit">Top Productivity Apps to Help You Work Smarter
                            </h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <div className="popgames-item">
            <a href="web/category/NDM%3d.html" className="popgames-con">
                <div className="popgames-item-all">
                    <img lazyload className="popgames-item-pic"
                    src={banner03}
                    data-src="blog/3@2x.jpg"
                    alt="4 Best Shopping Apps to Check Out This Season" />
                    <div className="item-shadow"></div>
                    <div className="item-graduala"></div>
                    <div className="item-games">
                        <div className="games-inf">
                            <h3 className="games-inf-tit">4 Best Shopping Apps to Check Out This Season</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        
        <div className="popgames-item">
            <a href="web/category/NDE%3d.html" className="popgames-con">
                <div className="popgames-item-all">
                    <img lazyload className="popgames-item-pic"
                    src={banner04}
                    data-src="blog/4@2x.jpg"
                    alt="Top Apps to Get Your Photos/Videos Done" />
                    <div className="item-shadow"></div>
                    <div className="item-graduala"></div>
                    <div className="item-games">
                        <div className="games-inf">
                            <h3 className="games-inf-tit">Top Apps to Get Your Photos/Videos Done</h3>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</section>

    </>
  );
}
export default Topgame;