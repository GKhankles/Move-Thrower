import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './HomePage.jsx';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path = "/" component = {HomePage}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
