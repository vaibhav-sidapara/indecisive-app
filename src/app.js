console.log('App.js is running.');

// JSX - JavaScript XML

var app = {
    'title': 'Indecisive App',
    'subTitle' : 'Random Generator',
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Vaibhav Sidapara</h1>
        <p>Age: 26</p>
        <p>Location: Singapore</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);