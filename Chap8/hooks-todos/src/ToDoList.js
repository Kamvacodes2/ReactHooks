import React, {useContext} from 'react';
import { TodosContext } from './App';

function ToDoList() {
    //receive state and dispatch from index.js
    const {state, dispatch} = useContext(TodosContext);

    return (
        <div>
            {state.todos.map(todo =>(
                <li key={todo.id}>
                    <span>{todo.text}</span>
                </li>
            ))}
        </div>
    )
}

export default ToDoList