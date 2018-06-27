//CORE Imports
import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        let logo = this.props.text;
        return (
            <div>
                <nav className="nav theme">
                    <a className="nav__link nav__link--start" id="logo" title="Home">
                        <img className="nav__logo" src={"https://vigneshjoglekar.com/static" + logo} alt="Vignesh Joglekar" />
                    </a>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a id="about" className="nav__link link product_sans" title="About Me">About</a>
                        </li>
                        <li className="nav__item">
                            <a id="projects" className="nav__link link product_sans" title="My Projects">Projects</a>
                        </li>
                        <li className="nav__item">
                            <a id="orgs" className="nav__link link product_sans " title="Organizations">Organizations</a>
                        </li>
                        <li className="nav__item">
                            <a id="contact" className="nav__link link product_sans " title="Contact Me">Contact</a>
                        </li>
                    </ul>
                    <button className="nav__hamburger theme icon-menu" title="Open the Menu" />
                    <button className="nav__close-menu theme icon-cancel" title="Close the Menu" />
                </nav>
            </div>
        );
    }
}
