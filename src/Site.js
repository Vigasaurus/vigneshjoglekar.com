//CORE Imports
import React, { Component } from 'react';

//CSS Imports
import './css/main.css';
import './css/normalize.css';
import './css/productsans.css';
import './css/roboto.css';
import './css/animate.css';
import './css/portfolio.css';
import './devicons/devicon.css';
import './devicons/devicon-colors.css';

//Component Imports
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Overview from './Overview.jsx';
import Projects from './Projects.jsx';
import Organizations from './Organizations.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';


export default class Site extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: "home",
            text: {},
        };
        this.changePage = this.changePage.bind(this);
        this.animatePageChange = this.animatePageChange.bind(this);
    }

    changePage(page) {
        // Nav elements
        let navList = document.querySelector(".nav__list");
        let hamburger = document.querySelector(".nav__hamburger");
        let closeHamburger = document.querySelector(".nav__close-menu");

        if (window.matchMedia("(max-width: 1130px)").matches) {
            if (navList.classList.contains("nav__list--expanded")) {
                navList.classList.remove("nav__list--expanded");
                hamburger.style.display = "block";
                closeHamburger.style.display = "none";
            }

            setTimeout(this.animatePageChange(page), 1000);
        }else
            this.animatePageChange(page)


    }

    animatePageChange(page) {
        let currentPage = document.querySelector("#" + this.state.currentPage + "_container");

        currentPage.classList.remove("slideInDown");
        currentPage.classList.add("slideOutRight");

        setTimeout(() => {
            this.setState({
                currentPage: page,
            });

            currentPage.classList.add("slideInDown");
            currentPage.classList.remove("slideOutRight");

        }, 225);
    }

    componentDidMount() {
        fetch('https://vigneshjoglekar.com/en_US.json').then(r => r.json())
            .then(data => {
                console.log(data);
                this.setState({text: data})
            })
            .catch(e => console.log(e));

        // Nav elements
        let navList = document.querySelector(".nav__list");
        let hamburger = document.querySelector(".nav__hamburger");
        let closeHamburger = document.querySelector(".nav__close-menu");

        //Hash Effects
        let acceptedHash = ["#home", "#about", "#projects", "#organizations", "#contact"];
        let possibleStates = ["home", "overview", "projects", "orgs", "contact"];
        let currentHashIndex = acceptedHash.indexOf(window.location.hash);

        // Mobile menu scripts, showing hamburger etc.
        hamburger.addEventListener("click", function () {
            hamburger.style.display = "none";
            closeHamburger.style.display = "block";
            navList.classList.add("nav__list--expanded");
        });
        closeHamburger.addEventListener("click", function () {
            hamburger.style.display = "block";
            closeHamburger.style.display = "none";
            navList.classList.remove("nav__list--expanded");
        });
        document.querySelector("#logo").addEventListener("click", () => {
            if (!(this.state.currentPage === "home"))
                this.changePage("home");
        });
        document.querySelector("#about").addEventListener("click", () => {
            if (!(this.state.currentPage === "overview"))
                this.changePage("overview");
        });
        document.querySelector("#projects").addEventListener("click", () => {
            if (!(this.state.currentPage === "projects"))
                this.changePage("projects");

        });
        document.querySelector("#orgs").addEventListener("click", () => {
            if (!(this.state.currentPage === "orgs"))
                this.changePage("orgs");

        });
        document.querySelector("#contact").addEventListener("click", () => {
            if (!(this.state.currentPage === "contact"))
                this.changePage("contact");
        });
        document.querySelector("#footer_home").addEventListener("click", () => {
            if (!(this.state.currentPage === "home"))
                this.changePage("home");
        });


        if (!(currentHashIndex === -1)) {
            this.setState({currentPage: possibleStates[currentHashIndex]});
            window.history.pushState("", "", "/");
        }

    }

    render() {
        return (
          <div className="theme overflow-horz-off">
              <Nav                                                  text={this.state.text.logo}             />
              <Home             activePage={this.state.currentPage}                                         />
              <Overview         activePage={this.state.currentPage} text={this.state.text.overview}         />
              <Projects         activePage={this.state.currentPage} text={this.state.text.projects}         />
              <Organizations    activePage={this.state.currentPage} text={this.state.text.organizations}    />
              <Contact          activePage={this.state.currentPage}                                         />
              <Footer                                                                                       />
          </div>
        );
    }
}