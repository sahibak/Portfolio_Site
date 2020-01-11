import React from "react";
import Project from "../Project/project.js";
import "./projects.scss";
import Portfolio from "../../Assets/portfolio.png";
import TickTackToe from "../../Assets/tickTackToe.png";
import Grosure from "../../Assets/grosure.png"

export default class Projects extends React.Component{
    // array of the projects I have worked on.
    allProjects = [
        {
            "name": "My Portfolio",
            "description": "Developement of my portoflio website to share my develpoment journey.",
            "image": {Portfolio},
            "link": "https://github.com/sahibak/Portfolio"
        },
        {
            "name": "Grosure",
            "description": "BrainStation Graduation Capstone - A web application to help with recipe selection and preparing a grocery list based on requirements.",
            "image": {Grosure},
            "link":"https://github.com/sahibak/Capstone"
        },
        {
            "name": "Tick-Tack-Toe",
            "description": "First pair-programming project at BrainStation, in collobaration with Michael Beaudry.",
            "image": {TickTackToe},
            "link":"https://github.com/sahibak/ca-pair-mike-sahiba"
        }
    ]
                
    //Function to render all individual projects with thier details. 
    creatingProjectList(){
        let projectList = [];
        for (let i=0; i < this.allProjects.length; i++ ){
            let { name, description, image, link } = this.allProjects[i];
            projectList.push(
                <Project key={i} 
                        projectName={name}
                        projectDescription = {description}
                        projectImage = {Object.values(image)[0]}
                        projectLink = {link}>
                </Project>
            );
        }
        return projectList
    }

    render() {
        return (
            <section className="projects"> 
                <h2 className="projects-title">Projects</h2>
                <article className="projects-list">
                    {this.creatingProjectList()}
                </article>
            </section>
        )
    }
}