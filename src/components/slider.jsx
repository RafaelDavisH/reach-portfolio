import React, {Component} from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div>
                <section className="home-slider owl-carousel js-fullheight">
                        <div className="slider-item js-fullheight">
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                                    <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                        <p><a href="https://rafaeldavis.me" className="scroll">Hello World! I'm</a></p>
                                        <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Rafael Davis H.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item js-fullheight">
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                                    <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                        <p><a href="https://rafaeldavis.me" className="scroll">I'm from Los Angeles</a></p>
                                        <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">A Software Engineer</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}