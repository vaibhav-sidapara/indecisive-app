console.log('App.js is running.');

// JSX - JavaScript XML

const app = {
    title: 'Indecisive App',
    subTitle : 'Random Generator',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    const randomNumber = Math.floor( Math.random() * app.options.length );
    const option = app.options[randomNumber];

    alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subTitle}</p>

            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button onClick={makeDecision} disabled={app.options.length <= 0}>What should I do ?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option, index) => {
                        return <li key={index}>{option}</li>;
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" autoFocus={1}/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();