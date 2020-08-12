//CORE Imports
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div id="home_container" className="container theme animated slideInDown">
                <header className="page page--start">
                    <img src={require('./img/final.png')} className="hero" alt="Profile Image" />
                    <h1 className="page__title--start mainTitle product_sans">Vignesh Joglekar</h1>
                    <p className="page__subtitle--start mainSubtitle product_sans">Full-Stack Web Developer</p>
                </header>
            </div>
        );
    }
}
