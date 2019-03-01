//CORE Imports
import React, { Component } from 'react';

export default class Overview extends Component {
    render() {
        return (
            <div id="overview_container" className="container theme animated slideInDown">
                <div className="page page--about">
                    <h2 className="page__title aboutTitle product_sans">My name is Vignesh Joglekar</h2>
                    <p className="page__description product_sans">I am an 18 year old Front-End Developer from Coppell, Texas. I am enrolled in Texas A&M Bachelor of Science in Computer Science, Class of '22. I've been interested and drawn to websites and applications and their development for years. Over the past 4 years I have focused on learning through projects. I always felt that it was easier to learn through doing as opposed to watching. I originally only recreated basic games with new programming languages I was learning at the time, now I focus on making interactive and easily-navigable websites with user usability as my top priority. I prefer to work in a team to create minimalistic, yet feature and user-friendly websites and web-based applications. </p>

                    <div className="skillsWrapper">
                        <div className="skillsUsing">
                            <p className="page__subtitle skillsSubtitle product_sans">I am currently using: </p>
                            <ul className="skills">
                                {/*HTML5*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-html5-plain colored"/>
                                    <p className="skills__text product_sans">HTML5</p>
                                </li>
                                {/*CSS3*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-css3-plain colored"/>
                                    <p className="skills__text product_sans">CSS3</p>
                                </li>
                                {/*JS ES6*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-javascript-plain colored"/>
                                    <p className="skills__text product_sans">JS ES6</p>
                                </li>
                                {/*React*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-react-original colored"/>
                                    <p className="skills__text product_sans">React.js</p>
                                </li>
                                {/*Node*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-nodejs-plain colored"/>
                                    <p className="skills__text product_sans">Node.js</p>
                                </li>
                                {/*jQuery*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-jquery-plain colored"/>
                                    <p className="skills__text product_sans">jQuery</p>
                                </li>
                                {/*Github*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-github-plain colored"/>
                                    <p className="skills__text product_sans">GitHub</p>
                                </li>
                                {/*Travis*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-travis-plain colored"/>
                                    <p className="skills__text product_sans">Travis CI</p>
                                </li>
                                {/*Webpack*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-webpack-plain colored"/>
                                    <p className="skills__text product_sans">WebPack</p>
                                </li>
                                {/*Bootstrap*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-bootstrap-plain colored"/>
                                    <p className="skills__text product_sans">Bootstrap</p>
                                </li>
                            </ul>

                        </div>

                        <div className="skillsLearning">
                            <p className="page__subtitle product_sans">I am currently learning: </p>
                            <ul className="skills">
                                {/*Express*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-express-original"/>
                                    <p className="skills__text product_sans">Express</p>
                                </li>
                                {/*Angular*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-angularjs-plain colored"/>
                                    <p className="skills__text product_sans">Angular.js</p>
                                </li>
                                {/*Gulp*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-gulp-plain colored"/>
                                    <p className="skills__text product_sans">Gulp</p>
                                </li>
                                {/*Vue*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-vuejs-plain colored"/>
                                    <p className="skills__text product_sans">Vue.js</p>
                                </li>
                                {/*AWS*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-amazonwebservices-original colored"/>
                                    <p className="skills__text product_sans">AWS</p>
                                </li>
                                {/*Sass*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-sass-plain colored"/>
                                    <p className="skills__text product_sans">Sass</p>
                                </li>
                                {/*Mongo*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-mongodb-plain colored"/>
                                    <p className="skills__text product_sans">MongoDB</p>
                                </li>
                                {/*Docker*/}
                                <li className="skills__skill">
                                    <span className="devicons devicon-docker-plain colored"/>
                                    <p className="skills__text product_sans">Docker</p>
                                </li>


                            </ul>

                        </div>
                    </div>


                </div>
            </div>
        );
    }
}