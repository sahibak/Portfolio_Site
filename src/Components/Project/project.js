import React from "react";
import Morethan from "../../Assets/more-than.svg";
import "./project.scss";

export default class Project extends React.Component {
  render() {
    return (
      <a
        className="project-details-link"
        href={this.props.projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ul className="project">
          <ul className="project-details">
            <li className="project-title">{this.props.projectName}</li>
            <li className="project-description">
              {this.props.projectDescription}
            </li>
            <li className="project-details-access">
              {/* <a className="project-details-link" href={this.props.projectLink} target="_blank" rel="noopener noreferrer">Go to GitHub<img className="project-details-image" src={Morethan} alt="go to link icon"/></a> */}
            </li>
          </ul>
          <li className="project-image">
            <img
              className="project-image-display"
              src={this.props.projectImage}
              alt="project screenshot"
            />
          </li>
        </ul>
      </a>
    );
  }
}
