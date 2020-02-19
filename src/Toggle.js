import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './toggle.css';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        const { show } = this.state;
        return (
            <Fragment>
                <CSSTransition
                    in={show}
                    timeout={2000}
                    classNames="fade"
                    unmountOnExit
                    appear={true}
                >
                    <div>Hello</div>
                </CSSTransition>
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