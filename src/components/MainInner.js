import React, {Component} from 'react'

import Header from './header'
import Slider from './slider'
import About from './about'
import Portfolio from './portfolio'
import Footer from './footer'
import Loader from './loader'

export default class MainInner extends Component {
    render() {
        return(
            <div id="colorlib-page">
                <Header />
                <Slider />
                <About />
                <Portfolio />
                <Footer />
                <Loader />
            </div>
        )
    }
}