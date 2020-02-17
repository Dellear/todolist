import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    static propTypes = {
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        test: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        deleteItem: PropTypes.func.isRequired
    }

    static defaultProps = {
        test: 'hello',
    }

    render() {
        console.log('render item');
        // 当父组件的render函数被运行时，它的子组件的render都将被重新执行
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