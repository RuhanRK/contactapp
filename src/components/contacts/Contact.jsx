import React, { Component } from "react";
import { Consumer } from "../../context";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
    state = {
        isShowInfo: false
    };

    showInfo = () => {
        this.setState({
            isShowInfo: !this.state.isShowInfo
        });
    };

    // remove contact
    deleteContact = async (id, dispatch) => {
        try {
            await axios.delete(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            dispatch({ type: "DELETE_CONTACT", payload: id });
        } catch (error) {
            dispatch({ type: "DELETE_CONTACT", payload: id });
        }
    };
    render() {
        const { id, name, email, phone } = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <i
                                    className="fas fa-sort-down down"
                                    onClick={this.showInfo}
                                />
                                <i
                                    className="fas fa-user-times remove"
                                    onClick={this.deleteContact.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                />
                                <Link to={`contact/edit/${id}`}>
                                    <i className="fas fa-user-edit edit" />
                                </Link>
                            </h4>
                            {this.state.isShowInfo && (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            )}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};
