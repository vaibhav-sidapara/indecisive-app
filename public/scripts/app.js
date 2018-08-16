'use strict';

console.log('App.js is running.');

// JSX - JavaScript XML

var app = {
    'title': 'Indecisive App',
    'subTitle': 'Random Generator'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Vaibhav Sidapara'
    ),
    React.createElement(
        'p',
        null,
        'Age: 26'
    ),
    React.createElement(
        'p',
        null,
        'Location: Singapore'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
