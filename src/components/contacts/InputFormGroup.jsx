import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputFormGroup = props => {
    const { label, type, name, placeholder, value, inputChange, error } = props;
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    className={classnames("form-control form-control-lg", {
                        "is-invalid": error
                    })}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={inputChange}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </React.Fragment>
    );
};

InputFormGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

InputFormGroup.defaultProps = {
    type: "text"
};

export default InputFormGroup;
