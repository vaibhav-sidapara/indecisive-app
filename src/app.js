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
                Options component here.
            </div>
        );
    }
}

class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <p>Add Options</p>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));