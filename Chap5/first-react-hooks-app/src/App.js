// import logo from './logo.svg';
import './App.css';
// import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import JumbotronComponent from './JumbotronComponent';


function App() {
  return (
    <div className="App">
      <JumbotronComponent>
        <h1>Learn React w/ Hooks</h1>
        <Products />
      </JumbotronComponent>
    </div>
  );
}

export default App;
