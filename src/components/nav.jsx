import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav id="colorlib-main-nav" role="navigation">
                    <a href="https://rafaeldavis.me" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
                    <div className="js-fullheight colorlib-table">
                        <div className="img" style={{backgroundImage: 'url(images/rafael_1.JPG)'}} />
                            <div className="colorlib-table-cell js-fullheight">
                            <div className="row no-gutters">
                                <div className="col-md-12 text-center">
                                    <h1 className="mb-4"><a href="index.html" className="logo">Rafael Davis H.</a></h1>
                                    <ul>
                                        <li className="active"><a href="/index#home"><span><small>01</small>Home</span></a></li>
                                        <li><a href="index.html#about" ><span><small>02</small>Resume</span></a></li>
                                        <li><a href="index.html#portfolio"><span><small>03</small>Portfolio</span></a></li>
                                        <li><a href="indexhtml#contact" ><span><small>04</small>Contact</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    componentDidUpdate() {
        const anchor = this.props.location.hash;
    
        if (anchor) {
            const domElement = document.querySelector(anchor);
            if (domElement) {
                domElement.scrollIntoView()
            }
        }
    }
}

