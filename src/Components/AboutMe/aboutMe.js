import React from "react";
import photo from "../../Assets/photo.jpg";
import "./aboutMe.scss";
import Linkedin from "../../Assets/linkedin.svg";
import Github from "../../Assets/github.svg";

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
                    </ul>
                </article>
                <article className="self-description">
                    <p>I am Sahiba Khanna, a new front-end developer. I am a tenatious problem solver with passion for React, CSS/SCSS, JavaScript.</p>
                    <p>I have previous expereince in data analysis, product ownernership, business developement, strategy and planning. Playing around with coding as my new year resolution for 2019, got me thinking about it as a career choice.</p>
                    <p>I decided to make a forward leaning decission - to learn web development as my first step in the direction of pursuing my new found interest. By the time I completed my bootcamp at BrainStation (Toronto), it was evident the love for coding had become a passion.</p>
                    <p> I hope you enjoy viewing my projects as much as I enjoyed making each one of them.</p>
                </article>
            </section>
        )
    }
}