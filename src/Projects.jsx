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
                if (this.currentSlide === 0){
                    prev.classList.add("projects__prev--disabled");
                    next.classList.remove("projects__next--disabled");
                } else if (this.currentSlide === 3){
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
                if(this.currentSlide > 0)
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
            if(slideIndex.indexOf("/") > -1){
                slideIndex = parseInt(slideIndex.substring(slideIndex.indexOf("/") + 1, slideIndex.indexOf("/") + 2), 10);
                console.log(slideIndex);
                if(slideIndex > 4 || slideIndex < 0){
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
                        <span className='icon-left-open'/>
                    </button>
                    <button className="projects__next " aria-label="Next Project">
                        <span className='icon-right-open'/>
                    </button>
                    <div className="projects">

                        {/*GPV*/}
                        <div className="projects__project">
                            <h3 className="projects__title product_sans">Github Profile Viewer</h3>
                            <div className="projects__tags">
                                <span className="projects__tag">React</span>
                                <span className="projects__tag">Bootstrap</span>
                                <span className="projects__tag">Flexbox</span>
                                <span className="projects__tag">ES6</span>
                                <span className="projects__tag">jQuery</span>
                                <span className="projects__tag">RESTful</span>

                            </div>
                            <img className="projects__photo " src={require('./img/projects/gpvThumb.png')}
                                 alt="Github Profile Viewer Screenshot"/>
                                <a className="projects__link projectLive product_sans"
                                   href="https://projects.vigneshjoglekar.com/GithubProfileViewer/"
                                   title="Open Github Profile Viewer"
                                   target="_blank" rel="noopener noreferrer">Open Project</a>
                                <p className="projects__description gridDescription product_sans">Github Profile Viewer
                                    made in
                                    React.js utilizing the Github RESTful API.</p>
                                <a className="projects__link projects__link--code projectCode product_sans"
                                   href="https://github.com/Vigasaurus/vigasaurus.github.io/tree/master/projects/react/GithubProfileViewer"
                                   title="Github Profile Viewer Source Code"
                                   target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>

                        {/*This*/}
                        <div className="projects__project">
                            <h3 className="projects__title product_sans">This Website</h3>
                            <div className="projects__tags">
                                <span className="projects__tag">React</span>
                                <span className="projects__tag">ES6</span>
                                <span className="projects__tag">jQuery</span>
                                <span className="projects__tag">Webpack</span>


                            </div>
                            <img className="projects__photo " src={require('./img/projects/siteThumb.png')} alt="This Website Screenshot"/>
                                <a className="projects__link projectLive product_sans"
                                   href="https://vigneshjoglekar.com"
                                   title="Open This Project"
                                   target="_blank" rel="noopener noreferrer">Open Project</a>
                                <p className="projects__description gridDescription product_sans">This website, made as
                                    a
                                    single-page-application with React.js and JavaScript ES6. Compiled and Built with
                                    Webpack.</p>
                                <a className="projects__link projects__link--code projectCode product_sans"
                                   href="https://github.com/Vigasaurus/vigasaurus.github.io/tree/master"
                                   title="Github Profile Viewer Source Code"
                                   target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>

                        {/*BPACares*/}
                        <div className="projects__project">
                            <h3 className="projects__title product_sans">BPACares.org</h3>
                            <div className="projects__tags">
                                <span className="projects__tag dark-theme">HTML</span>
                                <span className="projects__tag dark-theme">CSS</span>
                                <span className="projects__tag dark-theme">JavaScript</span>
                                <span className="projects__tag dark-theme">jQuery</span>

                            </div>
                            <img className="projects__photo " src={require('./img/projects/bpaCaresThumb.png')} alt="BPACares.org Screenshot"/>
                                <a className="projects__link projectLive product_sans" href="https://bpacares.org"
                                   title="Open BPACares.org" target="_blank" rel="noopener noreferrer">Open Project</a>
                                <p className="projects__description gridDescription product_sans">Business Professionals
                                    of America Team Project, made with HTML5 and CSS3 in a team setting, properly hosted
                                    and issue tracked using GitHub.</p>
                                <a className="projects__link projects__link--code projectCode product_sans"
                                   href="https://github.com/BPACares/BPACares.org" title="BPACares.org Source Code"
                                   target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>

                        {/*Minesweeper*/}
                        <div className="projects__project">
                            <h3 className="projects__title product_sans">Minesweeper</h3>
                            <div className="projects__tags">
                                <span className="projects__tag dark-theme">HTML</span>
                                <span className="projects__tag dark-theme">CSS</span>
                                <span className="projects__tag dark-theme">P5.js</span>
                                <span className="projects__tag dark-theme">Flexbox</span>
                                <span className="projects__tag dark-theme">JavaScript</span>
                                <span className="projects__tag dark-theme">ES6</span>
                            </div>
                            <img className="projects__photo " src={require('./img/projects/minesweeperThumb.png')}
                                 alt="Minesweeper Client Screenshot"/>
                                <a className="projects__link projectLive product_sans"
                                   href="https://projects.vigneshjoglekar.com/Minesweeper"
                                   title="Open Minesweeper" target="_blank" rel="noopener noreferrer">Open Project</a>
                                <p className="projects__description gridDescription product_sans">Re-creation of the
                                    original
                                    Minesweeper Puzzle, made in JavaScript with P5.JS library, includes randomly
                                    generated puzzles with completely customizable gameplay</p>
                                <a className="projects__link projects__link--code projectCode product_sans"
                                   href="https://github.com/Vigasaurus/vigasaurus.github.io/tree/master/projects/games/Minesweeper"
                                   title="Minesweeper Source Code" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
