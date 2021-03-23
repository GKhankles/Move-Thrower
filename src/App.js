import logo from './logo.svg';
import './App.css';
import MoveCalculator from './MoveCalculator.jsx';
import SignIn from './SignIn.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Move Thrower: The Pokemon Move Calculator </h2>
        <SignIn />
      </header>
      <MoveCalculator />
    </div>
  );
}

export default App;
