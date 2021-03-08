import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
    return(
        <div className='todoList'>
            {props.todos.map(item => (
                <TodoItem key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={props.clearList} className='clearBtn'>
                Clear dat list
            </button>
        </div>
    );
};

export default TodoList;