import React from 'react';
import ListForm from './ListForm';
import TodoList from './TodoList';
import './components/Todo.css';

const todos = [
  {
  name: 'Practice Yoga',
  id: 1,
  done: false
  },
  {
  name: 'Meditate',
  id: 2,
  done: false
  },
  {
  name: 'Workout',
  id: 3,
  done: false
  },
  {
  name: 'Prepare Breakfast',
  id: 4,
  done: false
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }

  toggleItem = (clickedId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === clickedId) {
          return {...item, done: !item.done};
        } else {
          return item;
        }
      }),
    });
  };

  addItem = (itemName) => {
    const newItem= {
      name: itemName,
      id: new Date(),
      done: false,
    } 
    this.setState({
      todos: [...this.state.todos, newItem],
    });
  }

  // clearList = () => {

  //   this.setState({todos: [...todos]})
  // }

  clearList = () => {
    this.setState({ todos: this.state.todos.filter((todoItem) => todoItem.done === false) 
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2 className='title'>Welcome to your Todo App!</h2>
          <ListForm addItem={this.addItem}/>
        </div>
        <TodoList 
        todos={this.state.todos} 
        toggleItem={this.toggleItem}
        clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
