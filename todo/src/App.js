import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import "./components/Todo.css";


const tasks = [
  {
    name: 'Wake up',
    id: 1,
    completed: false
  },
  {
    name: 'Eat',
    id: 2,
    completed: false
  },
  {
    name: 'Code',
    id: 3,
    completed: false
  },
  {
    name: 'Sleep',
    id: 4,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }

  toggleItem = id => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  };


  addTask = itemName => {
    const newTask = {
      name: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  handleRemove = (e) => {
    e.preventDefault()
    console.log(this.state.tasks)
    debugger
    this.setState({
      tasks: this.state.tasks.filter((item) => item.completed === false)
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            addTask={this.addTask}
            handleRemove={this.handleRemove}
          />
        </div>

        <div>
          <TodoList
            toggleItem={this.toggleItem}
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
