import React, { Component } from "react";
import InputFormGroup from "./InputFormGroup";
import { Consumer } from "../../context";
import axios from "axios";

export default class EditToContact extends Component {
    state = {
        contact: {
            name: "",
            email: "",
            phone: ""
        },
        error: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const contact = res.data;
        const newContact = {
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        };
        this.setState({ contact: newContact });
    }

    inputChange = e => {
        let { contact } = this.state;
        contact[e.target.name] = e.target.value;
        this.setState({ contact });
    };

    inputSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state.contact;

        if (!name) {
            this.setState({
                error: { name: "Please Enter Your Name" }
            });
            return;
        }

        if (!email) {
            this.setState({
                error: { email: "Please Enter Your Email" }
            });
            return;
        }

        if (!phone) {
            this.setState({
                error: { phone: "Please Enter Your Phone" }
            });
            return;
        }

        const newContact = {
            name,
            email,
            phone
        };

        const { id } = this.props.match.params;
        const res = await axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            newContact
        );

        dispatch({ type: "UPDATE_CONTACT", payload: res.data });
        // clearInput
        this.setState({
            contact: {
                name: "",
                email: "",
                phone: ""
            }
        });

        // redirect to home page
        this.props.history.push("/");
    };
    render() {
        const { name, email, phone } = this.state.contact;
        const { error } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <React.Fragment>
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h3 className="text-center">
                                        Edit Contact
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form
                                        onSubmit={this.inputSubmit.bind(
                                            this,
                                            dispatch
                                        )}
                                    >
                                        <InputFormGroup
                                            label="Name"
                                            name="name"
                                            placeholder="Enter Your Name"
                                            error={error.name}
                                            value={name}
                                            inputChange={this.inputChange}
                                        />
                                        <InputFormGroup
                                            label="Email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter Your Email"
                                            error={error.email}
                                            value={email}
                                            inputChange={this.inputChange}
                                        />
                                        <InputFormGroup
                                            label="Number"
                                            name="phone"
                                            placeholder="Enter Your Number"
                                            error={error.phone}
                                            value={phone}
                                            inputChange={this.inputChange}
                                        />

                                        <input
                                            type="submit"
                                            value="Submit"
                                            className="btn btn-block btn-success"
                                        />
                                    </form>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}
