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

export default App;
