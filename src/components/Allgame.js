import React from 'react'

const Allgame = () => {
  return (
    <>

{/* Header */}

  <header className="header">
    <div className="header-all layout-minbox">
      <a href="home_page.html" className="header-logobox">
        <img
          src="../public/images/apknode-logo.png"
          alt=""
          className="header-logobox-logo"
        />
      </a>
      <a href="apps.html" className="header-app">
        <div className="header-box">
          <div className="header-icon">
            <svg className="icon-footer-apps">
              <use xlinkHref="#icon-apps" />
            </svg>
          </div>
          <div className="header-text">Apps</div>
        </div>
      </a>
      <a href="games.html" className="header-game">
        <div className="header-box">
          <div className="header-icon">
            <svg className="icon-footer-games">
              <use xlinkHref="#icon-games" />
            </svg>
          </div>
          <div className="header-text">Games</div>
        </div>
      </a>
      <a href="topics.html" className="header-topics">
        <div className="header-box">
          <div className="header-icon">
            <svg className="icon-footer-topics">
              <use xlinkHref="#icon-topics" />
            </svg>
          </div>
          <div className="header-text">Topics</div>
        </div>
      </a>
      <div className="header-searchall">
        <input type="checkbox" id="header-search" />
        <label htmlFor="header-search" className="header-searchicon">
          <svg className="icon-search">
            <use xlinkHref="#icon-go-search" />
          </svg>
        </label>
        <label htmlFor="header-search" className="header-xicon">
          <svg className="icon-search">
            <use xlinkHref="#icon-x" />
          </svg>
        </label>
        <div className="header-search">
          <form action="/search/" className="search-form">
            <input
              required=""
              autoComplete="off"
              id="searchInput"
              type="text"
              placeholder="Search for apps & games"
              name="q"
              defaultValue=""
              className="header-searchtext"
            />
          </form>
        </div>
        <div className="header-search-serp">
          <form action="/search/" className="header-search-serp-form">
            <input
              required=""
              autoComplete="off"
              type="text"
              placeholder="Search for apps & games"
              name="q"
              defaultValue=""
              className="header-search-serp-input"
            />
            <button type="submit" className="header-search-serp-btn">
              <svg className="icon-search">
                <use xlinkHref="#icon-go-search" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>

  <div id="topanchor" />
  <div className="home">
    <div className="layout-maxbox">

{/* Best Entertainment Apps on Android */}

      <section className="top-apps top-blogs">
        <div className="popgames">
          {/* 0 */}
          <div className="popgames-item full-item">
            <a href="../blog/blog1.html" className="popgames-con">
              <div className="popgames-item-all">
                <img
                  lazyload=""
                  className="popgames-item-pic"
                  src="../public/blog/1@2x.jpg"
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
                  src="../public/blog/2@2x.jpg"
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
                  src="../public/blog/3@2x.jpg"
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
                  src="../public/blog/4@2x.jpg"
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

{/* Popular Apps */}

      <section className="home-popapps">
        <h2 className="layout-mintit">Popular Apps</h2>
        <div className="layout-apps">
          <div className="layout-apps-item">
            <a href="apk_detail.html" className="layout-apps-con">
              <div className="layout-place">
                <img
                  lazyload=""
                  src="../public/images-icon/errorimg.svg"
                  data-src="../public/images/app_icon/d97ecfb1c99c428ec0a208ed218c9ea1.png"
                  alt="Logo Master - Design & Maker"
                  className="layout-apps-item-pic"
                />
              </div>
              <h3 className="layout-apps-item-name">
                Logo Master - Design &amp; Maker
              </h3>
              <div className="layout-apps-item-cate">Art</div>
              <div className="layout-apps-item-grade">
                <svg className="icon-star icon-wh12">
                  <use xlinkHref="#icon-star" />
                </svg>
                4.8
              </div>
            </a>
          </div>
        </div>
      </section>

{/* Popular Games */}

      <section className="home-popgames">
        <h2 className="layout-mintit">Popular Games</h2>
        <div className="popgames">
          <div className="popgames-item">
            <a href="/app/com.roblox.client/" className="popgames-con">
              <div className="popgames-item-all">
                <img
                  lazyload=""
                  className="popgames-item-pic"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  data-src="../public/header_image/p14rnplo42745op1pg2sk1117on1izwi.jpg"
                  alt="Roblox"
                />
              </div>
              <div className="item-games">
                <img
                  lazyload=""
                  src="../public/images-icon/errorimg.svg"
                  data-src="../public/images/app_icon/ce1b385a2851a1adefbfee60db26350a.png"
                  alt="Roblox"
                  className="games-pic"
                />
                <div className="games-inf">
                  <h3 className="games-inf-tit">Roblox</h3>
                  <div className="games-inf-other">Adventure</div>
                  <div className="games-inf-grade">
                    <svg className="icon-star icon-wh12">
                      <use xlinkHref="#icon-star" />
                    </svg>
                    4.4
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

{/* Top Free Apps */}

      <section className="home-topfree">
        <h2 className="layout-mintit">
          Top Free Apps
          <a href="ranking_apps.html" className="layout-mintit-more">
            View More
            <svg className="icon-right">
              <use xlinkHref="#icon-right" />
              <use className="active" xlinkHref="#icon-right-active" />
            </svg>
          </a>
        </h2>
        <div className="topfree">
          <div className="layout-topfree-item">
            <a href="/app/com.adobe.spark.post/" className="layout-topfree-con">
              <img
                lazyload=""
                src="../public/images-icon/errorimg.svg"
                data-src="../public/images/app_icon/a6f25081839f9deee2242f2a322a598a.png"
                alt="Adobe Express: Graphic Design"
                className="layout-topfree-item-pic"
              />
              <div className="layout-topfree-item-inf">
                <h3 className="layout-topfree-item-inf-name">
                  Adobe Express: Graphic Design
                </h3>
                <div className="layout-topfree-item-inf-other">Art</div>
                <div className="layout-topfree-item-inf-grade">
                  <svg className="icon-star icon-wh12">
                    <use xlinkHref="#icon-star" />
                  </svg>
                  4.6
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

{/* Top Free Games */}

      <section className="home-topfree">
        <h2 className="layout-mintit">
          Top Free Games
          <a href="/rankings-games/" className="layout-mintit-more">
            View More
            <svg className="icon-right">
              <use xlinkHref="#icon-right" />
              <use className="active" xlinkHref="#icon-right-active" />
            </svg>
          </a>
        </h2>
        <div className="topfree">
          <div className="layout-topfree-item">
            <a
              href="/app/com.xgame.rainbow.friends.challenge/"
              className="layout-topfree-con"
            >
              <img
                lazyload=""
                src="../public/images-icon/errorimg.svg"
                data-src="../public/images/app_icon/021dee9ca239b2a11b09badf2ce77fd4.jpg"
                alt="Blue Monster: Rainbow Survival"
                className="layout-topfree-item-pic"
              />
              <div className="layout-topfree-item-inf">
                <h3 className="layout-topfree-item-inf-name">
                  Blue Monster: Rainbow Survival
                </h3>
                <div className="layout-topfree-item-inf-other">Action</div>
                <div className="layout-topfree-item-inf-grade">
                  <svg className="icon-star icon-wh12">
                    <use xlinkHref="#icon-star" />
                  </svg>
                  4.3
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

{/* Footer */}

      <section className="aboutus">
        <h2 className="aboutus-logobox">
          <img
            src="../public/images/apknode-logo.png"
            alt=""
            className="aboutus-logobox-logo"
          />
        </h2>
        <div className="aboutus-pages">
          <a href="/about-us/" className="aboutus-pages-item">
            About Us
          </a>
          <a href="/privacy-policy/" className="aboutus-pages-item">
            Privacy Policy
          </a>
          <a href="/terms-of-service/" className="aboutus-pages-item">
            Terms of Service
          </a>
          <a href="/contact-us/" className="aboutus-pages-item">
            Contact Us
          </a>
          <a href="/disclaimer/" className="aboutus-pages-item">
            Disclaimer
          </a>
        </div>
        <div className="aboutus-other">
          Copyright © 2023 Apknode.net. All Rights Reserved.
        </div>
        <a href="#topanchor" className="aboutus-topanchor">
          <svg className="icon-top icon-wh20">
            <use xlinkHref="#icon-top" />
          </svg>
          &nbsp; BACK TO TOP
        </a>
      </section>

    </div>
  </div>

{/* Footer Mobile */}

  <footer className="footer">
    <a href="apps.html" className="footer-item">
      <svg className="icon-footer-apps">
        <use xlinkHref="#icon-apps" />
      </svg>
      <br />
      Apps
    </a>
    <a href="games.html" className="footer-item">
      <svg className="icon-footer-games">
        <use xlinkHref="#icon-games" />
      </svg>
      <br />
      Games
    </a>
    <a href="/topics/" className="footer-item">
      <svg className="icon-footer-topics">
        <use xlinkHref="#icon-topics" />
      </svg>
      <div className="topics-bs" />
      <br />
      Topics
    </a>
  </footer>
</>

  )
}

export default Allgame
