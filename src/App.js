import React from 'react';
import './App.css';
import Progress from './components/progress'
import Header from './components/header'
import Slider from './components/slider'
import About from './components/about'
import Portfolio from './components/portfolio'
import Footer from './components/footer'
import Loader from './components/loader'

function App() {
  return (
    <div>
      <Progress></Progress>
      <div className="page">
        <div id="colorlib-page">
          <Header></Header>
          <Slider></Slider>
          <About></About>
          <Portfolio></Portfolio>
          <Footer></Footer>
          <Loader></Loader>
        </div>
      </div>
    </div>
  );
}

export default App;
