import React from 'react';
import './components/Todo.css'

const TodoItem = props => {
    return (
        <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.done ? 'done' : ''}`} >
            <p>{props.item.name}</p>
        </div>
    );
};

export default TodoItem