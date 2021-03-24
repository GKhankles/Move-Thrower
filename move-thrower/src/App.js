import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import HomePage from './HomePage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route path = "/Move-Thrower" component = {HomePage}/>
          </Switch>
      </Router>
    </div>
  );
}
/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  */

export default App;
