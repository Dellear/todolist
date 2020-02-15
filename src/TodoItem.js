import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick = () => {
        const { index, deleteItem } = this.props;
        deleteItem(index);
    }
}

export default TodoItem;