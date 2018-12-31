import React, { Component } from "react";
import { Provider } from "./context";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddToContact from "./components/contacts/AddToContact";
import EditToContact from "./components/contacts/EditToContact";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <React.Fragment>
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddToContact}
                                />
                                <Route
                                    exact
                                    path="/contact/edit/:id"
                                    component={EditToContact}
                                />
                                <Route exact path="/about" component={About} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
