import React, {Component} from 'react'

import MainInner from './MainInner'

export default class MainContent extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        const mq = window.matchMedia("(max-width:415px)");
        const bgStyle = {}
        
        if (mq.matches){
            if (hours < 12) {
                bgStyle.backgroundColor = "#4158D0";
            } else if ( hours >= 12 && hours < 17) {
                bgStyle.backgroundColor = "#C850C0";
            } else {
                bgStyle.backgroundColor = "#FFCC70";
            }
        }

        return (
            <div style={bgStyle} className="page">
                <MainInner />
          </div>
        )
    }
}