//CORE Imports
import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer theme" hidden={this.props.error}>
                <p className="footer__copyright product_sans"> Copyright
                    <span className="icon-copyright"/>
                    <span id="footer__year">  -- 2017 - {(new Date()).getFullYear()} --  </span>
                    <a id="footer_home" className="footer__link" onClick={() => this.props.changePage('home')}>vigneshjoglekar.com  </a>
                    <a className="git-link" href="https://github.com/Vigasaurus/react-portfolio/" title="View on Github">
                        <span className="devicons-footer devicon-github-plain colored" />
                    </a>
                </p>
            </footer>
        );
    }
}
