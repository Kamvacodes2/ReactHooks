// import logo from './logo.svg';
import './App.css';
import React, { useReducer} from 'react';
// import { UserContext } from './index'; useContext
// import Button from 'react-bootstrap/Button'
import ToDoList from './ToDoList';

export const TodosContext = React.createContext();

const todoInitialState = {
  todos: [{id: 1, text: 'finishing writing hooks chapter'},
    {id: 2, text: 'play with kids'},
    {id: 3, text: 'read bible'}
  ]
};

function todosReducer(state, action) {
  switch(action.type) {
    default:
      return todoInitialState
  }
}

function App() {
  const [state, dispatch] = useReducer(todosReducer, todoInitialState)
  return (
    <div>
      <TodosContext.Provider value={{state,dispatch}}><ToDoList/></TodosContext.Provider>
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