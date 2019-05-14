import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container" data-section="home">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="colorlib-navbar-brand">
                                    <a className="colorlib-logo" href="index.html"><span className="logo-img" style={{backgroundImage: 'url(images/rafael_1.JPG)'}} />Rafael Davis H.</a>
                                </div>
                                {/* <a href="https://rafaeldavis.me" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a> */}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}