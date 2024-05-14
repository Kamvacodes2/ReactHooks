// import logo from './logo.svg';
import './App.css';
// import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function App() {
  return (
    <div className="App">
      <h1>Learn React w/ Hooks</h1>
      {/* <Products /> */}
      <Rating rating='1'/>
      <Rating rating='2'/>
      <Rating rating='3'/>
      <Rating rating='4'/>
      <Rating rating='5'/>
      <Button variant="danger" disabled>Default</Button>
    </div>
  );
}

export default App;
