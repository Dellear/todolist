import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    static propTypes = {
        content: PropTypes.string.isRequired,
        test: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

    static defaultProps = {
        test: 'hello',
    }

    render() {
        const { content, test } = this.props;
        return (
            <div onClick={this.handleClick}>
                {test} - {content}
            </div>
        )
    }

    handleClick = () => {
        const { index, deleteItem } = this.props;
        deleteItem(index);
    }
}

export default TodoItem;