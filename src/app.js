class IndecisiveApp extends React.Component {
    render() {
        const title = "Indecisive App";
        const subtitle = "Put your choices in the hands of a computer.";
        const options = ["One", "Two", "Three"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    makeDecision() {
        alert('Decision Made')
    }

    render() {
        return (
            <div>
                <button onClick={this.makeDecision}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.removeAll = this.removeAll.bind(this);
    }

    removeAll() {
        console.log(this.props.options);
        // alert('Removed');
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {
                    this.props.options.map((option, index) => <Option key={index} option={option} /> )
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.option}
            </div>
        );
    }
}

class AddOption extends React.Component {
    formSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        {option && alert(option)} // Coolest shorthand for if then
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="option" autoFocus={1}/>
                    <button type="submit">Add Options</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisiveApp />, document.getElementById('app'));