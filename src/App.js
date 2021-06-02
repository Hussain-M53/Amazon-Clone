import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import { useEffect } from "react";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51IxIgXEwsZJWmhf75n9TgExr4C9RPtMGRC8CJ7ifETy6iNHqodqAm6Ap7tMPoQO1ABT0uQ4w8yHJHLa8pbo7xU4d00EPAS0chr"
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } else {
        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log("user is ", user);
  return (
    <Router>
      <div className="app"></div>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/checkout">
          <Header />
          <CheckOut />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/order">
          <Header />
          <Orders />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
