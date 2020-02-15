import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [
        '学英语',
        'Learn React'
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <div>TodoList</div>
        <label htmlFor="insertArea">输入内容</label>
        <input
          type="text"
          id="insertArea"
          className="input"
          placeholder="请输入"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <section>
          {this.getTodoItems()}
        </section>
      </Fragment>
    );
  }

  getTodoItems() {
    return this.state.list.map((item, index) => (
      <TodoItem 
        key={index}
        content={item} 
        index={index}
        deleteItem={this.handleItemDelete} 
      />
    ))
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState(() =>({ inputValue }));
  }

  handleBtnClick = () => {
    if (!this.state.inputValue) {
      return;
    }

    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete = (delIndex) => {
    this.setState((prevState) => {
      const list = prevState.list.filter((item, index) => delIndex !== index);
      return { list };
    });
  }
}

export default TodoList;