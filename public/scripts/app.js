'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisiveApp = function (_React$Component) {
    _inherits(IndecisiveApp, _React$Component);

    function IndecisiveApp(props) {
        _classCallCheck(this, IndecisiveApp);

        var _this = _possibleConstructorReturn(this, (IndecisiveApp.__proto__ || Object.getPrototypeOf(IndecisiveApp)).call(this, props));

        _this.handleRemoveOptions = _this.handleRemoveOptions.bind(_this);
        _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
        _this.handlePickOption = _this.handlePickOption.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisiveApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) this.setState(function () {
                    return { options: options };
                });
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'handleRemoveOptions',
        value: function handleRemoveOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleRemoveOption',
        value: function handleRemoveOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePickOption',
        value: function handlePickOption() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNumber];

            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter some valid value to add option.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exist';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecisive App";
            var subtitle = "Put your choices in the hands of a computer.";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePickOption: this.handlePickOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleRemoveOptions: this.handleRemoveOptions,
                    handleRemoveOption: this.handleRemoveOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisiveApp;
}(React.Component);

IndecisiveApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePickOption,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveOptions },
            'Remove All'
        ),
        props.options.map(function (option, index) {
            return React.createElement(Option, {
                key: index,
                option: option,
                handleRemoveOption: props.handleRemoveOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleRemoveOption(props.option);
                } },
            'Remove Option'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.formSubmit = _this2.formSubmit.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'formSubmit',
        value: function formSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();

            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            if (!error) e.target.elements.option.value = "";
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.formSubmit },
                    React.createElement('input', { type: 'text', name: 'option', autoFocus: 1 }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        'Add Options'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisiveApp, null), document.getElementById('app'));
