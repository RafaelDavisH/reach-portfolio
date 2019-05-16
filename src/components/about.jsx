import React, {Component} from 'react'
import PhoneNumber from 'react-phone-number'
import pdf from '../docs/SoftEngResume.pdf'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section about-section">
                    <div className="container">
                        <div className="row d-flex" data-scrollax-parent="true">
                            <div className="col-md-4 author-img" style={{backgroundImage: 'url(images/rafaeldavis.JPG)'}} data-scrollax=" properties: { translateY: '-70%'}" />
                            <div className="col-md-2" />
                            <div className="col-md-6 wrap ftco-animate">
                                <div className="about-desc">
                                    <h1 className="bold-text">About</h1>
                                    <div className="p-5">
                                        <h2 className="mb-5">Hi! I'm Rafael Davis H.</h2>
                                        <p>I'm a career changer, and I understand the grind it takes to establish myself in the world of tech as a Developer.
                                            A firm believer in always seeking new opportunities to grow as an individual and professional. 
                                            Most importantly, I am a family man, who loves his wife and baby girl. I also enjoy outdoor activities, art, and
                                            watching professional basketball games.</p>
                                        <p><a href={pdf} target="_blank">Checkout my resume</a></p>
                                        <ul className="ftco-footer-social list-unstyled mt-4">
                                            <li><a href="https://www.linkedin.com/in/rafaeldavish/"><span className="icon-linkedin" /></a></li>
                                            <li><a href="https://github.com/RafaelDavisH"><span className="icon-github" /></a></li>
                                        </ul>
                                        <h5>Contact me here!</h5>
                                        <p>Email: <a href="mailto: rafaeldavish443@gmail.com">rafaeldavish443@gmail.com</a></p>
                                        <p>Phone: 
                                            <PhoneNumber number="+3235530135" isLinked={true}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
            </div>
        )
    }
}
