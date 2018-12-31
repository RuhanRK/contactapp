import React from "react";

const NotFound = () => {
    return (
        <React.Fragment>
            <div>
                <h1 className="display-4">
                    <span className="text-danger">404</span> Not Found
                </h1>
                <p className="lead">Sorry, :( This page Doesn't exist</p>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
