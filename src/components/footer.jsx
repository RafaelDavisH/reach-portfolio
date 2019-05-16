import React, {Component} from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer  className="ftco-footer ftco-bg-dark ftco-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-5 text-center">
                                <div className="ftco-footer-widget mb-5">
                                    <ul className="ftco-footer-social list-unstyled">
                                    <li className="ftco-animate"><a href="https://www.linkedin.com/in/rafaeldavish/"><span className="icon-linkedin" /></a></li>
                                    <li className="ftco-animate"><a href="https://github.com/RafaelDavisH"><span className="icon-github" /></a></li>
                                    </ul>
                                </div>
                                <div className="ftco-footer-widget">
                                    <h2 className="mb-3">Contact Me</h2>
                                    <p className="h3 email"><a href="mailto: rafaeldavish443@gmail.com">rafaeldavish443@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div  className="row">
                            <div className="col-md-12 text-center">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Created with React &nbsp;&nbsp; Copyright © All rights reserved &nbsp;&nbsp; <i className="ion-md-glasses" aria-hidden="true" style={{color: 'black'}} /> &nbsp; Design inspired by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                            </div>
                        </div>
                    </div>
                    
                </footer>
            </div>
            
        )
    }
}