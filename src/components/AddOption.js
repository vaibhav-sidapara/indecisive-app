import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    formSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) e.target.elements.option.value = "";
    };

    render() {
        return (
            <div>
                {(this.state.error && <p className="add-option-error">{this.state.error}</p>)}
                <form className="add-option" onSubmit={this.formSubmit} autoComplete={0}>
                    <input className="add-option--input" type="text" name="option" autoFocus={0} autoComplete={1} />
                    <button className="button" type="submit">Add Options</button>
                </form>
            </div>
        );
    }
}