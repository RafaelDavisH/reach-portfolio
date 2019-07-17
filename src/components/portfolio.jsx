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
                                <h2>Check out some of my Projects</h2>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="https://Learn-CSS-by-building-a-Blog--rafaeldavish.repl.co" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/responsive-blog.PNG")'}} data-scrollax=" properties: { translateY: '-30%'}" target="_blank" >
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    {/* <h4 className="subheading">Responsive Blog</h4> */}
                                    <h2 className="heading"><a href="https://Learn-CSS-by-building-a-Blog--rafaeldavish.repl.co" target="_blank">Responsive Web Design Blog</a></h2>
                                    <p>Final project designed to be used as reference to create the lessons that will teach the Basics of CSS by building a responsive blog.
                                    </p>
                                    <p><a href="https://repl.it/@RafaelDavisH/Learn-CSS-by-building-a-Blog" target="_blank">Repl.it</a></p>
                                    <p><a href="https://Learn-CSS-by-building-a-Blog--rafaeldavish.repl.co" target="_blank">Live Site</a></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="https://codepen.io/RafaelDavisH/project/editor/DyanzQ" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/responsivepiano.PNG")'}} data-scrollax=" properties: { translateY: '-30%'}" target="_blank">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    {/* <h4 className="subheading">Responsive Web Design Piano</h4> */}
                                    <h2 className="heading"><a href="https://codepen.io/RafaelDavisH/project/editor/DyanzQ" target="_blank">Responsive Web Design Piano</a></h2>
                                    <p>More than 50 lessons that teach the fundamentals of responsive web design by building a piano. Created as part of freeCodeCamp's new project based curriculum.
                                    </p>
                                    <p><a href="https://github.com/freeCodeCamp/CurriculumExpansion/tree/master/responsive-web-design-piano" target="_blank">Github</a></p>
                                    <p><a href="https://codepen.io/RafaelDavisH/project/editor/DyanzQ" target="_blank">CodePen</a></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="https://map.rafaeldavis.me/" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/neigborhoodMap.png")'}} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    {/* <h4 className="subheading">Google API</h4> */}
                                    <h2 className="heading"><a href="https://map.rafaeldavis.me/" target="_blank">My favorite food and dessert spots.</a></h2>
                                    <p>Single-page application that uses Bootstrap, CSS Grid, Knockout.js, Google Maps and Foursquare API to display my favorite food spots around LA.
                                    The markers display information about each spot using Google's Info Windows and saved images.
                                    </p>
                                    <p><a href="https://github.com/RafaelDavisH/LATastyBites.com" target="_blank">Github</a></p>
                                    <p><a href="https://map.rafaeldavis.me/" target="_blank">Live Site</a></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="https://quotes.rafaeldavis.me/" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/landingPage.png")'}} data-scrollax=" properties: { translateY: '-30%'}" target="_blank">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text order-1">
                                    {/* <h4 className="subheading">CRUD Application</h4> */}
                                    <h2 className="heading">Pot of Quotes</h2>
                                    <p>CRUD Web Application. A web application that provides a list of quotes within a variety of categories as well provides a user registration and authentication system.
                                    This application uses persistent data storage to create a RESTful web application that allows users to perform Read, Update, and Delete operations. The registration and
                                    authentication its done using oAuth 2.0 to access Google API and utilized Google Sign-in. The application also provides three secured JSON Endpoint.  
                                    </p>
                                    <p><a href="https://github.com/RafaelDavisH/pot-of-quotes-app" target="_blank">Github</a></p>
                                    {/* <p><a href="https://quotes.rafaeldavis.me/" target="_blank">Website</a></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 