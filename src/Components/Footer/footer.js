import React from "react";
import "./footer.scss";

export default class Footer extends React.Component{
    render(){
        return (
            <ul className="footer">
                <li className="footer-title">Special thanks to</li>
                <li className="footer-item"><a className="footer-link" href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icon8</a> for icons.</li>
                <li className="footer-item"><a className="footer-link" href="https://unsplash.com/@markusspiske" target="_blank" rel="noopener noreferrer">Markus Spiske</a> for hero image via <a className="footer-link" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>.</li>
                <li className="footer-item"><a className="footer-link" href="https://unsplash.com/@hugobarbosa" target="_blank" rel="noopener noreferrer">Hugo Barbosa</a> for Projects' background image via <a className="footer-link" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>.</li>
            </ul>
        )
    }
}