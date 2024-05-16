// import logo from './logo.svg';
import './App.css';
// import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Products from './Products';
import { Jumbotron, Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Learn React w/ Hooks</h1>
        {/* <Products /> */}
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra
          attention to featured content or information.</p>
          <p><Button variant="danger" disabled>Default</Button></p>
      </Jumbotron>
    </div>
  );
}

export default App;
