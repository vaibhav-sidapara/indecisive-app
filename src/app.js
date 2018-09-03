class IndecisiveApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecisive App</h1>
                <h2>Put your choices in the hands of a computer.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>Add Options</p>
            </div>
        );
    }
}


ReactDOM.render(<IndecisiveApp />, document.getElementById('app'));