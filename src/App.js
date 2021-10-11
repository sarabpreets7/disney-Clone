import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Login2 from "./components/login2/login2"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/home"><Home/></Route>
          <Route exact path="/login"><Login2/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
