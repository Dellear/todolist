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

    // 一个组件要从父组件接受参数
    // 当父组件的render函数被重新执行了，子组件的componentWillReceiveProps就会执行
    // 如果一个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    // 当这个组件即将被从页面剔除时会执行
    componentWillUnmount() {
        console.log('child componentWillUnmount');
      }

    handleClick = () => {
        const { index, deleteItem } = this.props;
        deleteItem(index);
    }
}

export default TodoItem;