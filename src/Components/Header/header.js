import React from "react";
import "./header.scss";

export default class Header extends React.Component{
    render() {
        return (
            <nav className="header">
            <section className="header-details">
                <h1 className="header-name">Sahiba Khanna</h1>
                <h2 className="header-title">FRONTEND DEVELOPER</h2>
            </section>
            </nav>
            
        )
    }
}