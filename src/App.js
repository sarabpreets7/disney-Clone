import logo from './logo.svg';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Login2 from "./components/login2/login2"
import PrivateRoute from './components/PrivateRoute';
import Detail from "./components/Detail"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Switch>
          
          <Route exact path="/"><Login/></Route>
          <Route exact path="/home"><Home/></Route>
          <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
          <Route exact path="/login"><Login2/></Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}
// function ProtectedRoute(props) {
//   // use 
//   let { currentUser } = useContext(AuthContext);
//   let Component = props.abc;
//   return (<Route {...props} render={(props) => {
//     // console.log(isAuthenticated);
//     return (currentUser?
//     <Component {...props} ></Component> : 
//     <Redirect to="/login"></Redirect>
//     )
//   }}></Route>
//   )
// }

export default App;
