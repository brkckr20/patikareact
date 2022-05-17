import React from "react";
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css'
//PAGES
import About from "./components/About";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Users from "./components/Users";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink /* activeStyle={{ backgroundColor: "black", color: "white"}}  */ activeClassName="aktif" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink /* activeStyle={{ backgroundColor: "black", color: "white"}} */ activeClassName="aktif" to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink exact /* activeStyle={{ backgroundColor: "black", color: "white"}} */ activeClassName="aktif" to="/">Home</NavLink>
        </li>
      </ul>


      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}
