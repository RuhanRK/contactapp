import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        const { branding } = this.props;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 p-2 py-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <i className="fas fa-home" /> {branding}
                        </Link>
                    </div>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link">
                                    <i className="fas fa-user-plus" /> Add
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    <i className="fas fa-question-circle" />{" "}
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
};
