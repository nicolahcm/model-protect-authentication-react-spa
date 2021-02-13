import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { fakeAuth } from './Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  console.log("location in PrivateRoute is", location)

  // understand rest ... 2 hours ... also because, why is it sent location, even though there is no Route before? See app,

  console.log('rest in PrivateRoute is,', rest)

  return (
    <Route {...rest}>  {/* Notice that we use rest here to not repeat the path of the Component
    Indeed, rest in this case has "path=/admin". If we wanted to protect other views, we would have others.
    So we just need to send the path to PrivateRoute component as props (see App component), without repeating ourselves. */}
      {fakeAuth.isAuthenticated === true ?
        <Component />
        :
        <Redirect to={{ pathname: "/login", state: { from: location, msg: "Hi" } }} />
        /* se non passassi state attribute,
        //   la location object della componente corrispondente alla rotta /route,  non avrebbe l'attributo "state"
        // e quindi non potremmo trovare da dove è arrivato. Prova a toglierlo e rimuoverlo!
        // Inoltre state attribute è un oggetto libero. Puoi mettergli gli attributi che vuoi */
      }
    </Route>
  );
};

export default PrivateRoute;
