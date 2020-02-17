import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.input = React.createRef();
    // 当组件的state或者props发生改变后，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: [
        '学英语',
        'Learn React'
      ]
    };
  }
  
  // 当组件即将被挂载到页面时自动执行
  componentWillMount() {
    console.log('componentWillMount');
  }

  // 渲染组件
  render() {
    console.log('render list');
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
          ref={this.input}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <section ref={section => { this.section = section }}>
          {this.getTodoItems()}
        </section>
      </Fragment>
    );
  }

  // 组件被挂载到页面之后，自动执行
  componentDidMount() {
    console.log('componentDidMount');
    // 输入框聚焦
    const node = this.input.current;
    if(node) {
      node.focus();
    }
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  // 组件被更新之前，它会自动执行，如果返回值是假值，则组件会终止update
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后执行。
  // 只有在shouldComponentUpdate返回真值时，componentWillUpdate才会执行
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 组件更新完成后会自动执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getTodoItems() {
    return this.state.list.map((item, index) => (
      <TodoItem 
        key={item}
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
    }), () => {
      console.log(this.section.querySelectorAll('div').length);
    })
  }

  handleItemDelete = (delIndex) => {
    this.setState(function (prevState) {
      const list = prevState.list.filter((item, index) => delIndex !== index);
      return { list };
    });
  }
}

export default TodoList;