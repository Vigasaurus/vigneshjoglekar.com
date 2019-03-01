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
import PageNotFound from './PageNotFound.jsx';

const pageRaws = ['home', 'overview', 'projects', 'orgs', 'contact', '404'];
const pagesFormatted = ['Home', 'Overview', 'Projects', 'Organizations', 'Contact', "404"];
const pages = [<Home />, <Overview/>, <Projects/>, <Organizations/>, <Contact/>, <PageNotFound/>];

export default class Site extends Component {

    constructor(props) {
        super(props);
        let pageLocation = window.location.pathname.replace("/", "");
        if(pageLocation.indexOf("/") > -1)
            pageLocation = pageLocation.substring(0,pageLocation.indexOf("/"));
        let pageIndex = pageRaws.indexOf(pageLocation);
        if(window.location.pathname.substring(1) === "")
            pageIndex = 0;

        this.state = {
            currentPage: pageRaws[pageIndex],
            currentPageIndex: pageIndex !== -1 ? pageIndex : 5
        };
        this.setTitle();
        window.onpopstate = (event) => {
            if(event.state <= 5 && event.state >= 0)
                this.setState({currentPageIndex: event.state, currentPage: pageRaws[event.state]}, () => {
                    this.setTitle();
                });
        }
    }

    setTitle() {
        if(this.state.currentPageIndex !== 0){
            window.history.replaceState(this.state.currentPageIndex, "", "");
            document.title = "Vignesh Joglekar - " + pagesFormatted[this.state.currentPageIndex];
        }
        else {
            window.history.replaceState(this.state.currentPageIndex, "", "/");
            document.title = "Vignesh Joglekar";
        }
    }

    changePage(page) {
        if(this.state.currentPage !== page)
            this.hideNavAndAnimatePageChange(page);
    }

    handleMenu(status) {
        let navList = document.querySelector(".nav__list");
        let hamburger = document.querySelector(".nav__hamburger");
        let closeHamburger = document.querySelector(".nav__close-menu");

        if(status === 'show') {
            hamburger.style.display = "none";
            closeHamburger.style.display = "block";
            navList.classList.add("nav__list--expanded");
        }

        if(status === 'hide') {
            hamburger.style.display = "block";
            closeHamburger.style.display = "none";
            navList.classList.remove("nav__list--expanded");
        }
    }

    hideNavAndAnimatePageChange(page) {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            this.handleMenu('hide');
            setTimeout(this.animatePageChange(page), 1400);
        }else
            this.animatePageChange(page)
    }

    animatePageChange(page) {
        let currentPage = document.querySelector("#" + this.state.currentPage + "_container");

        currentPage.classList.remove("slideInDown");
        currentPage.classList.add("slideOutRight");


        let newPageIndex;

        switch(page){
            case 'home': newPageIndex = 0; break;
            case 'overview': newPageIndex = 1; break;
            case 'projects': newPageIndex = 2; break;
            case 'orgs': newPageIndex = 3; break;
            case 'contact': newPageIndex = 4; break;
            default: newPageIndex = 5;
        }

        setTimeout(() => {
            this.setState({
                currentPage: page,
                currentPageIndex: newPageIndex
            }, () => {
                window.history.pushState(this.state.currentPageIndex,
                    "Vignesh Joglekar - " + pagesFormatted[this.state.currentPageIndex],
                    "/" + pageRaws[this.state.currentPageIndex]
                );
                this.setTitle();
            });


        }, 225);
    }

    render() {
        return (
          <div className="theme overflow-horz-off">
              <Nav changePage={page => this.changePage(page)} menu={status => this.handleMenu(status)} error={this.state.currentPageIndex === 5}/>
              {pages[this.state.currentPageIndex]}
              <Footer changePage={page => this.changePage(page)} error={this.state.currentPageIndex === 5}/>
          </div>
        );
    }
}