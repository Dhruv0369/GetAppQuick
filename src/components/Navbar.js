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
