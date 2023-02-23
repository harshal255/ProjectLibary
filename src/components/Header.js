import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
    const onsubmit=()=>{
        window.location.reload(true);
    }
   



    return (
        <div>
            <nav id="topnav" className="defaultscroll is-sticky bg-white header">
                <div className="container flex justify-between ">

                    <Link className="logo" to="/">
                        <img src={process.env.PUBLIC_URL + '/textlogo.png' } alt="Peoject Library" className='w-48 my-5' />
                    </Link>


                    {/* <div className="menu-extras">
                        <div className="menu-item">

                            <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>

                        </div>
                    </div> */}

                    <div id="navigation">

                        <ul className="navigation-menu ">
                            <li><Link to="/" className="sub-menu-item" >Home</Link></li>
                            {/* <li><Link to="/notfound" className="sub-menu-item">Project Not Found</Link></li> */}

                            <li><Link to="/allprojects"  className="sub-menu-item">All Projects</Link></li>


                            <li className="has-submenu parent-parent-menu-item">
                                <a className="cursor-pointer" >Year</a>
                                {/* <span className="menu-arrow "></span> */}

                                <ul className="submenu">
                                    <li><Link to={`/yearwiseallprojects/2019-2020`} className="sub-menu-item"> 2019-20</Link></li>
                                    <li><Link to={`/yearwiseallprojects/2020-2021`} className="sub-menu-item">2020-21</Link></li>

                                </ul>
                            </li>
                            <li className="has-submenu parent-parent-menu-item">
                                <a className="cursor-pointer">Guide</a>
                                {/* <span className="menu-arrow "></span> */}
                                <ul className="submenu">


                                    <li><Link to="/guidewiseallprojects/bhavesh oza" className="sub-menu-item">Prof Bhavesh Oza</Link></li>
                                    <li><Link to="/guidewiseallprojects/hetal pandya" className="sub-menu-item">Prof Hetal Pandya</Link></li>
                                    <li><Link to="/guidewiseallprojects/hetal joshiyara" className="sub-menu-item">Prof Hetal joshiyara</Link></li>
                                    <li><Link to="/guidewiseallprojects/hetal ghevariya" className="sub-menu-item">Prof Hetal Gevariya</Link></li>
                                    <li><Link to="/guidewiseallprojects/hitesh rajpoot" className="sub-menu-item">Prof Hitesh Rajpoot</Link></li>
                                    <li><Link to="/guidewiseallprojects/jay dave" className="sub-menu-item">Prof Jay Dave</Link></li>
                                    <li><Link to="/guidewiseallprojects/kalpesh patel" className="sub-menu-item">Prof Kalpesh Patel</Link></li>
                                    <li><Link to="/guidewiseallprojects/maitrik shah" className="sub-menu-item">Prof Maitrik Shah</Link></li>
                                    <li><Link to="/guidewiseallprojects/tushar champaneria" className="sub-menu-item">Prof Tushar Champaneria</Link></li>
                                    <li><Link to="/guidewiseallprojects/nikunj domadiya" className="sub-menu-item">Prof Nikunj Domadiya</Link></li>
                                    <li><Link to="/guidewiseallprojects/pragnesh patel" className="sub-menu-item">Prof Pragnesh Patel</Link></li>
                                    <li><Link to="/guidewiseallprojects/pinal salot" className="sub-menu-item">Prof Pinal Salot</Link></li>
                                    <li><Link to="/guidewiseallprojects/parth dave" className="sub-menu-item">Prof Parth Dave</Link></li>
                                    <li><Link href="/guidewiseallprojects/dutta mam" className="sub-menu-item">POOJA Dutta Mam</Link></li>
                                    <li><Link to="/guidewiseallprojects/rjayswal" className="sub-menu-item">Prof R. Jayswal</Link></li>
                                    <li><Link to="/guidewiseallprojects/yogesh patel" className="sub-menu-item">Prof Yogesh Patel</Link></li>
                                </ul>

                            </li>

                            <li className="has-submenu parent-parent-menu-item">

                                <a className="cursor-pointer">Project Area</a>
                                {/* <span className="menu-arrow "></span> */}
                                <ul className="submenu">


                                    <li><Link to="/areawiseallprojects/application" className="sub-menu-item">Application</Link></li>
                                    <li><Link to="/areawiseallprojects/application software" className="sub-menu-item">Application Software</Link></li>
                                    <li><Link to="/areawiseallprojects/computer vision" className="sub-menu-item">Computer Vision</Link></li>
                                    <li><Link to="/areawiseallprojects/data science" className="sub-menu-item">Data Science</Link></li>
                                    <li><Link to="/areawiseallprojects/data mining " className="sub-menu-item">Data Mining</Link></li>
                                    <li><Link to="/areawiseallprojects/desktop application" className="sub-menu-item">Desktop Application</Link></li>
                                    <li><Link to="/areawiseallprojects/holographic technology" className="sub-menu-item">Holographic Technology</Link></li>
                                    <li><Link to="/areawiseallprojects/Image Processing using AI" className="sub-menu-item">Image Processing using AI</Link></li>
                                    <li><Link to="/areawiseallprojects/iot" className="sub-menu-item">IOT</Link></li>
                                    <li><Link to="/areawiseallprojects/mobile app" className="sub-menu-item">Mobile App</Link></li>
                                    <li><Link to="/areawiseallprojects/natural language processing" className="sub-menu-item">Natural Language Processing</Link></li>
                                    <li><Link to="/areawiseallprojects/network security" className="sub-menu-item">Network Security</Link></li>
                                    <li><Link to="/areawiseallprojects/portal" className="sub-menu-item">Portal</Link></li>
                                    <li><Link to="/areawiseallprojects/software" className="sub-menu-item">Software</Link></li>
                                    <li><Link to="/areawiseallprojects/website" className="sub-menu-item">Website</Link></li>
                                </ul>
                            </li>

                            <li className="">
                                <Link to="/about">About</Link>
                                {/* <span className="menu-arrow "></span> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




        </div>
    )
}

export default Header