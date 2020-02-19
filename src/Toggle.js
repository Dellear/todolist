import React, { Component, Fragment } from 'react';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>Hello</div>
                <button onClick={this.handleClick}>Toggle</button>
            </Fragment>
        )
    }

    handleClick = () => {
        this.setState((prevState) => ({
            show: !prevState.show
        }));
    }
}

export default Toggle;