import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';

import './style.css';

class MyComponent extends Component {

     

    render() {
    return (
    
             <div className="header-area bg-transparent ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid p-2">
                    <div className="row align-items-center no-gutters">
                        <div className="col-xl-7 col-lg-7">
                            <div className="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a className="active" href="index.html">home</a></li>
                                        <li><a href="Menu.html">Menu</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="single-blog.html">single-blog</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages <i className="ti-angle-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="elements.html">elements</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                            <div className="book_room">
                                {/* <div>
                                    <ul>
                                    <i className="fa fa-facebook"> </i>
                                    </ul>
                                </div> */}
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="book_btn d-none d-xl-block">
                                    <a className="#" href="#">+92 345-0209493</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>

        
    
    );
  }
}


export default MyComponent;
