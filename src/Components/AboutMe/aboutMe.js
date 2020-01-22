import React from "react";
import "./aboutMe.scss";
import Linkedin from "../../Assets/linkedin.svg";
import Github from "../../Assets/github.svg";
import Mail from "../../Assets/mail.svg";

export default class AboutMe extends React.Component{
    render() {
        return (
            <section className="self">
                <article className="self-header">
                    <h2 className="self-aboutme">About Me</h2>
                    <span className="self-image"></span>
                    <ul className="self-links">
                        <a href="https://www.linkedin.com/in/sahibak" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="LinkedIn logo"/></a>
                        <a href="https://github.com/sahibak" target="_blank" rel="noopener noreferrer"><img src={Github} alt="GitHub logo"/></a>
                        <a href="mailto:reach.sahibak@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Mail} alt="Email"/></a>
                    </ul>
                </article>
                <ul className="self-description">
                    <li className="self-description-point">I am Sahiba Khanna, a new front-end developer. I am a tenatious problem solver with passion for React, CSS/SCSS, JavaScript.</li>
                    <li className="self-description-point">I have previous expereince in data analysis, product ownernership, business developement, strategy and planning. Playing around with coding as my new year resolution for 2019, got me thinking about it as a career choice.</li>
                    <li className="self-description-point"> For any questions, assitance, business opportunities please contact via email/LinkedIn.</li>
                </ul>
            </section>
        )
    }
}