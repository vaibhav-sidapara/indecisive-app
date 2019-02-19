import React from "react";

import Header from "./Header";
import Options from "./Options";
import AddOption from "./AddOption";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisiveApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleRemoveOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    };

    handlePickOption = () => {
        const randomNumber = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNumber];
        this.setState(() =>({ selectedOption: option }))
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter some valid value to add option.'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Option already exist'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) this.setState(() => ({options}));
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        const title = "Indecisive App";
        const subtitle = "Put your choices in the hands of a computer.";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePickOption={this.handlePickOption}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleRemoveOptions={this.handleRemoveOptions}
                            handleRemoveOption={this.handleRemoveOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}