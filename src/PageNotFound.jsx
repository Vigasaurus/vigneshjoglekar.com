//CORE Imports
import React, { Component } from 'react';

export default class PageNotFound extends Component {
    render() {
        return (
            <main className="container error-404 theme">
                <h1 className="error-404__title product_sans">404 Error</h1>
                <span className="icon icon--404 icon-emo-unhappy"/>
                <p className="error-404__subtitle product_sans">Unfortunately that page doesn't exist...

                    <a href="/" className="button button--404  product_sans" title="Go to the home page">Go to the
                        home page</a>

                </p>
            </main>
        );

    }

}