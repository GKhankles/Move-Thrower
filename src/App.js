import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import HomePage from './HomePage.jsx';
import signInPage from './SignIn.jsx';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path = "/" component = {signInPage}/>
            <Route path = "/Move-Thrower" component = {signInPage}/>
            <Route path = "/Homepage" component = {HomePage}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
