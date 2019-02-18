class IndecisiveApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        }
    }

    handleRemoveOptions() {
        this.setState(() => {
           return {
               options: []
           }
        });
    }

    handlePickOption() {
        const randomNumber = Math.floor( Math.random() * this.state.options.length );
        const option = this.state.options[randomNumber];

        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter some valid value to add option'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Option already exist'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render() {
        const title = "Indecisive App";
        const subtitle = "Put your choices in the hands of a computer.";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleRemoveOptions={this.handleRemoveOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveOptions}>Remove All</button>
            {
                props.options.map((option, index) => <Option key={index} option={option} /> )
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.option}
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.formSubmit = this.formSubmit.bind(this);

        this.state = {
            error: undefined
        }
    }

    formSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() => {
           return { error }
        });
    }

    render() {
        return (
            <div>
                {(this.state.error && <p>{this.state.error}</p>)}
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="option" autoFocus={1}/>
                    <button type="submit">Add Options</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisiveApp />, document.getElementById('app'));