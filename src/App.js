import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import NavComponent from "./Components/Home/NavComponent";
import HomePath from "./Components/Home/HomePath";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Components/Management/SignIn";
import SignUp from "./Components/Management/SignUp";
import UserPage from "./Components/DashBoard/UserPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePath} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/getin" exact component={SignUp} />
        <Route path="/dashboard" exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
