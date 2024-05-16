// import logo from './logo.svg';
import './App.css';
// import Products from './Products';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Products from './Products';
// import JumbotronComponent from './JumbotronComponent';
import UserForm from './UserForm';


function App() {
  return (
    <div className="App">
      {/* <JumbotronComponent>
        <h1>Learn React w/ Hooks</h1>
        <Products />
      </JumbotronComponent> */}
      <UserForm/>
    </div>
  );
}

export default App;
