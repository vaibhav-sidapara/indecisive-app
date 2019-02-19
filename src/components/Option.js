import React from "react";

const Option = (props) => (
    <div className="option">
        <p className="option--text"> {props.option} </p>
        <button
            className="button button--link"
            onClick={(e) => {
            props.handleRemoveOption(props.option)
        }}>
            Remove Option
        </button>
    </div>
);

export default Option;