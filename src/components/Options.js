import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
        <button onClick={props.handleRemoveOptions}>Remove All</button>
        {
            props.options.map((option, index) =>
                <Option
                    key={index}
                    option={option}
                    handleRemoveOption={props.handleRemoveOption}
                />
            )
        }
    </div>
);

export default Options;