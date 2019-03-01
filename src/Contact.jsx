//CORE Imports
import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div id="contact_container" className="container theme animated slideInDown">
                <div className="page page--contact">
                    <h2 className="page__title page__title--contact contactTitle product_sans">Where to find me:</h2>
                    <ul className="socials">
                        {/*Github*/}
                        <li className="socials__list-item">
                            <a className="socials__item link" href="https://github.com/Vigasaurus"
                               target="_blank" rel="noopener noreferrer">
                                <span className="icon icon--social icon-github-circled" />
                                <p className="github product_sans">GitHub</p>
                            </a>
                        </li>

                        {/*Twitter*/}
                        <li className="socials__list-item">
                            <a className="socials__item link" href="https://twitter.com/Vigasaurus"
                               target="_blank" rel="noopener noreferrer">
                                <span className="icon icon--social icon-twitter-circled" />
                                <p className="twitter product_sans">Twitter</p>
                            </a>
                        </li>

                        {/*Email*/}
                        <li className="socials__list-item">
                            <a className="socials__item link" href="mailto:vigneshjoglekar4@gmail.com"
                               target="_blank" rel="noopener noreferrer">
                                <span className="icon icon--social icon-mail-circled" />
                                <p className="mail product_sans">Email</p>
                            </a>
                        </li>

                        {/*LinkedIn*/}
                        <li className="socials__list-item">
                            <a className="socials__item link"
                               href="https://www.linkedin.com/in/vignesh-joglekar-43703a161/" target="_blank"
                               rel="noopener noreferrer">
                                <span className="icon icon--social icon-linkedin-circled" />
                                <p className="linkedin product_sans">LinkedIn</p>
                            </a>
                        </li>

                        {/*Resume*/}
                        <li className="socials__list-item">
                            <a className="socials__item link" href="./docs/Vignesh%20Joglekar.pdf" rel="noreferrer">
                                <span className="icon icon--social icon-doc-circled" />
                                <p className="resume product_sans">R&eacute;sum&eacute;</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
