import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login from './Login';
import PrivateRoute from "./PrivateRoute";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {

  // let match = useRouteMatch('/hi/everyone/:d')

  // console.log('higher match in App is,', match)

  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>

        <Route exact path="/"><Home /></Route>  {/* 1) Note this! exact path because inclusive in the sense...  */}
        <Route path="/category"><Category /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/products"><Products /></Route> {/* 2) Do not use "exact" since I want to make nested paths! */}

        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}
