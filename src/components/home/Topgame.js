import React from 'react';
import applogo from '../../assets/gmail.jpg'
import banner01 from '../../assets/1@2x.jpg'
import banner02 from '../../assets/2@2x.jpg'
import banner03 from '../../assets/3@2x.jpg'
import banner04 from '../../assets/4@2x.jpg'


function Topgame() {
  return (
    <>
      <section className="top-apps top-blogs">
        <div className="popgames">
          {/* 0 */}
          <div className="popgames-item full-item">
            <a href="../blog/blog1.html" className="popgames-con">
              <div className="popgames-item-all">
                <img
                  lazyload=""
                  className="popgames-item-pic"
                  src={banner01}
                  data-src="../public/blog/1@2x.jpg"
                  alt="Best Entertainment Apps on Android"
                />
                <div className="item-shadow" />
                <div className="item-graduala" />
                <div className="item-games">
                  <div className="item-tag">Editor’s Choice</div>
                  <div className="games-inf">
                    <h3 className="games-inf-tit">
                      Best Entertainment Apps on Android
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* 1 */}
          <div className="popgames-item">
            <a href="../blog/blog2.html" className="popgames-con">
              <div className="popgames-item-all">
                <img
                  lazyload=""
                  className="popgames-item-pic"
                  src={banner02}
                  data-src="../public/blog/2@2x.jpg"
                  alt="Top Productivity Apps to Help You Work Smarter"
                />
                <div className="item-shadow" />
                <div className="item-graduala" />
                <div className="item-games">
                  <div className="games-inf">
                    <h3 className="games-inf-tit">
                      Top Productivity Apps to Help You Work Smarter
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* 2 */}
          <div className="popgames-item">
            <a href="../blog/blog3.html" className="popgames-con">
              <div className="popgames-item-all">
                <img
                  lazyload=""
                  className="popgames-item-pic"
                  src={banner03}
                  data-src="../public/blog/3@2x.jpg"
                  alt="4 Best Shopping Apps to Check Out This Season"
                />
                <div className="item-shadow" />
                <div className="item-graduala" />
                <div className="item-games">
                  <div className="games-inf">
                    <h3 className="games-inf-tit">
                      4 Best Shopping Apps to Check Out This Season
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* 3 */}
          <div className="popgames-item">
            <a href="../blog/blog4.html" className="popgames-con">
              <div className="popgames-item-all">
                <img
                  lazyload=""
                  className="popgames-item-pic"
                  src={banner04}
                  data-src="../public/blog/4@2x.jpg"
                  alt="Top Apps to Get Your Photos/Videos Done"
                />
                <div className="item-shadow" />
                <div className="item-graduala" />
                <div className="item-games">
                  <div className="games-inf">
                    <h3 className="games-inf-tit">
                      Top Apps to Get Your Photos/Videos Done
                    </h3>
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