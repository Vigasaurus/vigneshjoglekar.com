//CORE Imports
import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
            <div hidden={this.props.error}>
                <nav className="nav theme">
                    <a className="nav__link nav__link--start" id="logo" title="Home" onClick={() => this.props.changePage('home')}>
                        <img className="nav__logo" src={require('./img/logo/logo.png')} alt="Vignesh Joglekar" />
                    </a>
                    <ul className="nav__list">
                        <li className="nav__item" onClick={() => this.props.changePage('overview')}>
                            <a id="about_link" className="nav__link link product_sans" title="About Me">Overview</a>
                        </li>
                        <li className="nav__item" onClick={() => this.props.changePage('projects')}>
                            <a id="projects_link" className="nav__link link product_sans" title="My Projects">Projects</a>
                        </li>
                        {/* <li className="nav__item" onClick={() => this.props.changePage('orgs')}>
                            <a id="orgs_link" className="nav__link link product_sans " title="Organizations">Organizations</a>
                        </li> */}
                        <li className="nav__item" onClick={() => this.props.changePage('contact')}>
                            <a id="contact_link" className="nav__link link product_sans " title="Contact Me">Contact</a>
                        </li>
                    </ul>
                    <button className="nav__hamburger theme icon-menu" title="Open the Menu" onClick={() => this.props.menu('show')} />
                    <button className="nav__close-menu theme icon-cancel" title="Close the Menu" onClick={() => this.props.menu('hide')} />
                </nav>
            </div>
        );
    }
}
