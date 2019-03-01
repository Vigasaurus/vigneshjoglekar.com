//CORE Imports
import React, { Component } from 'react';


export default class Organizations extends Component {
    render() {
        return (
            <div id="orgs_container" className="container theme animated slideInDown">
                <div className="page page--about">
                    <h2 className="page__title product_sans">Organizations</h2>
                    <p className="page__description product_sans">For nearly all of my projects  I've worked alone or with only a group of 2 or 3 developers. Recently I delved into the world of open-source projects and organizations. Below are some organizations I contribute to and participate in in, both in a minor and major way. All contributions I've made can be seen on the respective Github pages for the organizations. </p>

                    <div className="orgsWrapper">
                        <div className="orgsMajor">
                            <p className="page__subtitle product_sans">Major Contributions:</p>
                            <ul className="orgs">
                                <li className="orgs__org">
                                    <a className="orgs__link" href="https://github.com/OpenApprenticeFoundation/" title="Go To Organization's Github Page">
                                        <img className="org__image" src={require('./img/orgLogos/oA.png')} alt="oA Logo"/>
                                        <p className="orgs__text product_sans">OpenApprentice<br/>Foundation</p>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="orgsMinor">
                            <p className="page__subtitle product_sans">Minor Contributions: </p>
                            <ul className="orgs">
                                <li className="orgs__org">
                                    <a className="orgs__link" href="https://github.com/ml5js/" title="Go To Organization's Github Page">
                                        <img className="org__image" src={require('./img/orgLogos/ml5.png')} alt="ML5.JS Logo"/>
                                        <p className="orgs__text product_sans">ml5.js</p>
                                    </a>
                                </li>
                                <li className="orgs__org">
                                    <a className="orgs__link" href="https://github.com/sugarlabs/" title="Go To Organization's Github Page">
                                        <img className="org__image" src={require('./img/orgLogos/sugar.png')} alt="Sugar Labs Logo"/>
                                        <p className="orgs__text product_sans">Sugar Labs</p>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}