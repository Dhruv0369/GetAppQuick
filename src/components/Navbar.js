import React from 'react'
import logo from '../assets/logo.webp'

const Navbar = () => {
    return (
        <div className='shadow-sm'>
            <nav className="navbar navbar-expand-lg mx-auto shadow-sm" style={{ width: '63%', backgroundColor: 'white' }}>

                <img src={logo} className='mr-3' alt="Get App Quick" style={{ height: '30px', width: '200px', fontWeight: 'bold' }} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex align-items-center" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Games</a>
                        </li>
                    </ul>
                    <div className="ml-auto ">
                        <div className="input-group border-0 " style={{ maxWidth: '24rem', width: '100%'}}>
                            <span className="input-group-text bg-white inputsize" id="basic-addon1" style={{ borderRadius: '25px' ,border: '2px solid #252c4d'}}>
                                <i className="fa-solid fa-magnifying-glass serach mr-2"></i>&nbsp;
                                <input
                                    type="text"
                                    className="border-0 p-1 inputcolor "
                                    placeholder="Search for apps & games"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                    style={{ outline: 'none', boxShadow: 'none', fontSize: '0.9rem' }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


// import React from 'react'
// import logo from '../assets/logo.webp'

// const Navbar = () => {
//     return (
//         <header className="header">
//         <div className="header-all layout-minbox flex items-center">
//           <a href="index.html" className="header-logobox">
//             <img src={logo} alt="get-app-quick" className="header-logobox-logo" />
//           </a>
//           <a href="web/all-apps.html" className="header-app flex items-center">
//             <div className="header-box flex items-center">
              
//               <div className="header-text">Apps</div>
//             </div>
//           </a>
//           <a href="web/all-games.html" className="header-game flex items-center">
//             <div className="header-box flex items-center">
             
//               <div className="header-text">Games</div>
//             </div>
//           </a>
//           <a href="javascript:;" className="header-topics" style={{ display: 'none' }}>
//             <div className="header-box flex items-center">
             
//               <div className="header-text">Topics</div>
//             </div>
//           </a>
//           <div className="header-searchall flex items-center relative">
//             <input type="checkbox" id="header-search" className="hidden" />
//             <label htmlFor="header-search" className="header-searchicon">
//             <i className="fa-solid fa-magnifying-glass serach mr-2"></i>
//             </label>
//             <div className="header-search absolute bg-white border border-gray-300 rounded-md p-2 hidden">
//               <input
//                 required
//                 autoComplete="off"
//                 id="searchInput"
//                 type="text"
//                 placeholder="Search for apps &amp; games"
//                 name="q"
//                 className="header-searchtext border-none p-2 rounded-md"
//               />
//               <div id="autocomplete-results" className="mt-2">
//                 {/* Add a container for the suggestions below the input field */}
//               </div>
//             </div>
//             <div className="header-search-serp">
//               <form
//                 action="https://getappsquick.us/search/"
//                 className="header-search-serp-form flex items-center"
//               >
//                 <input
//                   required
//                   autoComplete="off"
//                   type="text"
//                   placeholder="Search for apps &amp; games"
//                   name="q"
//                   className="header-search-serp-input border-none p-2 rounded-md"
//                 />
//                 <button type="submit" className="header-search-serp-btn ml-2 p-2 bg-blue-500 text-white rounded-md">
//                   <svg className="icon-search">
//                     <use xlinkHref="#icon-go-search" />
//                   </svg>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </header>
//     )
// }

// export default Navbar