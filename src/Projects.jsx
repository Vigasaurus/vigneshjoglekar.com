//CORE Imports
import React, { Component } from 'react';

//JS Imports
import Siema from 'siema';

let mySiemaWithDots, slideIndex;

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.createSiema = this.createSiema.bind(this);
    }

    createSiema() {
        // Projects elements
        let projectsLinks = document.querySelectorAll(".projects__link");
        let prev = document.querySelector(".projects__prev");
        let next = document.querySelector(".projects__next");
        document.querySelector("#projects").style.display = 'flex';

        //Siema settings
        class mySiema extends Siema {
            // Create dots for all slides
            addDots() {
                this.dots = document.createElement("div");
                this.dots.classList.add("projects__dots");
                this.dots.id = "project_dots";
                for (let i = 0; i < this.innerElements.length; i++) {
                    let dot = document.createElement("span");
                    dot.classList.add("projects__dot");
                    dot.addEventListener("click", () => {
                        this.goTo(i);
                        this.updateDots();
                        this.checkSlide();
                    });
                    this.dots.appendChild(dot);
                }
                this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
            }

            checkSlide() {
                // Add or remove a "active" class for current slide
                this.slides = document.querySelectorAll(".projects__project");
                let currentActiveSlide = this.slides.item(this.currentSlide);
                for (let i = 0; i < this.slides.length; i++) {
                    this.slides[i].classList.remove("projects__project--active");
                }
                currentActiveSlide.classList.add("projects__project--active");
                for (let i = 0; i < projectsLinks.length; i++) {
                    projectsLinks[i].setAttribute("tabIndex", "-1");
                }

                let activeLinks = currentActiveSlide.querySelectorAll(".projects__link");
                for (let i = 0; i < activeLinks.length; i++) {
                    activeLinks[i].setAttribute("tabIndex", "0");
                }
                if (this.currentSlide === 0) {
                    prev.classList.add("projects__prev--disabled");
                    next.classList.remove("projects__next--disabled");
                } else if (this.currentSlide === 3) {
                    next.classList.add("projects__next--disabled");
                    prev.classList.remove("projects__prev--disabled");
                } else {
                    prev.classList.remove("projects__prev--disabled");
                    next.classList.remove("projects__next--disabled");
                }
            }

            updateDots() {
                // Add or remove a "active" class for current dot
                for (let i = 0; i < this.dots.querySelectorAll("span").length; i++) {
                    let addOrRemove = this.currentSlide === i ? "add" : "remove";
                    this.dots.querySelectorAll("span")[i].classList[addOrRemove]("projects__dot--active");
                }
                this.updateURL();
            }

            updateURL() {
                if (this.currentSlide > 0)
                    window.history.replaceState(2,
                        "Vignesh Joglekar - Projects",
                        "/projects/" + (this.currentSlide + 1)
                    );
                else
                    window.history.replaceState(2,
                        "Vignesh Joglekar - Projects",
                        "/projects"
                    );
            }
        }

        mySiemaWithDots = new mySiema({
            selector: ".projects",
            duration: 500,
            easing: "cubic-bezier(0.250, 0.100, 0.250, 1.000)",
            perPage: 1,
            draggable: true,
            threshold: 0,
            onInit: function () {
                this.addDots();
                this.updateDots();
                this.checkSlide();

            },
            onChange: function () {
                this.updateDots();
                this.checkSlide();
            },
        });
        prev.addEventListener("click", function () {
            mySiemaWithDots.prev()
        });
        next.addEventListener("click", function () {
            mySiemaWithDots.next()
        });
    }

    componentDidMount() {
        document.querySelector("#projects").style.display = 'none';
        setTimeout(() => {
            slideIndex = window.location.pathname.replace("/", "");
            this.createSiema();
            if (slideIndex.indexOf("/") > -1) {
                slideIndex = parseInt(slideIndex.substring(slideIndex.indexOf("/") + 1, slideIndex.indexOf("/") + 2), 10);
                console.log(slideIndex);
                if (slideIndex > 4 || slideIndex < 0) {
                    slideIndex = 0;
                    window.history.replaceState(2,
                        "Vignesh Joglekar - Projects",
                        "/projects"
                    );
                }

                mySiemaWithDots.goTo(slideIndex - 1);
                mySiemaWithDots.updateDots();
                mySiemaWithDots.checkSlide();
            }
        });

    }

    componentWillUnmount() {
        mySiemaWithDots = undefined;
    }

    render() {
        return (
            <div id="projects_container" className="container theme animated slideInDown">
                <div className="page page--projects" id="projects">
                    <button className="projects__prev projects__prev--disabled">
                        <span className='icon-left-open' />
                    </button>
                    <button className="projects__next " aria-label="Next Project">
                        <span className='icon-right-open' />
                    </button>
                    <div className="projects">

                        {/*PLP*/}
                        <div className="projects__project">
                            <h3 className="projects__title product_sans">Potluck Party</h3>
                            <div className="projects__tags">
                                <span className="projects__tag">React</span>
                                <span className="projects__tag">Koa</span>
                                <span className="projects__tag">Sass</span>
                                <span className="projects__tag">MySQL</span>
                                <span className="projects__tag">ES6</span>
                                <span className="projects__tag">Node</span>
                            </div>
                            <img className="projects__photo " src={require('./img/projects/plpThumb.png')}
                                alt="Potluck Party Screenshot" />
                            <a className="projects__link projects__link--code projectCode product_sans"
                                href="https://potluckparty.com"
                                rel="noopener noreferrer"
                                target="_blank" rel="noopener noreferrer">Launching Q1 2020</a>
                            <p className="projects__description gridDescription product_sans">Potluck Party web party planning application, organizing events, potlucks, or get-togethers in a modern and intuitive user experience</p>
                        </div>

                        {/*SH*/}
                        <div className="projects__project">
                            <h3 className="projects__title product_sans">Secret Hitler</h3>
                            <div className="projects__tags">
                                <span className="projects__tag dark-theme">React</span>
                                <span className="projects__tag dark-theme">Sass</span>
                                <span className="projects__tag dark-theme">Express.js</span>
                                <span className="projects__tag dark-theme">Socket.io</span>
                                <span className="projects__tag dark-theme">MongoDB</span>
                                <span className="projects__tag dark-theme">Cloud Functions</span>
                            </div>
                            <img className="projects__photo " src={require('./img/projects/shThumb.png')}
                                alt="Secret Hitler Online Game Screenshot" />
                            <a className="projects__link projectLive product_sans"
                                href="https://secrethitler.io"
                                title="Open Secret Hitler" target="_blank" rel="noopener noreferrer">Open Project</a>
                            <p className="projects__description gridDescription product_sans">Major Contributor and Co-Maintainer of a web adaptation of the hit board game, Secret Hitler. </p>
                            <a className="projects__link projects__link--code projectCode product_sans"
                                href="https://github.com/cozuya/secret-hitler"
                                title="Secret Hitler Source Code" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>

                        {/*This*/}
                        <div className="projects__project">
                            <h3 className="projects__title product_sans">This Website</h3>
                            <div className="projects__tags">
                                <span className="projects__tag">React</span>
                                <span className="projects__tag">ES6</span>
                                <span className="projects__tag">Sass</span>
                                <span className="projects__tag">Webpack</span>
                            </div>
                            <img className="projects__photo " src={require('./img/projects/siteThumb.png')} alt="This Website Screenshot" />
                            <a className="projects__link projects__link--code projectCode product_sans"
                                href="https://github.com/Vigasaurus/vigasaurus.github.io/tree/master"
                                title="Github Profile Viewer Source Code"
                                target="_blank" rel="noopener noreferrer">Source Code</a>
                            <p className="projects__description gridDescription product_sans">This website, made as
                                a
                                single-page-application with React.js and JavaScript ES6. Compiled and built with
                                    Webpack. Deployed on Netlify. Version 3, made in Gatsby and GraphQL launching Spring 2020. Preview it <a style={{ color: '#ddd' }} href="https://2019.vigneshjoglekar.com">here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
