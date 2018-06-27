//CORE Imports
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div id="home_container" className="container theme animated slideInDown" hidden={!(this.props.activePage === "home")}>
                <header className="page page--start">
                    <h1 className="page__title--start mainTitle product_sans">Vignesh Joglekar</h1>
                    <p className="page__subtitle--start mainSubtitle product_sans">Web Developer</p>
                </header>
            </div>
        );
    }
}