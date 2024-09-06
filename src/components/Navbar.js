import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.webp';

const Navbar = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Function to handle screen width change
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setIsChecked(true);
            } else {
                setIsChecked(false);
            }
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Function to handle lazy loading of images
        const lazyLoadImages = () => {
            const viewHeight = window.innerHeight;
            const images = document.querySelectorAll("img[data-src][lazyload]");
            images.forEach((img) => {
                const rect = img.getBoundingClientRect();
                if (rect.bottom >= 0 && rect.top < viewHeight) {
                    const newImg = new Image();
                    newImg.src = img.dataset.src;
                    newImg.onload = () => {
                        img.src = newImg.src;
                    };
                    img.removeAttribute("data-src");
                    img.removeAttribute("lazyload");
                }
            });
        };

        // Initial lazy load check
        lazyLoadImages();

        // Function to handle header/footer visibility on scroll
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            if (window.innerWidth >= 601) {
                document.querySelector(".footer").style.display = "none";
            } else {
                document.querySelector(".footer").style.display = "block";
            }
            if (currentScrollPosition > scrollPosition) {
                document.querySelector(".header").style.top = "-70px";
                document.querySelector(".footer").style.bottom = "-100px";
            } else {
                document.querySelector(".header").style.top = "0px";
                document.querySelector(".footer").style.bottom = "0px";
            }
            setScrollPosition(currentScrollPosition);
        };

        // Attach event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', lazyLoadImages);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', lazyLoadImages);
        };
    }, [scrollPosition]);

    return (
        <header className="header">
            <div className="header-all layout-minbox">
                <a href="home_page.html" className="header-logobox">
                    <img
                        src={logo}
                        alt="Logo"
                        className="header-logobox-logo"
                    />
                </a>
                <a href="apps.html" className="header-app">
                    <div className="header-box">
                        <div className="header-icon">
                            <i className="icon-footer-apps fa-solid fa-cubes"></i>
                        </div>
                        <div className="header-text">Apps</div>
                    </div>
                </a>
                <a href="games.html" className="header-game">
                    <div className="header-box">
                        <div className="header-icon">
                            <i className="icon-footer-games fa-solid fa-puzzle-piece"></i>
                        </div>
                        <div className="header-text">Games</div>
                    </div>
                </a>
                <div className="header-searchall">
                    <input
                        type="checkbox"
                        id="header-search"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    <div className="header-search">
                        <form action="/search/" className="search-form">
                            <input
                                required
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
                    <label htmlFor="header-search" className="header-searchicon">
                        <i className="icon-search fa-solid fa-magnifying-glass serach mr-2"></i>
                    </label>
                    <label htmlFor="header-search" className="header-xicon">
                        <i className="icon-search fa-solid fa-solid fa-xmark"></i>
                    </label>
                    <div className="header-search-serp">
                        <form action="/search/" className="header-search-serp-form">
                            <input
                                required
                                autoComplete="off"
                                type="text"
                                placeholder="Search for apps & games"
                                name="q"
                                defaultValue=""
                                className="header-search-serp-input"
                            />
                            <button type="submit" className="header-search-serp-btn">
                                <i className="icon-search fa-solid fa-magnifying-glass serach mr-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
