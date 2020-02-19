## React学习笔记

### 生命周期函数
![React生命周期](./4-8React-cycle-function.jpg)

#### initialization(不存在)
##### 组件初始化，执行Constructor，初始state和props

#### componentWillMount
##### 当组件即将被挂载到页面时自动执行

#### render
##### 渲染组件

#### componentDidMount
##### 组件被挂载到页面之后，自动执行

#### componentWillReceiveProps
##### 一个组件要从父组件接受参数
##### 当父组件的render函数被重新执行了，子组件的componentWillReceiveProps就会执行
##### 如果一个组件第一次存在于父组件中，不会执行
##### 如果这个组件之前已经存在于父组件中，才会执行

#### shouldComponentUpdate
##### 组件被更新之前会被执行，返回false时，组件不会被更新

#### componentWillUpdate
##### 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后执行。
##### 只有在shouldComponentUpdate返回真值时，componentWillUpdate才会执行

#### componentDidUpdate
##### 组件更新完成后会自动执行

#### componentWillUnmount
##### 当这个组件即将被从页面剔除时会执行