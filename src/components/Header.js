import React from "react";

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header--title">{props.title}</h1>
            <h2 className="header--subtitle">{props.subtitle}</h2>
        </div>
    </div>
);

Header.defaultProps = {
    title: "Indecisive App",
    subtitle: "Put your choices in the hands of a computer."
};

export default Header;