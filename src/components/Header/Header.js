import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeToggle:'Home'
        }

    }

    render() {

        const activeAnchor = {
            "color":"#111111"
        }

        return(
            <main className="header">
                <nav className="header-wrapper-mobile">
                    <ul className="header-mobile-navlist">
                        <li className="header-mobile-home">
                            <a className="hmh-anchor">
                                <svg
                                version="1.1" viewBox="0 0 32 32" width="22" height="22" aria-hidden="false">
                                    <path d="M0 17.1c0-1.3.5-2.6 1.4-3.6l13.2-12.9c.8-.8 3.1-.8 3.9 0l12.1 12.9c.9 1 1.4 2.3 1.4 3.6v13c0 1.1-.9 1.9-1.9 1.9h-8c-1.1 0-2-.9-2-2v-6.2c0-.9-.8-1.7-1.7-1.7h-4.6c-.9 0-1.7.8-1.7 1.7v6.2c0 1.2-.9 2.1-2.1 2.1h-8c-1.1-.1-2-1-2-2v-13z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="header-mobile-new">
                            <a className="hmn-anchor">
                                <svg version="1.1" viewBox="0 0 32 32" width="22" height="22" aria-hidden="false">
                                    <path d="M30 0h-28c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-28c0-1.1-.9-2-2-2zm-2 19.2l-5.3-7.3c-.4-.4-1-.4-1.4 0l-7.3 9.3-3.3-5.3c-.4-.4-1-.4-1.4 0l-5.3 7.3v-19.2h24v15.2z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="header-mobile-collections">
                            <a className="hmc-anchor">
                                <svg version="1.1" viewBox="0 0 32 32" width="22" height="22" aria-hidden="false">
                                    <path d="M29 6h-26c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h26c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm-2-6h-22c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm-27 13v18c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-18c0-.6-.4-1-1-1h-30c-.6 0-1 .4-1 1zm22 11h-12c-1.1 0-2-.9-2-2v-5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v5c0 1.1-.9 2-2 2z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="header-mobile-search">
                            <a className="hms-anchor">
                                <svg version="1.1" viewBox="0 0 32 32" width="22" height="22" aria-hidden="false">
                                    <path d="M31.4 28.6l-6.2-6.2c1.8-2.3 2.8-5.2 2.8-8.4 0-7.7-6.3-14-14-14s-14 6.3-14 14 6.3 14 14 14c3.1 0 6-1.1 8.4-2.8l6.2 6.2c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zm-17.4-4.6c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav className="header-wrapper">
                    <div className="header-left-search">
                        <div className="logo-header">
                            <a href="/">
                                <svg viewBox="0,0,32,32" width="32" height="32">
                                    <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="search-header-wrapper">
                            <form className="search-header">
                                <input className="search-header-input" tabIndex="1" placeholder="Search free high-resolution photos" />
                                <button className="search-header-button">
                                    <svg className="search-header-svg" viewBox="0 0 32 32" width="16" height="16" aria-hidden="false">
                                        <path fill="#999999" d="M31.4 28.6l-6.2-6.2c1.8-2.3 2.8-5.2 2.8-8.4 0-7.7-6.3-14-14-14s-14 6.3-14 14 6.3 14 14 14c3.1 0 6-1.1 8.4-2.8l6.2 6.2c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zm-17.4-4.6c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="header-menu-wrapper">
                        <ul className="header-menu-list-wrapper">
                            <li className="header-menu-list-item">
                                <a className="header-menu-list-anchor" href="#" style={this.state.activeToggle === 'Home' ? activeAnchor : null}>
                                    Home
                                </a>
                            </li>
                            <li className="header-menu-list-item">
                                <a className="header-menu-list-anchor" href="#">
                                    Collections
                                </a>
                            </li>
                            <li className="header-menu-list-item">
                                <a className="header-menu-list-anchor" href="#">
                                    About
                                </a>
                            </li>
                            <li className="header-menu-list-drop">
                                    <button className="header-menu-list-drop-button">
                                        <svg className="header-menu-dot-svg" version="1.1" viewBox="0 0 32 32" width="32" height="32" aria-hidden="false">
                                            <path d="M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"></path>
                                        </svg>
                                    </button>
                            </li>
                        </ul>
                    </div>
                    <div className="header-login-wrapper">
                        <div>
                            <a className="header-login-anchor" href="#">
                                <div className="header-login-left-divider"></div>
                                Login
                            </a>
                            <a className="header-signup-anchor" href="#">
                                Join free
                            </a>
                        </div>
                    </div>
                </nav>
            </main>
        )
    }
}

export default Header;