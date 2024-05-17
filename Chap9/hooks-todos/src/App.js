// import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';
// import { UserContext } from './index'; useContext
// import Button from 'react-bootstrap/Button'
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';


export const TodosContext = React.createContext();

const todoInitialState = {
  todos: []
};

function todosReducer(state, action) {
  switch (action.type) {
    case "get":
      return { ...state, todos: action.payload }
    case 'add':
      //add new to do on to array
      const addedToDos = [...state.todos, action.payload]
      return { ...state, todos: addedToDos }

    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [...state.todos.slice(0, updatedToDoIndex), updatedToDo, ...state.todos.slice(updatedToDoIndex + 1)];
      return { ...state, todos: updatedToDos }
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      return { ...state, todos: filteredTodoState }
    default:
      return todoInitialState
  }
}

function App() {
  const [state, dispatch] = useReducer(todosReducer, todoInitialState)
  return (
    <div>
      <TodosContext.Provider value={{ state, dispatch }}><ToDoList /></TodosContext.Provider>
    </div>
  );
}

export default App;

// const initialState = {
//   count: 0
// }

// function reducer(state, action){
//   switch(action.type) {
//     case "increment":
//       return {count: state.count + 1}
//     case "decrement":
//       return {count: state.count -1}
//     case "reset":
//       return initialState
//     default:
//       return initialState
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       Count: {state.count}
//       <br/>
//       <Button onClick={()=>dispatch({type: 'increment'})}>Increment</Button>
//       <span></span>
//       <Button onClick={()=>dispatch({type: 'decrement'})} variant='primary'>Decrement</Button>
//       <span></span>
//       <Button onClick={()=>dispatch({type: 'reset'})} variant='danger'>Reset</Button>
//     </div>
//   );
// }