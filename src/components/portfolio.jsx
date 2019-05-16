import React, {Component} from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-5">
                            <div className="col-md-7 text-center heading-section ftco-animate">
                                <span>Portfolio</span>
                                <h2>Checkout a few of my Projects</h2>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="https://rafaeldavis.me/" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/landPortfolioSite.PNG")'}} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    <h4 className="subheading">React</h4>
                                    <h2 className="heading"><a href="portfolio-single.html">Portfolio Updated with React</a></h2>
                                    <p>Single-page portfolio highlighting my professional experience as Software Engineer, projects and prefer ways to get in contact with me.
                                        I found easy to get started building with React. I loved how straightfoward it is to organized and managed an application.
                                    </p>
                                    <p><a href="https://github.com/RafaelDavisH/react-portfolio" target="_blank">Github</a></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="https://map.rafaeldavis.me/" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/neigborhoodMap.png")'}} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    <h4 className="subheading">Google API</h4>
                                    <h2 className="heading"><a href="portfolio-single.html">My favorite food and dessert spots.</a></h2>
                                    <p>Single-page application featuring a map with my favorite food spots in around Los Angeles, CA. Using the google API to load markers animated
                                        with for better user experience. The markers display basic information of each spot using Google's infowindow functionality and populated with
                                        data from a javascript file and saved images.
                                    </p>
                                    <p><a href="https://github.com/RafaelDavisH/LATastyBites.com" target="_blank">Github</a></p>
                                    <p><a href="https://map.rafaeldavis.me/" target="_blank">Website</a></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="https://quotes.rafaeldavis.me/" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/landingPage.png")'}} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text order-1">
                                    <h4 className="subheading">CRUD Application</h4>
                                    <h2 className="heading"><a href="portfoli-singleo.html">A Collection of Quotes</a></h2>
                                    <p>Bilt a data driven web application with Flask's framework. Configured database using SQLAlchemy. Hosted on AWS lightsail by creating a Ubuntu instance, secured it.</p>
                                    <p><a href="https://github.com/RafaelDavisH/pot-of-quotes-app" target="_blank">Github</a></p>
                                    <p><a href="https://quotes.rafaeldavis.me/" target="_blank">Website</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 