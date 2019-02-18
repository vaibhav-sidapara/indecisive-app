class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {!this.state.visibility ? 'Show Details' : 'Hide Details'}
                </button>
                {this.state.visibility && (
                    <p>Some Text</p>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;
//
// const toggleVisibility = () => {
//     visibility = !visibility;
//
//     render();
// };
//
// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Some Text</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(jsx, document.getElementById('app'));
// };
//
// render();